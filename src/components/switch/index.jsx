import React from 'react'

import './style.css';

export const Switch = () => {

  return (
    <label class="checkbox-ya">
	    <input type="checkbox"/>
	    <span class="checkbox-ya-switch">
		    <span class="checkbox-ya-feature" data-label-on="C°" data-label-off="F°"></span>
	    </span>
    </label>
  )
}