import React, { Component } from 'react';
import './App.css';
import {ReactiveBase,DateRange, NumberBox,RangeSlider,ResultCard} from '@appbaseio/reactivesearch'
import ReactForm from './ReactForm'

class App extends Component {
  render() {
    return (
      <section className="container">

        <ReactiveBase
          app="housing"
          credentials="0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5"
          type="listing"
          theme={{
            primaryColor:'#FF3A4E'
          }}
        >

        <div className="nav">
          <div className="title">airbeds</div>
        </div>
        
        <div className="left-col">
          <DateRange
          dataField="date_from"
          componentId="DateRangeSensor"
          title="when"
          numberOfMonths={1}
          queryFormat="basic_date"
          initialMonth={new Date('04-01-2018')}
          />

          <NumberBox
          componentId="GuestsSensor"
          title="Guests"
          dataField="accomodates"
          defaultSelected={1}
          data={{
            start: 1,
            end: 16
          }}
          />

          <RangeSlider
          componentId="PriceSensor"
          dataField="price"
          title="Price Range"
          range={{
            start: 10,
            end: 250
          }}
          rangeLabels={{
            start: "$10",
            end: "$250"
          }}
          defaultSelected={{
            start: 10,
            end: 50
          }}
          stepValue={10}
          react={{
            and:["DateRangeSensor"]
          }}
          />

        </div>

          <ResultCard
          className="right-col"
          componentId="SearchResult"
          dataField="name"
          from={0}
          size={12}
          onData={this.onData}
          pagination={true}
          react={{
                and: ["GuestSensor", "PriceSensor", "DateRangeSensor"]
          }}
          innerClass= {{
            resultStats:'result-stats',
            list: 'list',
            listItem: 'listItem',
            image: 'image'
          }}

          />
          <ReactForm/>

        </ReactiveBase>
      </section>
    );
  }

  onData(data){
      return{
          image:data.image,
          title: data.title,
          description:(
            <div>
            <div className="price">${data.price}</div>
            <p className="info">{data.room_type}.{data.accomodates} guests</p>
          </div>
        ),
      url:data.listing_url
    }
  }
}

export default App;
