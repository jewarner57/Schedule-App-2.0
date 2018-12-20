import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class PdfView extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = ({
           
            pdfVisible: "hidden",
            pdfStyle: "pdfdoc hidden",
            backgroundStyle: "pdfBackground hidden",
            screenWidth: 200,
            backgroundHeight: {height: 200},
            pdfLoaded: false,
            loadingIconClass: "visible loadingIcon",
            pdfLink: "",
					  errorMessageClass: "hidden",
            
        })
        this.showPDF = this.showPDF.bind(this);
        this.resizeDoc = this.resizeDoc.bind(this);
        this.errorLoadingPDF = this.errorLoadingPDF.bind(this);
        this.pdfDidLoad = this.pdfDidLoad.bind(this);
        this.checkIfPDFLoaded = this.checkIfPDFLoaded.bind(this);
        this.getPDFLink = this.getPDFLink.bind(this);
			  this.testPDFLink = this.testPDFLink.bind(this);
      	this.setLink = this.setLink.bind(this);  
			
        window.addEventListener("resize", this.checkIfPDFLoaded);
    }
    
    componentWillMount() {
        this.getPDFLink();
    }
    
    getPDFLink() {
        
        const linkStart = "https://cors-anywhere.herokuapp.com/http://harrisonburg.k12.va.us/files/user/2/file/HHS_";
        const linkEnd = "_.pdf";
        
        const date = new Date();
        let linkDay = date.getDate() - date.getDay();
        let linkMonth = date.getMonth()+1;
        const linkYear = date.getFullYear()-2000;
        
        
        const monthOverlapDate = new Date(linkYear, date.getMonth()+1, 0);
        //console.log(monthOverlapDate)
        if(linkDay < 1) {
            linkMonth -= 1;
            linkDay = linkDay += monthOverlapDate.getDate();
        }
        
        if(linkDay < 10) {
            linkDay = "0"+linkDay;
        }
        
				let link = linkStart + linkMonth + "-" + linkDay + "-" + linkYear + linkEnd;	
				let counter = 1;
			
				while(counter < 6) {
        	
					this.testPDFLink(link, this.setLink);
					
					let day ="";
					if((linkDay + counter) < 10) {
						day = "0" + (linkDay+counter);
					}
					else {
						day = (linkDay+counter);
					}
					
					link = linkStart + linkMonth + "-" + day + "-" + linkYear + linkEnd;
					counter+=1;
					
				}
				
				
		}
    
		setLink(link, isReal) {
			if(isReal) {
				this.setState({pdfLink: link});
			}
		}								
										
		testPDFLink(link, callback) {
			
			var urlExists = require('url-exists');
			let URLReal;
			urlExists(link, function(err, exists) {
  				
					console.log(exists)
					callback(link, exists);	
			});
				
		
		}
	
		
	
    checkIfPDFLoaded() {
        
        if(this.state.pdfLoaded === true) {
            this.resizeDoc();
        }
        
    }
    
    resizeDoc() {
        const windowWidth = window.innerWidth;
        const backgroundHeight = windowWidth*(628/444);

        const backgroundStyle = {
            height: backgroundHeight,
        }
        this.setState({screenWidth: window.innerWidth, backgroundHeight: backgroundStyle});
    }
    
    showPDF() {
        
        let currentStyle = this.state.pdfVisible;  
			
        if(currentStyle === "hidden" || currentStyle === "hidden backgroundError") {
            currentStyle = "visible";
        }
        else {
            currentStyle = "hidden";
        }
			
				if(this.state.errorMessageClass === "visible errorMessage") {//if the pdf failed to load
						currentStyle += " backgroundError";
				}
        
        this.setState({pdfVisible: currentStyle, pdfStyle: "pdfdoc" + " " + currentStyle, backgroundStyle: "pdfBackground" + " " + currentStyle});
    }
    
    errorLoadingPDF() {
			
				const currentBackgroundStyle = this.state.backgroundStyle
			
        this.setState({pdfLoaded: false, loadingIconClass: "hidden", errorMessageClass: "visible errorMessage", backgroundStyle: currentBackgroundStyle+" backgroundError" });
        console.log(this.state.pdfLink);
    }
    
    pdfDidLoad() {
        
        this.resizeDoc();
        this.setState({pdfLoaded: true, loadingIconClass: "hidden loadingIcon"});
        
        
    }
    
    render() {

        return (
            <div className="pdfSection">
                
                <div className="pdfButtonContainer">
                    <p>Check out the lunch menu!</p>
                    <div className="pdfButtonInnerContainer">
                        <Button
													variant="contained"
                          className="openPdfButton"
                          labelposition="before"
                          color="secondary"
                          onClick={this.showPDF}
                        >
												Lunch Menu
												</Button>
                    </div>
                </div>

            
                    <div className={this.state.backgroundStyle} style={this.state.backgroundHeight}>
                        
                        <CircularProgress size={80} thickness={5} className={this.state.loadingIconClass}/>
          						
												<h3><a href="https://harrisonburg.k12.va.us/District/Department/3-School-Nutrition" target="_blank" className={this.state.errorMessageClass}>Oops! Im having trouble loading the lunch menu. Try viewing it  <span className="lunchPDFErrorYellowHere">Here</span></a></h3>
					
                        <div className={this.state.pdfStyle}>

                            <Document file={this.state.pdfLink} onLoadError = {this.errorLoadingPDF} onLoadSuccess = {this.pdfDidLoad} error="" loading="" noData="">

                                <Page pageNumber={1} width={this.state.screenWidth}/>

                            </Document> 

                        </div>
            
                    </div>
            
            </div>
        )
    }
}