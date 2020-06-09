import React, { Component } from 'react';
import RocketCore from './RocketCore';

export function FunctionalRocket({date}) {
  console.log('date: ', date);

  return <RocketCore initialLaunchTime={date} />;
}

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
