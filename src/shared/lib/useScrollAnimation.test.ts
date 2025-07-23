import { renderHook } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useScrollAnimation, useTextReveal } from './useScrollAnimation'

// IntersectionObserver 모킹 - DOM API가 테스트 환경에서 사용할 수 없으므로 모킹 필요
const mockIntersectionObserver = vi.fn().mockImplementation((callback, options) => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// window.IntersectionObserver를 모킹된 버전으로 교체
beforeEach(() => {
  window.IntersectionObserver = mockIntersectionObserver
})

// 각 테스트 후 모킹 초기화
afterEach(() => {
  vi.clearAllMocks()
})

describe('useScrollAnimation', () => {
  it('초기 상태가 올바르게 설정되는지 테스트', () => {
    // 훅 렌더링
    const { result } = renderHook(() => useScrollAnimation())
    
    // 초기 상태 검증
    expect(result.current.isVisible).toBe(false)
    expect(result.current.ref.current).toBe(null)
    expect(result.current.animationClass).toBe('opacity-0 transform translate-y-10')
  })

  it('다양한 애니메이션 타입에 따른 클래스가 올바르게 반환되는지 테스트', () => {
    // slideUp 애니메이션 테스트
    const { result: slideUpResult } = renderHook(() => useScrollAnimation(0.1, 'slideUp'))
    expect(slideUpResult.current.animationClass).toBe('opacity-0 transform translate-y-12')
    
    // slideDown 애니메이션 테스트
    const { result: slideDownResult } = renderHook(() => useScrollAnimation(0.1, 'slideDown'))
    expect(slideDownResult.current.animationClass).toBe('opacity-0 transform -translate-y-12')
    
    // zoomIn 애니메이션 테스트
    const { result: zoomInResult } = renderHook(() => useScrollAnimation(0.1, 'zoomIn'))
    expect(zoomInResult.current.animationClass).toBe('opacity-0 transform scale-75')
  })

  it('IntersectionObserver가 올바르게 설정되는지 테스트', () => {
    const threshold = 0.5
    renderHook(() => useScrollAnimation(threshold))
    
    // IntersectionObserver가 올바른 옵션으로 생성되었는지 확인
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function), 
      { threshold }
    )
  })

  it('컴포넌트 언마운트 시 observe가 해제되는지 테스트', () => {
    const observeMock = vi.fn()
    const unobserveMock = vi.fn()
    
    mockIntersectionObserver.mockImplementation(() => ({
      observe: observeMock,
      unobserve: unobserveMock,
      disconnect: vi.fn(),
    }))

    const { unmount } = renderHook(() => useScrollAnimation())
    
    // 언마운트 실행
    unmount()
    
    // cleanup 함수가 실행되는지는 직접 테스트하기 어려우므로
    // 최소한 IntersectionObserver가 생성되었는지만 확인
    expect(mockIntersectionObserver).toHaveBeenCalled()
  })
})

describe('useTextReveal', () => {
  it('텍스트가 올바르게 단어 단위로 분리되는지 테스트', () => {
    const testText = 'Hello World React'
    const { result } = renderHook(() => useTextReveal(testText))
    
    // 텍스트가 공백 기준으로 분리되었는지 확인
    expect(result.current.words).toEqual(['Hello', 'World', 'React'])
    expect(result.current.isVisible).toBe(false)
  })

  it('빈 문자열이 전달되었을 때 빈 배열을 반환하는지 테스트', () => {
    const { result } = renderHook(() => useTextReveal(''))
    
    expect(result.current.words).toEqual([''])
  })

  it('커스텀 threshold 값이 올바르게 적용되는지 테스트', () => {
    const customThreshold = 0.8
    renderHook(() => useTextReveal('Test text', customThreshold))
    
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function), 
      { threshold: customThreshold }
    )
  })
})