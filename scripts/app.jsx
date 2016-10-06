// Notes to Frequencies
const Notes = {
  'C2': 65.41,
  'C#2': 69.30,
  'D2': 73.42,
  'D#2': 77.78,
  'E2': 82.41,
  'F2': 87.31,
  'F#2': 92.50,
  'G2': 98.00,
  'G#2': 103.83,
  'A2': 110.00,
  'A#2': 116.54,
  'B2': 123.47,
  'C3': 130.81,
  'C#3': 138.59,
  'D3': 146.83,
  'D#3': 155.56,
  'E3': 164.81,
  'F3': 174.61,
  'F#3': 185.00,
  'G3': 196.00,
  'G#3': 207.65,
  'A3': 220.00,
  'A#3': 233.08,
  'B3': 246.94,
  'C4': 261.63,
  'C#4': 277.18,
  'D4': 293.66,
  'D#4': 311.13,
  'E4': 329.63,
  'F4': 349.23,
  'F#4': 369.99,
  'G4': 392.00,
  'G#4': 415.30,
  'A4': 440.00,
  'A#4': 466.16,
  'B4': 493.88,
  'C5': 523.25,
  'C#5': 554.37,
  'D5': 587.33,
  'D#5': 622.25,
  'E5': 659.25,
  'F5': 698.46,
  'F#5': 739.99,
  'G5': 783.99,
  'G#5': 830.61,
  'A5': 880.00,
  'A#5': 932.33,
  'B5': 987.77,
  'C6': 1046.50,
  'C#6': 1108.73,
  'D6': 1174.66,
  'D#6': 1244.51,
  'E6': 1318.51,
  'F6': 1396.91,
  'F#6': 1479.98,
  'G6': 1567.98,
  'G#6': 1661.22,
  'A6': 1760.00,
  'A#6': 1864.66,
  'B6': 1975.53,
  'C7': 2093.00,
  'C#7': 2217.46,
  'D7': 2349.32,
  'D#7': 2489.02,
  'E7': 2637.02,
  'F7': 2793.83,
  'F#7': 2959.96,
  'G7': 3135.96,
  'G#7': 3322.44,
  'A7': 3520.00,
  'A#7': 3729.31,
  'B7': 3951.07,
  'C8': 4186.01,
  'C#8': 4434.92,
  'D8': 4698.63,
  'D#8': 4978.03,
  'E8': 5274.04,
  'F8': 5587.65,
  'F#8': 5919.91,
  'G8': 6271.93,
  'G#8': 6644.88,
  'A8': 7040.00,
  'A#8': 7458.62,
  'B8': 7902.13
};

// Countries to Notes based on
// `tail -n 30000 results.csv | cut -d$'\t' -f 6 | sort |  uniq -c | sort`
const CountryNotes = {
  "AN": Notes['C6'],
  "BB": Notes['C6'],
  "BO": Notes['C6'],
  "CM": Notes['C6'],
  "CW": Notes['C6'],
  "GN": Notes['C6'],
  "GP": Notes['C6'],
  "GU": Notes['C6'],
  "HT": Notes['C6'],
  "JM": Notes['C6'],
  "KE": Notes['C6'],
  "LA": Notes['C6'],
  "MD": Notes['C6'],
  "NA": Notes['C6'],
  "NF": Notes['C6'],
  "NO": Notes['C6'],
  "TL": Notes['C6'],
  "TM": Notes['C6'],
  "UG": Notes['C6'],
  "BN": Notes['C6'],
  "EG": Notes['C6'],
  "GE": Notes['E5'],
  "IL": Notes['E5'],
  "LT": Notes['E5'],
  "PK": Notes['E5'],
  "SK": Notes['E5'],
  "UZ": Notes['E5'],
  "AW": Notes['E5'],
  "BD": Notes['E5'],
  "JO": Notes['E5'],
  "KH": Notes['E5'],
  "LB": Notes['E5'],
  "MO": Notes['E5'],
  "NP": Notes['E5'],
  "TC": Notes['E5'],
  "AT": Notes['E5'],
  "AZ": Notes['E5'],
  "DK": Notes['E5'],
  "FJ": Notes['B6'],
  "FR": Notes['B5'],
  "KG": Notes['B5'],
  "OM": Notes['B5'],
  "PT": Notes['B5'],
  "RS": Notes['B5'],
  "ZA": Notes['B5'],
  "SE": Notes['B5'],
  "MQ": Notes['B5'],
  "CZ": Notes['B5'],
  "IE": Notes['D5'],
  "IS": Notes['D5'],
  "MN": Notes['D5'],
  "TT": Notes['D5'],
  "AG": Notes['D5'],
  "BG": Notes['D5'],
  "HN": Notes['D5'],
  "PL": Notes['D5'],
  "BY": Notes['D5'],
  "CH": Notes['D5'],
  "GT": Notes['D5'],
  "MM": Notes['D5'],
  "QA": Notes['E5'],
  "EE": Notes['E5'],
  "UY": Notes['E5'],
  "MV": Notes['E5'],
  "NL": Notes['E5'],
  "EC": Notes['E5'],
  "ES": Notes['E5'],
  "HU": Notes['E5'],
  "MK": Notes['G5'],
  "PR": Notes['G5'],
  "RO": Notes['G5'],
  "SV": Notes['G5'],
  "GB": Notes['G5'],
  "IT": Notes['G5'],
  "VN": Notes['B5'],
  "FI": Notes['B5'],
  "NI": Notes['B5'],
  "GR": Notes['B5'],
  "PA": Notes['B5'],
  "CY": Notes['B5'],
  "KW": Notes['B5'],
  "KZ": Notes['A5'],
  "NZ": Notes['A5'],
  "UA": Notes['A5'],
  "SA": Notes['D4'],
  "LV": Notes['D4'],
  "IR": Notes['D4'],
  "DE": Notes['D5'],
  "DO": Notes['D5'],
  "AE": Notes['D5'],
  "AR": Notes['G5'],
  "VE": Notes['G5'],
  "TW": Notes['G5'],
  "LK": Notes['G5'],
  "HK": Notes['B5'],
  "CL": Notes['B5'],
  "CO": Notes['D5'],
  "CN": Notes['A5'],
  "IN": Notes['D5'],
  "PE": Notes['A5'],
  "CA": Notes['E5'],
  "SG": Notes['E5'],
  "KR": Notes['D5'],
  "BE": Notes['C5'],
  "AU": Notes['D5'],
  "CR": Notes['D5'],
  "RU": Notes['D5'],
  "ID": Notes['C3'],
  "PH": Notes['B3'],
  "PY": Notes['C3'],
  "TH": Notes['A2'],
  "MY": Notes['C3'],
  "JP": Notes['A2'],
  "MX": Notes['D4'],
  "BR": Notes['B3'],
  "US": Notes['C3'],
  "TR": Notes['G3']
};

class FoursquareMusic {

  constructor(props) {
    this.state = {
      notesOn: {}
    };
  }

  start() {
    console.log("start");

    // new env
    this.state.environment = flock.init();

    // set up the synth
    this.state.polySynth = flock.synth.polyphonic({
      synthDef: {
        id: "carrier",
        ugen: "flock.ugen.sin",
        freq: Notes['C4'],
        mul: {
          id: "env",
          ugen: "flock.ugen.asr",
          attack: 0.4,
          sustain: 0.6,
          release: 0.8
        }
      }
    });

    // start
    this.state.environment.start();
  }

  playCountryNote(country) {
    var countryNote = CountryNotes[country];
    console.log("Country Note: ", country, countryNote);
    if (country && countryNote) {
      this.state.polySynth['noteOn'](countryNote.toString, { 'carrier.freq': countryNote });

      var now = new Date();
      var nowMillis = now.getTime();
      this.state.notesOn[countryNote] = nowMillis;

      var noteLength = Math.floor((Math.random() * 4000) + 500);
      setTimeout((function() { this.turnOffCountryNote(countryNote, nowMillis) }).bind(this), noteLength)
    }
  }

  turnOffCountryNote(countryNote, timestamp) {
    if (this.state.notesOn[countryNote] && this.state.notesOn[countryNote] === timestamp) {
      this.state.notesOn[countryNote] = null;
      this.state.polySynth['noteOff'](countryNote.toString, null);
    }
  }

}

class FoursquareMapView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      renderedVisits: []
    };
  }

  render() {
    return(
      <div className="mapContainer">
        <div id="map"></div>
      </div>
    );
  }

  componentDidMount() {
    var mapEl = document.getElementById("map");

    this.map =
      new Datamap({
        element: mapEl,
        scope: 'world',
        projection: 'mercator',
        fills: {
          'DEFAULT_BUBBLE': '#0732a2',
          defaultFill: '#f94877'
        },
        geographyConfig: {
          popupOnHover: false,
          highlightOnHover: false
        },
        bubblesConfig: {
          borderWidth: 0,
          borderOpacity: 0,
          borderColor: '#FFFFFF',
          popupOnHover: false,
          radius: null,
          popupTemplate: null,
          fillOpacity: 0.75,
          animate: true,
          exitDelay: 1500,
          key: JSON.stringify
        },
        height: 600,
        width: 800
      });

    this.map.addPlugin('fadingBubbles', fadingBubbles);
  }

  shouldComponentUpdate(nextProps, nextState) {
    var renderedVisits = this.state.renderedVisits;
    if (nextProps.currentVisit) {
      var nextVisit = this.visitToBubble(nextProps.currentVisit);
      this.map.fadingBubbles([nextVisit]);
    }

    return false;
  }

  visitToBubble(visit) {
    var latlng = visit.latlng;
    var latlngTuple = visit.latlng.split('|');
    var lat = latlngTuple[0];
    var lng = latlngTuple[1];

    var magnitude = Math.floor((Math.random() * 5) + 1);

    var bubble = {
      magnitude: magnitude,
      radius: 25,
      fillKey: 'DEFAULT_BUBBLE',
      latitude: lat,
      longitude: lng
    };

    return bubble;
  }

}

class FoursquareMapApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVisit: null
    };
  }

  render() {
    var currentVisitString = null;
    var currentVisitCountry = null;
    var currentVisitHref = null;
    if (this.state.currentVisit) {
      currentVisitString = this.state.currentVisit.venueName + " (" + this.state.currentVisit.categoryName +")";
      currentVisitCountry = this.state.currentVisit.country;
      currentVisitHref = "https://foursquare.com/v/" + this.state.currentVisit.venueId;
    }

    if (currentVisitString && currentVisitHref) {
      return (
        <div className="mapApp">
          <h1>FOURSQUARE MUSIC</h1>
          <h5>
            <a href={currentVisitHref} target="_blank">{currentVisitString}</a>
            <span className="venueDivider">|</span>
            {currentVisitCountry}
          </h5>
          <FoursquareMapView currentVisit={this.state.currentVisit} />
        </div>
      );
    } else {
      return (
        <div className="mapApp">
          <h1>FOURSQUARE MUSIC</h1>
          <h5>&nbsp;</h5>
          <FoursquareMapView currentVisit={this.state.currentVisit} />
        </div>
      );
    }
  }

  componentDidMount() {
    var thiz = this;
    (function loop() {
      var rand = Math.round(Math.random() * (800 - 50)) + 50;
      setTimeout(function() {
        thiz.renderMapActions();
        loop();
      }, rand);
    }());
  }

  renderMapActions() {
    var nextVisit = this.props.model.next();
    this.setState({ currentVisit: nextVisit });

    if (nextVisit.country) {
      this.props.music.playCountryNote(nextVisit.country);
    }
  }
}

class StartButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var style = {
      backgroundColor: '#f94877',
      color: '#fff',
      border: 'none',
      width: 200,
      height: 64,
      fontSize: 24,
      marginTop: 24
    };

    var msg = "START";
    if (this.props.loadState === LoadState.STARTING) {
      msg = "LOADING...";

      style['backgroundColor'] = '#fb9db8';
      style['cursor'] = 'auto';
    }

    return (
      <button style={style} onClick={this.props.callback}>{msg}</button>
    );
  }
}

const LoadState = {
  NOT_STARTED: 0,
  STARTING: 1,
  STARTED: 2
}

class FoursquareMusicApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loadState: LoadState.NOT_STARTED
    };
  }

  onClick() {
    this.setState({ loadState: LoadState.STARTING });
    this.props.model.load(this.onDataLoad.bind(this));
  }

  onDataLoad(data) {
    this.setState({ loadState: LoadState.STARTED });
    this.props.music.start();
  }

  render() {
    if (this.state.loadState === LoadState.STARTED) {
      return (<FoursquareMapApp model={this.props.model} music={this.props.music} />);
    } else {
      return (
        <div className="home">
          <h1>FOURSQUARE MUSIC</h1>
          <StartButton callback={this.onClick.bind(this)} loadState={this.state.loadState} />
        </div>
      );
    }
  }
}

class FoursquareVisitsModel {

  constructor(props) {
    this.state = {
      data: undefined,
      currentIndex: 0
    };
  }

  load(loadFn) {
    $.getJSON(
      "results.short.json",
      (function(data) {
        this.state.data = data;
        loadFn(data);
      }).bind(this)
    );
  }

  next() {
    if (this.state.data && this.state.currentIndex < this.state.data.length) {
      return this.state.data[this.state.currentIndex++];
    }
    return null;
  }

}

var model = new FoursquareVisitsModel();
var music = new FoursquareMusic();

ReactDOM.render(
  <FoursquareMusicApp model={model} music={music} />,
  document.getElementById('app')
);
