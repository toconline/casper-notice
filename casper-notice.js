import '@cloudware-casper/casper-icons/casper-icon.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CasperNotice extends PolymerElement {

  static get properties () {
    return {
      /**
       * The casper-notice's title.
       *
       * @type {String}
       */
      title: String,
      /**
       * The casper-notice's message.
       *
       * @type {String}
       */
      message: String,
      /**
       * The casper-notice's type which will change the component's icon and color palette.
       *
       * @type {String}
       */
      type: {
        type: String,
        value: 'info',
        observer: '__typeChanged',
        reflectToAttribute: true
      }
    };
  }

  static get template () {
    return html`
      <style>
        :host {
          display: flex;
          border-width: 2px;
          border-style: solid;
          border-radius: 5px;
          /* Info color palette */
          --info-color: #3a87ad;
          --info-border-color: #bce8f1;
          --info-background-color: #d9edf7;
          /* Warning color palette */
          --warning-color: #c09853;
          --warning-border-color: #fbeed5;
          --warning-background-color: #fcf8e3;
          /* Exclamation color paletter */
          --exclamation-color: #ff5757;
          --exclamation-border-color: rgb(238, 211, 215);
          --exclamation-background-color: #f2dede;
        }

        :host([type="info"]) {
          color: var(--info-color);
          border-color: var(--info-border-color);
          background-color: var(--info-background-color);
        }

        :host([type="warning"]) {
          color: var(--warning-color);
          border-color: var(--warning-border-color);
          background-color: var(--warning-background-color);
        }

        :host([type="exclamation"]) {
          color: var(--exclamation-color);
          border-color: var(--exclamation-border-color);
          background-color: var(--exclamation-background-color);
        }

        :host([type="info"]) .icon-container { border-right-color: var(--info-border-color); }
        :host([type="warning"]) .icon-container { border-right-color: var(--warning-border-color); }
        :host([type="exclamation"]) .icon-container { border-right-color: var(--exclamation-border-color); }

        .icon-container {
          display: flex;
          padding: 10px;
          align-items: center;
          border-right-width: 2px;
          border-right-style: solid;
        }

        .icon-container casper-icon {
          width: 30px;
          height: 30px;
        }

        .content-container {
          display: flex;
          padding: 20px;
          padding-left: 10px;
          flex-direction: column;
        }

        .content-container .title {
          font-size: 15px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .content-container .content {
          font-size: 13px;
          text-align: justify;
        }
      </style>

      <div class="icon-container">
        <casper-icon icon="[[__getIcon(type)]]"></casper-icon>
      </div>
      <div class="content-container">
        <span class="title">[[title]]</span>
        <div class="content">
          <slot>[[message]]</slot>
        </div>
      </div>
    `;
  }

  /**
   * This method will return the icon that should be used depending on the component's current type.
   */
  __getIcon () {
    switch (this.type) {
      case 'info': return 'fa-light:info-circle';
      case 'success': return 'fa-light:check-circle';
      case 'warning': return 'fa-light:exclamation-triangle';
      case 'exclamation': return 'fa-light:exclamation-circle';
    }
  }
}

window.customElements.define('casper-notice', CasperNotice);