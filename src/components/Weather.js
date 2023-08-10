import React from "react";

class Weather extends React.Component {
  render() {
    // Конвертируем температуру из Кельвинов в Цельсия
    const tempCelsius = this.props.temp - 273.15;

    return (
      <div>
        {this.props.city && this.props.country && (
          <p>
            Местоположение: {this.props.city}, {this.props.country}
          </p>
        )}
        {this.props.temp && <p>Температура: {tempCelsius.toFixed(1)}°C</p>}
        {this.props.sunset && <p>Закат солнца: {this.props.sunset}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
