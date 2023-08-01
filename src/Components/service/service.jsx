import React from 'react'
import './service.css'

const service = () => {
  return (
    <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">My services</h2>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                        <i className="fas fa-paint-brush"></i>
                        <div className="text">Web Design</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-chart-line"></i>
                        <div className="text">Advertising</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-code"></i>
                        <div className="text">Apps Design</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default service