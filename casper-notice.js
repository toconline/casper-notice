/*
  - Copyright (c) 2017 Cloudware S.A. All rights reserved.
  -
  - This file is part of casper-notice.
  -
  - casper-notice is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as published by
  - the Free Software Foundation, either version 3 of the License, or
  - (at your option) any later version.
  -
  - casper-notice  is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with casper-notice.  If not, see <http://www.gnu.org/licenses/>.
  -
 */

import '@polymer/iron-icon/iron-icon.js';
import '@casper2020/casper-icons/casper-icons.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CasperNotice extends PolymerElement {
  static get template() {
    return html`
      <style>

        :host {
          white-space: normal;
        }

        .info {
          background-color: #d9edf7;
          border-color: #bce8f1;
          color: #3a87ad;
        }

        .warning {
          background-color: #fcf8e3;
          border-color: #fbeed5;
          color: #c09853;
        }

        .exclamation {
          background-color: #f2dede;
          border-color: rgb(238, 211, 215);
          color: #ff5757;
        }

        .notice {
          border: 1px solid;
          border-radius: 4px;
          font-size: 14px;
          display: flex;
          flex-direction: row;
          padding: 6px;
        }

        .title {
          font-weight: 700;
          text-align: left;
        }

        .message {
          margin-top: 6px;
          text-align: left;
        }

        p {
          margin: 0px;
        }

        .column {
          display: flex;
          flex-direction: column;
        }

        iron-icon {
          min-width: 32px;
          min-height: 32px;
          margin-right: 6px;
        }

      </style>

      <div class$="notice [[type]]">
        <iron-icon icon$="casper-icons:[[type]]"></iron-icon>
        <div class="column">
          <p class="title">[[title]]</p>
          <div class="message">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  static get is () {
    return 'casper-notice';
  }

  static get properties () {
    return {
      title: String,
      type: {
        type: String,
        value: 'info'
      }
    };
  }
}

window.customElements.define(CasperNotice.is, CasperNotice);
