"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("./../ethereum/web3.js");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ankitmalhotra/react-public/kickstart/components/RequestRaw.js";


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        (0, _classCallCheck3.default)(this, RequestRow);

        return (0, _possibleConstructorReturn3.default)(this, (RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestRow, [{
        key: "render",
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            return _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, request.approvalCount, " / ", approversCount));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJhdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwid2ViMyIsIlJlcXVlc3RSb3ciLCJSb3ciLCJDZWxsIiwicHJvcHMiLCJpZCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUVoQixBQUFTOztBQUNULEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7aUNBQ007Z0JBQUEsQUFDSSxNQURKLEFBQ2tCLHVCQURsQixBQUNJO2dCQURKLEFBQ1MsT0FEVCxBQUNrQix1QkFEbEIsQUFDUzt5QkFDeUIsS0FGbEMsQUFFdUM7Z0JBRnZDLEFBRUksWUFGSixBQUVJO2dCQUZKLEFBRU8saUJBRlAsQUFFTztnQkFGUCxBQUVlLHdCQUZmLEFBRWUsQUFDbkI7O21DQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsZUFESixBQUNJLEFBR0EscUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsdUJBSkosQUFJSSxBQUNhLEFBRWIsOEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsNkJBQ0ssQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQVJwQyxBQU9JLEFBQ0ssQUFBaUMsQUFFdEMsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsdUJBVkosQUFVSSxBQUNhLEFBRWIsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsdUJBQUEsQUFDYSxlQUFrQixPQWZ2QyxBQUNJLEFBYUksQUFLWDs7Ozs7QUF2Qm9CLEEsQUEwQnpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSYXcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Fua2l0bWFsaG90cmEvcmVhY3QtcHVibGljL2tpY2tzdGFydCJ9