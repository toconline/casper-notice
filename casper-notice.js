import '@cloudware-casper/casper-icons/casper-icon.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CasperNotice extends PolymerElement {

  static get properties () {
    return {
      /**
       * The casper-notice's message.
       *
       * @type {String}
       */
      message: String,
      /**
       * If this property is set to true, no background color should be applied.
       *
       * @type {String}
       */
      outlined: {
        type: Boolean,
        reflectToAttribute: true
      },
      /**
       * The casper-notice's title.
       *
       * @type {String}
       */
      title: String,
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
        .main-container {
          display: flex;
          border-width: 2px;
          border-style: solid;
          border-radius: 5px;
          /* Info color palette */
          --info-color: rgb(12, 84, 96);
          --info-border-color: rgb(190, 229, 235);
          --info-background-color: rgb(209, 236, 241);
          /* Warning color palette */
          --warning-color: rgb(133, 100, 4);
          --warning-border-color: rgb(255, 238, 186);
          --warning-background-color: rgb(255, 243, 205);
          /* Exclamation color palette */
          --exclamation-color: rgb(114, 28, 36);
          --exclamation-border-color: rgb(245, 198, 203);
          --exclamation-background-color: rgb(248, 215, 218);
          /* Success color palette */
          --success-color: rgb(21, 87, 36);
          --success-border-color: rgb(195, 230, 203);
          --success-background-color: rgb(212, 237, 218);
        }

        :host([outlined]) .main-container {
          background-color: transparent !important;
        }

        :host([type="info"]) .main-container {
          color: var(--info-color);
          border-color: var(--info-border-color);
          background-color: var(--info-background-color);
        }

        :host([type="warning"]) .main-container {
          color: var(--warning-color);
          border-color: var(--warning-border-color);
          background-color: var(--warning-background-color);
        }

        :host([type="success"]) .main-container {
          color: var(--success-color);
          border-color: var(--success-border-color);
          background-color: var(--success-background-color);
        }

        :host([type="exclamation"]) .main-container {
          color: var(--exclamation-color);
          border-color: var(--exclamation-border-color);
          background-color: var(--exclamation-background-color);
        }

        :host([type="info"]) .main-container .icon-container { border-right-color: var(--info-border-color); }
        :host([type="warning"]) .main-container .icon-container { border-right-color: var(--warning-border-color); }
        :host([type="success"]) .main-container .icon-container { border-right-color: var(--success-border-color); }
        :host([type="exclamation"]) .main-container .icon-container { border-right-color: var(--exclamation-border-color); }

        .main-container .icon-container {
          display: flex;
          padding: 8px;
          align-items: center;
          border-right-width: 2px;
          border-right-style: solid;
        }

        .main-container .icon-container casper-icon {
          width: 30px;
          height: 30px;
        }

        .main-container .content-container {
          display: flex;
          padding: 8px;
          flex-direction: column;
        }

        .main-container .content-container .title {
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .main-container .content-container .content {
          font-size: 13px;
          text-align: justify;
        }
      </style>

      <div class="main-container">
        <div class="icon-container">
          <casper-icon icon="[[__getIcon(type)]]"></casper-icon>
        </div>
        <div class="content-container">
          <!--Title-->
          <template is="dom-if" if="[[title]]">
            <span class="title">[[title]]</span>
          </template>
          <!--Content-->
          <div class="content">
            <slot>[[message]]</slot>
          </div>
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