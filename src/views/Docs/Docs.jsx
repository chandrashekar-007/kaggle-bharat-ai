import React from 'react'
import './Docs.css'

export default function Docs() {
  return (
      <section className={`docs-section`}>
    <div className='container'>
        <div className="docs-heading">How To Use Kaggle</div>
        <div className="docs-content">
            <a href="#">
                <div className="docs-card">
                    <div className="docs-card-title">Competitions</div>
                    <div className="docs-card-para">Find challenges for every interest level</div>
                </div>
            </a>
            <a href="#">
                <div className="docs-card">
                    <div className="docs-card-title">Datasets</div>
                    <div className="docs-card-para">Explore, analyze, and share quality data</div>
                </div>
            </a>
            <a href="#">
                <div className="docs-card">
                    <div className="docs-card-title">Notebooks</div>
                    <div className="docs-card-para">Explore and run machine learning code with Kaggle Notebooks, a cloud computational environment that enables reproducible and collaborative analysis</div>


                </div>
            </a>
            <a href="#">
                <div className="docs-card">
                    <div className="docs-card-title">Public API</div>
                    <div className="docs-card-para">Create Datasets, Notebooks, and connect with Kaggle</div>
                </div>
            </a>
            <a href="#">
                <div className="docs-card">
                    <div className="docs-card-title">Efficient GPU Usage Tips</div>
                    <div className="docs-card-para"></div>
                </div>
            </a>
            <a href="#">
                <div className="docs-card">
                    <div className="docs-card-title">Tensor Processing Units (TPUs)</div>
                    <div className="docs-card-para"></div>
                </div>
            </a>
            <a href="#">
                <div className="docs-card">
                    <div className="docs-card-title">Models</div>
                    <div className="docs-card-para">Use and share pre-trained models</div>
                </div>
            </a>
            <a href="#">
                <div className="docs-card">
                    <div className="docs-card-title">Competitions Setup</div>
                    <div className="docs-card-para">Create a new competition or competition metric</div>
                </div>
            </a>
        </div>
    </div>
      </section>
  )
}

