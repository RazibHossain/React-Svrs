import React from 'react';
import Header from '../../component-layout/Header'
import style from './psu.module.css'
function PsuAdd() {
  return (
    <div className={style.mainDiv}>
      <Header value="PSU Add" />
      <div className={style.pageContent}>
      
      <form>
           <div className={style.inputblock}>
            <label className={style.label}>
              PSU No <span className={style.requiredLabel}>*</span>
            </label>
            <input
              className={style.input }
              type="text"
              name="psuNo"
            />
          </div>
          <div className={style.inputblock}>
            <label className={style.label}>
              Zila <span className={style.requiredLabel}>*</span>
            </label>
            <input
              className={style.input }
              type="text"
              name="zila"
            />
          </div>
          {/*
          <div className="input-block">
            <label className="label">
              Password <span className="requiredLabel">*</span>
            </label>
            <input
              className={`input ${
                form.password.length < 6 ? 'wrong-input' : 'correct-input'
              }`}
              type="password"
              name="password"
            />
          </div>
          <div
            className={`submit-button-wrapper`}
          >
            <button
            >
              Submit
            </button>
          </div> */}
        </form>

      </div>
    </div>

  );
}
export default PsuAdd;