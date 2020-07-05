import React from 'react';
import { withRouter } from 'react-router-dom';
import {Data} from '../Data';

class NewFlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from : '',
      to : '',
      departure : '',
      landing : '',
      price : ''
    }
  }

  onChange = (event) => {
    console.log(event.target);
    this.setState({[event.target.id] : event.target.value})
  }

  onSubmit = () => {
    console.log({Data});
    // {Data}.Data.push(this.state); 
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Add New Flight</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="from">From</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="from"
                  id="from"
                  onChange={this.onChange}
                />
              </div>
             <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="to">To</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="to"
                  id="to"
                  onChange={this.onChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="departure">Departure</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="departure"
                  id="departure"
                  onChange={this.onChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="landing">Landing</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="landing"
                  id="landing"
                  onChange={this.onChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="price">Price</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="price"
                  id="price"
                  onChange={this.onChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Add Flight"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default NewFlight;