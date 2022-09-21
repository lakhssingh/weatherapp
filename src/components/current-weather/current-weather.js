import './current-weather.css';

export default function CurrentWeather({ data }) {
	return (
		<div className='weather'>
			<div className='top'>
				<p className='city'>{data.city}</p>
				<p className='weather-description'>{data.weather[0].description}</p>
			</div>
			<img
				src={`icons/${data.weather[0].icon}.png`}
				className='weather-icon'
				alt='weather'
			/>
			<div className='bottom'>
				<p className='temperature'>{Math.round(data.main.temp)} °F</p>
				<div className='details'>
					<div className='parameter-row'>
						<span className='parameter-label'>Details</span>
					</div>
					<div className='parameter-row'>
						<span className='parameter-label'>Feels like</span>
						<span className='parameter-value'>
							{Math.round(data.main.feels_like)} °F
						</span>
					</div>
					<div className='parameter-row'>
						<span className='parameter-label'>Wind</span>
						<span className='parameter-value'>{data.wind.speed} m/s</span>
					</div>
					<div className='parameter-row'>
						<span className='parameter-label'>Humdity</span>
						<span className='parameter-value'>{data.main.humidity} %</span>
					</div>
					<div className='parameter-row'>
						<span className='parameter-label'>Presuree</span>
						<span className='parameter-value'>{data.main.pressure}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
