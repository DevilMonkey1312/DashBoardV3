import React from 'react'
import './footer.css'


function Footer() {
  return (
    <footer id='footer' className="footer">
        <div className="copyright">
            &copy; Copyright {''}
            <strong>
                <span>Kacper Technologies</span>
            </strong>
            . All Rights Reserved to ME!!!
        </div>
        <div className="credits">
            Designed By <a href="#">Kacper</a>
        </div>
    </footer>
  )
}

export default Footer   