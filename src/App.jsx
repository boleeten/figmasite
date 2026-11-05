import { useState } from 'react'

const steps = [
  { title: '1. Clone', desc: 'GitHub의 이 저장소를 Figma 클라우드로 복사합니다.' },
  { title: '2. Install', desc: '.figma/make/install 실행 → npm install' },
  { title: '3. Dev', desc: '.figma/make/dev 실행 → Vite 서버가 "/"를 서빙' },
  { title: '4. Code layer', desc: '지금 보고 있는 이 화면이 캔버스에 표시됩니다.' },
  { title: '5. Branch', desc: 'AI로 수정한 내용을 Create branch로 GitHub에 올립니다.' },
]

export default function App() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(0)

  return (
    <main className="page">
      <header>
        <span className="badge">Figma Code layer 샘플</span>
        <h1>Hello, figmasite 👋</h1>
        <p className="lead">
          이 화면이 보인다면 Clone repository가 성공한 거예요.
          아래 단계를 눌러 흐름을 확인해 보세요.
        </p>
      </header>

      <section className="steps">
        {steps.map((s, i) => (
          <button
            key={s.title}
            className={i === active ? 'step active' : 'step'}
            onClick={() => setActive(i)}
          >
            <strong>{s.title}</strong>
            {i === active && <span>{s.desc}</span>}
          </button>
        ))}
      </section>

      <section className="card">
        <h2>실제로 동작하는 코드인지 확인</h2>
        <p>버튼을 누르면 React state가 바뀝니다. 이미지가 아니라 실행 중인 앱이에요.</p>
        <div className="counter">
          <button onClick={() => setCount((c) => c - 1)}>−</button>
          <output>{count}</output>
          <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
      </section>

      <section className="card tip">
        <h2>다음으로 해볼 것</h2>
        <p>
          Figma 오른쪽 패널의 "Ask for changes"에
          <em> "버튼 색을 초록색으로 바꿔줘"</em>라고 입력해 보세요.
          변경 사항이 생기면 Create branch로 GitHub에 올릴 수 있습니다.
        </p>
      </section>
    </main>
  )
}
