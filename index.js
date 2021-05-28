Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var PrivacyCenter = /** @class */ (function (_super) {
    __extends(PrivacyCenter, _super);
    function PrivacyCenter(props) {
        return _super.call(this, props) || this;
    }
    PrivacyCenter.prototype.componentDidMount = function () {
        if (window.pcconfig === undefined) {
            var script = document.createElement("script");
            script.src = "https://cdn.port.im/privacycenter/main.js";
            script.async = true;
            document.body.appendChild(script);
            var pcconfig = [];
            pcconfig.push({ key: this.props.id });
            pcconfig.push({ auto: false });
            window.pcconfig = pcconfig;
        }
    };
    PrivacyCenter.prototype.open = function (e) {
        if (window.openPrivacyCenter !== undefined) {
            e.preventDefault();
            window.openPrivacyCenter();
        }
    };
    PrivacyCenter.prototype.render = function () {
        return React__namespace.createElement("a", { href: this.props.fallback, target: "_blank", onClick: this.open }, this.props.children);
    };
    return PrivacyCenter;
}(React__namespace.Component));

exports.PrivacyCenter = PrivacyCenter;
//# sourceMappingURL=index.js.map
