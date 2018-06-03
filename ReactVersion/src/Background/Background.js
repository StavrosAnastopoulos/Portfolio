import React, {Component} from 'react';
import RectDivision from './RectDivision';
import PointAssembly from './PointAssembly';

export default class Background extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			width: this.props.width,
			height: this.props.height,
			makeForeground: this.props.makeForeground,
			point: [0,0],
			recordCursor: false,
			game: this.props.game,
			update: () => this.updateDims()
		}
	}

	componentDidMount = () => {
  		this.state.update();
	}
	
	componentWillReceiveProps = (nextProps) => {
	    if((this.props.width !== nextProps.width) || (this.props.height !== nextProps.height))
	    {
	        this.state.update();
	    }
	    if(this.props.game !== nextProps.game){
	    	this.setState({
	    		game: nextProps.game
	    	})
	    }
	} 

	updateDims = () => {
		this.setState({
			width: this.props.width,
			height: this.props.height
		})
	}

	style = () => {
		return{
			position: "fixed",
			top: "0",
			left: "0",
			right: "0",
			bottom: "0",
			zIndex: this.state.makeForeground ? 1 : -1
		}
	}

	onClick = (event) => {
		let newPoint = [event.clientX, event.clientY];
		this.setState({point: newPoint});
	}

	onMouseDown = (event) => {
		this.setState({recordCursor: true});
	}
	onMouseUp = () => {
		this.setState({recordCursor: false});
	}

	onMouseMove = (event) =>{
		if(this.state.recordCursor){
			this.onClick(event);
		}
	}

	selectGame = () => {
		switch(this.state.game){
			case 'points':
				return (
					<PointAssembly
						clickPoint = {this.state.point}
						cursorState = {this.state.recordCursor}
						width = {this.state.width} 
						height = {this.state.height}
					/>
				)
			case 'rects': default:
				return(
					<RectDivision
						clickPoint = {this.state.point}
						cursorState = {this.state.recordCursor}
						width = {this.state.width} 
						height = {this.state.height}
					/>
				)
		}
	}

	render = () => {
		return(
			<div
				style = {this.style()} 
				onMouseDown = {this.onMouseDown}
				onMouseMove = {this.onMouseMove}
				onMouseUp = {this.onMouseUp}
				onClick = {this.onClick}
			>
				{this.selectGame()}
			</div>
		);
	}

}