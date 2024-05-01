import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
// import Data from './data/data.csv';
// import logoCss from '../../images/logos/CSS3.png'
// import logoGitCopilot from '../../images/logos/GitHub_Copilot_logo.svg.png'
// import logoHtml from '../../images/logos/HTML5_logo_and_wordmark.svg.png';
// import logoJs from '../../images/logos/JavaScript.png';
// import logoMongo from '../../images/logos/MongoLogo.svg.png';
// import logoNode from '../../images/logos/Nodelogo.svg.png';
// import logoReact from '../../images/logos/Reactlogo.png';
// import logoTailwind from '../../images/logos/Tailwindogo.svg.png';
import './Skills.css';

function Skills() {
  // const [data] = Data;
  // const [data] = useState([90, 93, 43, 53, 85, 70, 90]);
  // const [skill] = useState(['HTML','CSS','JavaScript','ReactJS','Tailwind CSS','Redux','NodeJS','MongoDB']);
  const [data, setData] = useState([]);
  const svgRef = useRef();

  useEffect(() => {
    d3.csv('/skill-data.csv').then((d) => {
      setData(d);
    });
    data.forEach((d) => {
      d.strength = Number(d.strength);
    });
    return () => undefined;
  }, [data]);
  // console.log(data);

  useEffect(() => {
    // set up svg container
    const w = 700;
    const h = 300;

    const svg = d3
      .select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('overflow', 'visible')
      .style('margin-top', '75px');

    // X label
    svg
      .append('text')
      .attr('class', 'x axis-label')
      .attr('x', w / 2)
      .attr('y', h + 50)
      .attr('font-size', '20px')
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .attr('letter-spacing', '5px')
      .attr('font-family', 'mono')
      .text('SKILLS');

    // Y Label
    svg
      .append('text')
      .attr('class', 'y axis-label')
      .attr('x', -(h / 2))
      .attr('y', -35)
      .attr('font-size', '20px')
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .attr('fill', 'white')
      .attr('letter-spacing', '5px')
      .attr('font-family', 'mono')
      .text('STRENGTH');

    // setting the scaling
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.skill))
      .range([0, w])
      .padding(0.5);

    const yScale = d3.scaleLinear().domain([0, 100]).range([h, 0]);

    data.forEach((d) => {
      d.strength = Number(d.strength);
    });

    // setting the axes
    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg
      .append('g')
      .call(xAxis)
      .attr('transform', `translate(0,${h})`)
      .style('color', 'white');
    svg.append('g').call(yAxis).style('color', 'white');

    // setting the svg data
    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d.skill))
      .attr('y', (d) => yScale(d.strength))
      // .style('stroke','white')
      .attr('width', xScale.bandwidth())
      .style('fill', (d) => d.color)
      .transition()
      .duration(750)
      .attr('height', (d) => h - yScale(d.strength));
  }, [data]);

  return (
    <>
      <h1 className="heading">Skills</h1>
      {/* <div className='container'>
        
        <img className='img' width={'150px'} src={logoHtml} alt='HTML5'/>
        <img className='img' width={'150px'} src={logoCss} alt='CSS3'/>
        <img className='img' width={'150px'} src={logoJs} alt='JavaScript'/>
        </div>
        <div className='container'>
        <img className='img' width={'250px'} height={'50px'} src={logoTailwind} alt='Tailwind CSS'/>
        <img className='img' width={'150px'} src={logoReact} alt='ReactJS'/>
        <img className='img' width={'150px'} src={logoNode} alt='NodeJS'/>
        </div>
        <div>
        <img className='img' src={logoMongo} alt='MongoDB'/>
        <img className='img' width='100%' src={logoGitCopilot} alt='Github Copilot'/>
      </div> */}
      <div className="svgContainer">
        <svg ref={svgRef}></svg>
      </div>
    </>
  );
}

export default Skills;
