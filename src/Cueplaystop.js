import React, { Component } from 'react';
import './CuePlayStop.css';

class Cueplaystop extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {glowActive: false};
        this.holdGlow = this.holdGlow.bind(this);
    }
    
    holdGlow() {
        this.setState( {glowActive: !this.state.glowActive} );
    }
   
    render() {
        // modify css if active
        const cueGlow = this.state.glowActive? 'cueGlow' : 'cueGlow hide'     

        const glowElement = 
            <g className={cueGlow} opacity="0.5" filter="url(#filter1_fa)" >
                <path d="M174 99C174 140.421 140.421 174 99 174C57.5786 174 24 140.421 24 99C24 57.5786 57.5786 24 99 24C140.421 24 174 57.5786 174 99Z" fill="url(#paint1_lineara)" />
            </g>;
                       
        return (
            <div>
                {/* slider bar */}
                <div>
                    <svg width="364" height="359" viewBox="0 0 364 359" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_dd)">
                        <path d="M251.748 35.6159C279.459 63.3274 185.048 272.915 157.364 300.599C129.68 328.283 84.7729 328.26 57.0614 300.549C29.3499 272.837 29.3276 227.93 57.0116 200.246C84.6956 172.562 224.036 7.90437 251.748 35.6159Z" fill="url(#paint0_linear)"/>
                        </g>
                        <g filter="url(#filter1_dd)">
                        <path d="M307.417 50.2727C335.182 78.0376 335.194 123.041 307.444 150.791C150.135 308.1 144.489 343.193 80.6909 316.5C241.478 155.713 179.148 77.996 206.898 50.2459C234.648 22.4959 279.652 22.5079 307.417 50.2727Z" fill="url(#paint1_linear)"/>
                        </g>
                        <g filter="url(#filter2_i)">
                        <path d="M237.329 74.6601C255.717 93.8471 177.119 255.605 155.844 277.805C134.57 300.004 102.416 302.446 84.0282 283.259C65.6401 264.072 67.9804 230.522 89.2553 208.322C110.53 186.123 218.941 55.4731 237.329 74.6601Z" fill="#A3A3A3"/>
                        <path d="M274.27 84.808C292.693 104.032 290.42 137.572 269.193 159.721C148.86 285.282 145.19 311.068 100.975 294.549C223.969 166.212 181.248 112.255 202.475 90.1054C223.703 67.9558 255.846 65.5841 274.27 84.808Z" fill="#959595"/>
                        </g>
                        <defs>
                        <filter id="filter0_dd" x="0" y="17.6776" width="341.047" height="341.047" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                        </filter>
                        <filter id="filter1_dd" x="6.66748" y="0" width="357.31" height="357.31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                        </filter>
                        <filter id="filter2_i" x="71.6331" y="71.8085" width="219.095" height="233.218" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="4" dy="6"/>
                        <feGaussianBlur stdDeviation="3"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                        </filter>
                        <linearGradient id="paint0_linear" x1="37.3733" y1="273.149" x2="150.017" y2="270.778" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#726B7E"/>
                        <stop offset="1" stop-color="#150227"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="187.201" y1="123.31" x2="300.089" y2="120.96" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#726B7E"/>
                        <stop offset="1" stop-color="#150227"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
                
                {/* cue button */}
                <div>
                    <svg onMouseDown={this.holdGlow} onMouseUp={this.holdGlow} width="198" height="198" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* glow state */}
                        {this.state.glowActive ? 'true' : 'false'}
                        {console.log("glowActive state: " + this.state.glowActive)}
                        
                        {/* button */}
                        <g filter="url(#filter0_dda)">
                            <path d="M163.809 99C163.809 134.899 134.708 164 98.8091 164C62.9106 164 33.8091 134.899 33.8091 99C33.8091 63.1015 62.9106 34 98.8091 34C134.708 34 163.809 63.1015 163.809 99Z" fill="url(#paint0_lineara)"/>
                        </g>
                        
                        {/* glow */}
                        {glowElement}

                        {/* text */}
                        <g filter="url(#filter2_ia)">
                            <path d="M83.7803 105.343C83.5312 108.786 82.2568 111.496 79.957 113.473C77.6719 115.451 74.6543 116.439 70.9043 116.439C66.8027 116.439 63.5728 115.062 61.2144 112.309C58.8706 109.54 57.6987 105.746 57.6987 100.927V98.9712C57.6987 95.895 58.2407 93.1851 59.3247 90.8413C60.4087 88.4976 61.9541 86.7031 63.9609 85.458C65.9824 84.1982 68.3262 83.5684 70.9922 83.5684C74.6836 83.5684 77.6572 84.5571 79.9131 86.5347C82.1689 88.5122 83.4727 91.2881 83.8242 94.8623H77.2324C77.0713 92.7969 76.4927 91.3027 75.4966 90.3799C74.5151 89.4424 73.0137 88.9736 70.9922 88.9736C68.7949 88.9736 67.147 89.7646 66.0483 91.3467C64.9644 92.9141 64.4077 95.353 64.3784 98.6636V101.081C64.3784 104.538 64.8984 107.064 65.9385 108.661C66.9932 110.258 68.6484 111.056 70.9043 111.056C72.9404 111.056 74.4565 110.595 75.4526 109.672C76.4634 108.734 77.042 107.292 77.1885 105.343H83.7803ZM112.323 84.0078V105.08C112.323 108.581 111.224 111.349 109.027 113.385C106.844 115.421 103.856 116.439 100.062 116.439C96.3267 116.439 93.3604 115.451 91.1631 113.473C88.9658 111.496 87.8452 108.778 87.8013 105.321V84.0078H94.3931V105.124C94.3931 107.218 94.8911 108.749 95.8872 109.716C96.8979 110.668 98.2896 111.144 100.062 111.144C103.768 111.144 105.65 109.196 105.709 105.299V84.0078H112.323ZM136.976 102.135H124.32V110.705H139.173V116H117.728V84.0078H139.129V89.3472H124.32V96.9717H136.976V102.135Z" fill="#E8E1E1"/>
                        </g>

                        {/* defs */}
                        <defs>
                            <filter id="filter0_dda" x="29.8091" y="34" width="138" height="138" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                            </filter>
                            <filter id="filter1_fa" x="0" y="0" width="198" height="198" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur"/>
                            </filter>
                            <filter id="filter2_ia" x="57.6987" y="83.5684" width="81.4746" height="35.8711" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="3"/>
                                <feGaussianBlur stdDeviation="1.5"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                            </filter>

                            <linearGradient id="paint0_lineara" x1="38.8091" y1="68.5" x2="113.309" y2="140" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#EEC458"/>
                                <stop offset="1" stop-color="#E09607"/>
                            </linearGradient>
                            <linearGradient id="paint1_lineara" x1="29.7692" y1="63.8077" x2="115.731" y2="146.308" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#EEC458"/>
                                <stop offset="1" stop-color="#E09607"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                
                             
            </div>
        );
    }
}

export default Cueplaystop;

