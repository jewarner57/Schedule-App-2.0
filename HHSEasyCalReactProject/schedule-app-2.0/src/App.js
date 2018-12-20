import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, amber } from '@material-ui/core/colors';
import CountdownTimer from './CountdownTimer.js';
import SchedulePicker from './SchedulePicker.js';
import { Timeline } from 'react-twitter-widgets';
import Footer from './Footer.js';
import PdfView from './PdfView.js';



const orangeBlueTheme = createMuiTheme({
  palette: {
		type:'dark',
		primary: blue,
    secondary: {
			main: amber[400],
			contrastText: "white",
		},	
  },
	tabs: {
		backgroundColor:blue,
	},
})


//Block Schedules

    //Regluar Day Block Info
    const regularBlockHighlightedTitleWords = ["", "First ", "", "Second ", "", "Third ", "", "Fourth "];
    const regularBlockRegularTitleWords = ["School Starts In:", "Block Ends In", "Class Change", "Block Ends In", "Class Change", "Block Ends In", "Class Change", "Block Ends In"];
    const regularBlockScheduleTimes = [745, 916, 925, 1053, 1100, 1300, 1307, 1435];

    //Adv ELT Day Block Info
    const advisoryeltBlockHighlightedTitleWords = ["", "First ", "", "ADV/ELT ", "", "Second ", "", "Third ", "", "Fourth "];
    const advisoryeltBlockRegularTitleWords = ["School Starts In:", "Ends In:", "Class Change:", "Block Ends In", "Class Change", "Block Ends In", "Class Change", "Block Ends In", "Class Change", "Block Ends In"];
    const advisoryeltBlockScheduleTimes = [745, 903, 910, 950, 959, 1114, 1121, 1313, 1320, 1435];

    //2 Hour Delay Block Info
    const twoHourDelayBlockHighlightedTitleWords = ["", "First ", "", "Second ", "", "Third ", "", "Fourth "];
    const twoHourDelayBlockTitleWords = ["", "", "", "", "", "" , "", ""];
    const twoHourDelayBlockScheduleTimes = [945, 1040, 1047, 1138, 1145, 1337, 1344, 1435];

    //1 Hour Delay Block Info
    const oneHourDelayBlockHighlightedTitleWords = ["", "First ", "", "Second ", "", "Third ", "", "Fourth "];
    const oneHourDelayBlockTitleWords = ["", "", "", "", "", "" , "", ""];
    const oneHourDelayBlockScheduleTimes = [845, 946, 955, 1053, 1100, 1300, 1307, 1435];

		//Early Release Block Info
    const earlyReleaseBlockHighlightedTitleWords = ["", "First ", "", "Second ", "", "Third ", "", "Fourth "];
    const earlyReleaseBlockTitleWords = ["", "", "", "", "", "" , "", ""];
    const earlyReleaseBlockScheduleTimes = [745, 846, 855, 952, 959, 1056, 1103, 1200];

		//Pep Rally Release Block Info
    const pepRallyBlockHighlightedTitleWords = ["", "First ", "", "Second ", "", "Third ", "", "Fourth ", "", "Pep Rally"];
    const pepRallyBlockTitleWords = ["", "", "", "", "", "" , "", "", ""];
    const pepRallyBlockScheduleTimes = [745, 906, 915, 1033, 1040, 1232, 1239, 1357, 1357, 1435];

		//Assembly Block Info
    const assemblyBlockHighlightedTitleWords = ["", "First ", "", "Assembly ", "", "Second ", "", "Third ", "", "Fourth"];
    const assemblyBlockTitleWords = ["", "", "", "", "", "" , "", "", ""];
    const assemblyBlockScheduleTimes = [745, 846, 855, 953, 953, 1053, 1100, 1300, 1307, 1435];
    
//Lunch Schedule

    //Regluar Day Lunch Info
    const regularLunchHighlightedTitleWords = ["", "A ", "", "B ", "", "C ", "", "D "];
    const regularLunchRegularTitleWords = ["Lunches Start In:", "Lunch Ends In", "Class Change", "Lunch Ends In", "Class Change", "Lunch Ends In", "Class Change", "Lunch Ends In"];
    const regularLunchScheduleTimes = [1100, 1125, 1130, 1155, 1200, 1225, 1230, 1300];

    //Adv/ELT Day Lunch Info
    const advisoryeltLunchHighlightedTitleWords = ["", "A ", "", "B ", "", "C ", "", "D "];
    const advisoryeltLunchRegularTitleWords = ["Lunches Start In:", "Lunch Ends In", "Class Change", "Lunch Ends In", "Class Change", "Lunch Ends In", "Class Change", "Lunch Ends In"];
    const advisoryeltLunchScheduleTimes = [1121, 1145, 1149, 1213, 1217, 1241, 1245, 1313];

    //2 Hour Delay Lunch Info
    const twoHourDelayLunchHighlightedTitleWords = ["", "A ", "", "B ", "", "C ", "", "D "];
    const twoHourDelayLunchTitleWords = ["Lunches Start In:", "Lunch Ends In", "Class Change", "Lunch Ends In", "Class Change", "Lunch Ends In", "Class Change", "Lunch Ends In"];
    const twoHourDelayLunchScheduleTimes = [1145, 1209, 1213, 1237, 1241, 1305, 1309, 1337];

    //1 Hour Delay Lunch Info
    const oneHourDelayLunchHighlightedTitleWords = ["", "A ", "", "B ", "", "C ", "", "D "];
    const oneHourDelayLunchTitleWords = ["Lunches Start In:", "Lunch Ends In", "Class Change", "Lunch Ends In", "Class Change", "Lunch Ends In", "Class Change", "Lunch Ends In"];
    const oneHourDelayLunchScheduleTimes = [1100, 1125, 1130, 1155, 1200, 1225, 1230, 1300];
    
		//Early Release Lunch Info
    const earlyReleaseLunchHighlightedTitleWords = ["", " ", "", " ", "", " ", "", " "];
    const earlyReleaseLunchTitleWords = ["", "", "", "", "", "" , "", ""];
    const earlyReleaseLunchScheduleTimes = [];

		//Pep Rally Lunch Info
    const pepRallyLunchHighlightedTitleWords = ["", "A ", "", "B ", "", "C ", "", "D "];
    const pepRallyLunchTitleWords = ["Lunches Start In:", "Lunch Ends In", "Class Change", "Lunch Ends In", "Class Change", "Lunch Ends In", "Class Change", "Lunch Ends In"];
    const pepRallyLunchScheduleTimes = [1040, 1104, 1108, 1132, 1136, 1200, 1204, 1232];

		//Assembly Lunch Info
    const assemblyLunchHighlightedTitleWords = ["", "A ", "", "B ", "", "C ", "", "D "];
    const assemblyLunchTitleWords = ["Lunches Start In:", "Lunch Ends In", "Class Change", "Lunch Ends In", "Class Change", "Lunch Ends In", "Class Change", "Lunch Ends In"];
    const assemblyLunchScheduleTimes = [1100, 1125, 1130, 1155, 1200, 1225, 1230, 1300];

class App extends Component {
    
  constructor(props) {
        super(props);

        this.state = {
            blockSchedules: [
                
							(regularBlockHighlightedTitleWords : regularBlockHighlightedTitleWords),
							(regularBlockRegularTitleWords : regularBlockRegularTitleWords),
							(regularBlockScheduleTimes : regularBlockScheduleTimes),
                
							(advisoryeltBlockHighlightedTitleWords : advisoryeltBlockHighlightedTitleWords),
							(advisoryeltBlockRegularTitleWords : advisoryeltBlockRegularTitleWords),
							(advisoryeltBlockScheduleTimes : advisoryeltBlockScheduleTimes),
                
							(oneHourDelayBlockHighlightedTitleWords : oneHourDelayBlockHighlightedTitleWords),
							(oneHourDelayBlockTitleWords : oneHourDelayBlockTitleWords),
							(oneHourDelayBlockScheduleTimes : oneHourDelayBlockScheduleTimes),
                
							(twoHourDelayBlockHighlightedTitleWords : twoHourDelayBlockHighlightedTitleWords),
							(twoHourDelayBlockTitleWords : twoHourDelayBlockTitleWords),
							(twoHourDelayBlockScheduleTimes : twoHourDelayBlockScheduleTimes),
							
							(earlyReleaseBlockHighlightedTitleWords :  earlyReleaseBlockHighlightedTitleWords),
							(earlyReleaseBlockTitleWords :  earlyReleaseBlockTitleWords),
							(earlyReleaseBlockScheduleTimes :  earlyReleaseBlockScheduleTimes),
							
							(pepRallyBlockHighlightedTitleWords :  pepRallyBlockHighlightedTitleWords),
							(pepRallyBlockTitleWords :  pepRallyBlockTitleWords),
							(pepRallyBlockScheduleTimes :  pepRallyBlockScheduleTimes),
							
							(assemblyBlockHighlightedTitleWords :  assemblyBlockHighlightedTitleWords),
							(assemblyBlockTitleWords :  assemblyBlockTitleWords),
							(assemblyBlockScheduleTimes :  assemblyBlockScheduleTimes),
            ],
            
            lunchSchedules: [
                
							(regularLunchHighlightedTitleWords : regularLunchHighlightedTitleWords),
							(regularLunchRegularTitleWords : regularLunchRegularTitleWords),
							(regularLunchScheduleTimes : regularLunchScheduleTimes),
                
							(advisoryeltLunchHighlightedTitleWords : advisoryeltLunchHighlightedTitleWords),
							(advisoryeltLunchRegularTitleWords : advisoryeltLunchRegularTitleWords),
							(advisoryeltLunchScheduleTimes : advisoryeltLunchScheduleTimes),
                
							(oneHourDelayLunchHighlightedTitleWords : oneHourDelayLunchHighlightedTitleWords),
							(oneHourDelayLunchTitleWords : oneHourDelayLunchTitleWords),
							(oneHourDelayLunchScheduleTimes : oneHourDelayLunchScheduleTimes),
                
							(twoHourDelayLunchHighlightedTitleWords : twoHourDelayLunchHighlightedTitleWords),
							(twoHourDelayLunchTitleWords : twoHourDelayLunchTitleWords),
							(twoHourDelayLunchScheduleTimes : twoHourDelayLunchScheduleTimes),
							
							(earlyReleaseLunchHighlightedTitleWords : earlyReleaseLunchHighlightedTitleWords),
							(earlyReleaseLunchTitleWords : earlyReleaseLunchTitleWords),
							(earlyReleaseLunchScheduleTimes : earlyReleaseLunchScheduleTimes),
							
							(pepRallyLunchHighlightedTitleWords : pepRallyLunchHighlightedTitleWords),
							(pepRallyLunchTitleWords : pepRallyLunchTitleWords),
							(pepRallyLunchScheduleTimes : pepRallyLunchScheduleTimes),
							
							(assemblyLunchHighlightedTitleWords : assemblyLunchHighlightedTitleWords),
							(assemblyLunchTitleWords : assemblyLunchTitleWords),
							(assemblyLunchScheduleTimes : assemblyLunchScheduleTimes),
            ]
        };
        
  }    
    
  render() {
    return (    
			
      <div className="App">            
				<MuiThemeProvider theme={orangeBlueTheme}>

									<div className="App-header">HHS Easy Cal</div>

									<CountdownTimer blockSchedules = {this.state.blockSchedules} lunchSchedules = {this.state.lunchSchedules}></CountdownTimer>

									<SchedulePicker blockSchedules = {this.state.blockSchedules} lunchSchedules = {this.state.lunchSchedules}></SchedulePicker>

									<PdfView></PdfView> 

									<div className = "twitterPage">
											<Timeline
													dataSource={{
														sourceType: 'profile',
														screenName: 'HarrisonburgHS'
													}}
													options={{
														username: 'HarrisonburgHS',
														height: '600',
														width: '1200',
														theme:"dark"
													}}
											/>
									</div>

									<Footer></Footer>    
				</MuiThemeProvider>                       
      </div>
    );
  }
}

export default App;

