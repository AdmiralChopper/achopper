import React, { Component } from 'react';
import './styles.css'
import parseMasS from '../../utils/parseMinutesAsSeconds';

class ShowVideo extends Component {
    constructor(props) {
    super(props);
    this.state = {
        autoSkip: props.autoSkip,
        ytUrl: props.ytUrl,
        timestamp: props.timestamp
    }
}
    checkAutoSkip(autoSkip) {
        if (typeof this.state.ytUrl==="string" && this.state.ytUrl.match("\\?autoplay\\=1\\&start\\=")) {
            return ''
        }
        if (autoSkip) {
            return `?autoplay=1&start=${parseMasS(this.state.timestamp)}&enablejsapi=1&playerapiid=ytplayer`
        } else {
            return '?autoplay=1&start=0&enablejsapi=1&playerapiid=ytplayer'
        }
    }

    shouldComponentUpdate(nextProps) {
        if (this.state.ytUrl !== nextProps.ytUrl) {
            this.setState({ytUrl: nextProps.ytUrl })
            return true;
        } else if (this.state.autoSkip !== nextProps.autoSkip) {
            this.setState({autoSkip: nextProps.autoSkip});
        } else if (this.state.timestamp !== nextProps.timestamp) {
            this.setState({timestamp: nextProps.timestamp});
        }
        return false;
    }

    render() {
    if (this.state.ytUrl !== undefined) {   
        return (
            <>
            <iframe title="ytplayer" id="ytplayer" src={`https://www.youtube.com/embed/${this.state.ytUrl}${this.checkAutoSkip(this.state.autoSkip)}`} frameBorder="0" allowFullScreen></iframe>
            </>
        )
        }
        else {
            return (
                <>
                <p>LOADING</p>
                </>
            )
        }
}
}


export default ShowVideo;