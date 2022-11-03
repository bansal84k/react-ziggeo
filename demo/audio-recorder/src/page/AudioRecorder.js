import React, { Component } from "react";
import {  ZiggeoAudioRecorder } from "react-ziggeo";
import { Audio_Recorder_TOKEN } from "../constants";

export default class AudioRecorder extends Component {
  render() {
    return (
      <section className="AudioRecorderPage">
        <h1 className="page-header">AudioRecorder Page</h1>
        <p className="alert alert-warning">
          <strong>Note: </strong>
          It's demonstrative view, recording and uploading set to not allowed,
          you can register <a href="https://ziggeo.com">Ziggeo</a>. After
          getting key, use all awesome features
        </p>

          <ZiggeoAudioRecorder
          audio={Audio_Recorder_TOKEN}
          width={640}
          height={480}
          preventReRenderOnUpdate={true}
        />

        <div className="text-left">
          <h5 className="text-center"> ES6 Code Sample </h5>
          <h6>Open console to see events attached to this Component</h6>
          <pre>
            {"import React from 'react';"} <br />
            {"import {ZiggeoRecorder} from 'react-ziggeo';"}
            <br />
            {"import { API_KEY } from '../constants';"}
            <br />
            <br />
            ...
            <br />
            <br />
            {"reError = () => { console.log('Recorder error'); };"}
            <br />
            {
              "recorderRecording = () => { console.log('Recorder onRecorderUploading'); };"
            }
            <br />
            <br />
            ...
            <br />
            <br />
            {'<ZiggeoRecorder \n\t apiKey="Ziggeo provided key" \n\t ziggeo-video="your video token"' +
              "\n\t allowupload={false} \n\t allowrecord={false}" +
              "\n\t onRecorderError={this.recorderError} \n\t onRecorderRecording={this.recorderRecording}" +
              "\n/>"}
            <br />
            ...
          </pre>
        </div>
      </section>
    );
  }
}
