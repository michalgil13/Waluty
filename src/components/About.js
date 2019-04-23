import React from 'react'

const About = () => {
  return (
    <div>
      <div className="container">
        <h2 className="center">O projekcie</h2>
        <h4>Aplikacja składa się z trzech modułów:</h4>
        <ul>
          <li><span className="moduleName">Tabeli aktualnych kursów walut</span> dla dowolnie wybranej waluty z listy. Dane pobierane są z API Europejskiego Banku Centralnego.</li>
          <li><span className="moduleName">Kalkulatora</span>, który pozwala dowolnie przeliczać kursy pomiędzy dostępnymi walutami.</li>
          <li><span className="moduleName">Generatora wykresów</span>. Rysowane wykresy pozwalają zobaczyć jak kursy zmieniały się w czasie od 1999 roku do dzisiaj.</li>
        </ul>

        <h4>Technologie użyte do zbudowania aplikacji:</h4>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Materialize CSS / React-Materialize</li>
          <li>Chart.js</li>
          <li>HTML, CSS</li>
        </ul>
      </div>
    </div>
  )
}

export default About