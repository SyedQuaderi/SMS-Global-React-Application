import { NavLink } from 'react-router-dom';
import React from 'react';

const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink to='/'>API Key Details</NavLink></li>
        <li><NavLink to='/SmsPage'>Send SMS</NavLink></li>
        <li><NavLink to='/SmsReport'>SMS Report</NavLink></li>
      </ul>
    </nav>
  );

  export default Navigation;