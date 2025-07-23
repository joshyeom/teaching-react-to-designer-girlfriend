import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CodeBlock from './CodeBlock'

// react-syntax-highlighter 모킹 - 외부 라이브러리 의존성 제거
vi.mock('react-syntax-highlighter', () => ({
  Prism: ({ children, language, showLineNumbers, customStyle, lineNumberStyle, ...props }: any) => (
    <div 
      data-testid="syntax-highlighter"
      data-language={language}
      data-show-line-numbers={showLineNumbers}
      style={customStyle}
      {...props}
    >
      {children}
    </div>
  )
}))

// 스타일 모킹
vi.mock('react-syntax-highlighter/dist/esm/styles/prism', () => ({
  vscDarkPlus: {}
}))

describe('CodeBlock', () => {
  it('기본 props로 정상적으로 렌더링되는지 테스트', () => {
    const testCode = 'const hello = "world";'
    
    render(<CodeBlock code={testCode} />)
    
    // 코드 블록 컨테이너가 렌더링되는지 확인
    const container = screen.getByTestId('syntax-highlighter').parentElement
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('my-4', 'rounded-xl', 'overflow-x-auto', 'border', 'border-slate-700', 'bg-[#1e1e1e]')
    
    // 코드 내용이 표시되는지 확인
    expect(screen.getByText(testCode)).toBeInTheDocument()
  })

  it('커스텀 언어가 올바르게 적용되는지 테스트', () => {
    const testCode = 'print("Hello, Python!")'
    const language = 'python'
    
    render(<CodeBlock code={testCode} language={language} />)
    
    const syntaxHighlighter = screen.getByTestId('syntax-highlighter')
    expect(syntaxHighlighter).toHaveAttribute('data-language', language)
  })

  it('라인 번호 표시/숨김이 올바르게 작동하는지 테스트', () => {
    const testCode = 'function test() { return true; }'
    
    // 라인 번호 표시 (기본값)
    const { rerender } = render(<CodeBlock code={testCode} />)
    let syntaxHighlighter = screen.getByTestId('syntax-highlighter')
    expect(syntaxHighlighter).toHaveAttribute('data-show-line-numbers', 'true')
    
    // 라인 번호 숨김
    rerender(<CodeBlock code={testCode} showLineNumbers={false} />)
    syntaxHighlighter = screen.getByTestId('syntax-highlighter')
    expect(syntaxHighlighter).toHaveAttribute('data-show-line-numbers', 'false')
  })

  it('커스텀 className이 올바르게 적용되는지 테스트', () => {
    const testCode = 'const test = 123;'
    const customClass = 'custom-code-block'
    
    render(<CodeBlock code={testCode} className={customClass} />)
    
    const container = screen.getByTestId('syntax-highlighter').parentElement
    expect(container).toHaveClass(customClass)
  })

  it('복잡한 코드 구조가 올바르게 렌더링되는지 테스트', () => {
    const complexCode = `
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 사용 예시
console.log(fibonacci(10));
    `.trim()
    
    render(<CodeBlock code={complexCode} language="javascript" />)
    
    // 복잡한 코드가 모두 표시되는지 확인
    expect(screen.getByText(/function fibonacci/)).toBeInTheDocument()
    expect(screen.getByText(/console.log/)).toBeInTheDocument()
  })

  it('빈 코드 문자열이 전달되었을 때 정상적으로 처리되는지 테스트', () => {
    render(<CodeBlock code="" />)
    
    const syntaxHighlighter = screen.getByTestId('syntax-highlighter')
    expect(syntaxHighlighter).toBeInTheDocument()
    expect(syntaxHighlighter).toBeEmptyDOMElement()
  })

  it('특수 문자가 포함된 코드가 올바르게 렌더링되는지 테스트', () => {
    const specialCharCode = 'const regex = /[!@#$%^&*()]/g;'
    
    render(<CodeBlock code={specialCharCode} />)
    
    expect(screen.getByText(specialCharCode)).toBeInTheDocument()
  })

  it('기본 언어 설정이 jsx인지 테스트', () => {
    const testCode = '<div>Hello React</div>'
    
    render(<CodeBlock code={testCode} />)
    
    const syntaxHighlighter = screen.getByTestId('syntax-highlighter')
    expect(syntaxHighlighter).toHaveAttribute('data-language', 'jsx')
  })

  it('컴포넌트의 데이터 속성이 올바르게 전달되는지 테스트', () => {
    const testCode = 'const style = "test";'
    
    render(<CodeBlock code={testCode} />)
    
    const syntaxHighlighter = screen.getByTestId('syntax-highlighter')
    
    // 모킹된 컴포넌트의 기본 속성들이 올바르게 설정되었는지 확인
    expect(syntaxHighlighter).toHaveAttribute('data-testid', 'syntax-highlighter')
    expect(syntaxHighlighter).toHaveAttribute('data-language', 'jsx')
    expect(syntaxHighlighter).toHaveAttribute('data-show-line-numbers', 'true')
  })
})