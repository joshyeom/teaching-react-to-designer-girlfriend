import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ChecklistItem from './CheckList'

describe('ChecklistItem', () => {
  it('체크박스와 라벨이 정상적으로 렌더링되는지 테스트', () => {
    const testProps = {
      id: 'test-checkbox',
      label: 'Test Label'
    }
    
    // 컴포넌트 렌더링
    render(<ChecklistItem {...testProps} />)
    
    // 체크박스 요소 존재 확인
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    
    // 라벨 텍스트 존재 확인
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
    
    // 체크박스 초기 상태가 unchecked인지 확인
    expect(checkbox).not.toBeChecked()
  })

  it('체크박스 클릭 시 상태가 변경되는지 테스트', () => {
    const testProps = {
      id: 'clickable-checkbox',
      label: 'Clickable Item'
    }
    
    render(<ChecklistItem {...testProps} />)
    
    const checkbox = screen.getByRole('checkbox')
    
    // 초기 상태 확인
    expect(checkbox).not.toBeChecked()
    
    // 체크박스 클릭
    fireEvent.click(checkbox)
    
    // 클릭 후 상태 확인
    expect(checkbox).toBeChecked()
    
    // 다시 클릭하여 상태 토글 확인
    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('체크 상태에 따라 스타일이 변경되는지 테스트', () => {
    const testProps = {
      id: 'style-checkbox',
      label: 'Style Test Item'
    }
    
    render(<ChecklistItem {...testProps} />)
    
    const checkbox = screen.getByRole('checkbox')
    // label 요소 자체를 선택 (for 속성을 가진 label 태그)
    const labelElement = screen.getByText('Style Test Item').closest('label')
    
    // 초기 상태에서 opacity-60과 line-through 클래스가 없는지 확인
    expect(labelElement).not.toHaveClass('opacity-60', 'line-through')
    
    // 체크박스 클릭하여 체크 상태로 변경
    fireEvent.click(checkbox)
    
    // 체크 후 스타일 클래스가 적용되었는지 확인
    expect(labelElement).toHaveClass('opacity-60', 'line-through')
  })

  it('라벨 클릭 시에도 체크박스가 토글되는지 테스트', () => {
    const testProps = {
      id: 'label-click-test',
      label: 'Label Click Test'
    }
    
    render(<ChecklistItem {...testProps} />)
    
    const checkbox = screen.getByRole('checkbox')
    const labelText = screen.getByText('Label Click Test')
    
    // 초기 상태 확인
    expect(checkbox).not.toBeChecked()
    
    // 라벨 텍스트 클릭
    fireEvent.click(labelText)
    
    // 라벨 클릭으로도 체크박스가 체크되는지 확인
    expect(checkbox).toBeChecked()
  })

  it('접근성 속성이 올바르게 설정되는지 테스트', () => {
    const testProps = {
      id: 'accessibility-test',
      label: 'Accessibility Test'
    }
    
    render(<ChecklistItem {...testProps} />)
    
    const checkbox = screen.getByRole('checkbox')
    const label = screen.getByLabelText('Accessibility Test')
    
    // htmlFor 속성과 id 속성이 연결되어 있는지 확인
    expect(checkbox).toHaveAttribute('id', 'accessibility-test')
    expect(label).toBeInTheDocument()
    
    // 체크박스 타입이 올바른지 확인
    expect(checkbox).toHaveAttribute('type', 'checkbox')
  })

  it('다양한 라벨 텍스트가 정상적으로 표시되는지 테스트', () => {
    const specialCharacterLabel = '특수문자!@#$%^&*()_+='
    const longLabel = 'This is a very long label text that should be handled properly by the component'
    
    // 특수문자 라벨 테스트
    const { rerender } = render(
      <ChecklistItem id="special-char" label={specialCharacterLabel} />
    )
    expect(screen.getByText(specialCharacterLabel)).toBeInTheDocument()
    
    // 긴 라벨 텍스트 테스트
    rerender(<ChecklistItem id="long-label" label={longLabel} />)
    expect(screen.getByText(longLabel)).toBeInTheDocument()
  })
})