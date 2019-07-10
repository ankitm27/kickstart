"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _Layout = require("./../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("./../../ethereum/campaign.js");

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require("semantic-ui-react");

var _assert = require("assert");

var _web = require("./../../ethereum/web3.js");

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require("./../../components/ContributeForm.js");

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ankitmalhotra/react-public/kickstart/pages/campaigns/show.js?entry";


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: "renderCard",
        value: function renderCard() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                mimimumContribution = _props.mimimumContribution,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: "address of manager",
                description: "check1111",
                style: { overflowWrap: 'break-word' }
            }, {
                header: mimimumContribution,
                meta: "contribution in (wei)",
                description: "minimun contribution"
            }, {
                header: requestsCount,
                meta: "requests",
                description: "request of project"
            }, {
                header: approversCount,
                meta: "approvers",
                description: "approvers"
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'balance(ether)',
                description: "balance"
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, "check1212", this.renderCard(), _react2.default.createElement(_ContributeForm2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;

                                console.log("summary", summary);
                                return _context.abrupt("return", {
                                    mimimumContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 6:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsInRocm93cyIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW1pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmQiLCJjYW1wYWlnbiIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBRWhCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNOztBQUNmLEFBQVM7O0FBQ1QsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7Ozs7OztJLEFBR3JCOzs7Ozs7Ozs7OztxQ0FjVTt5QkFPSixLQVBJLEFBT0M7Z0JBUEQsQUFFSixpQkFGSSxBQUVKO2dCQUZJLEFBR0osaUJBSEksQUFHSjtnQkFISSxBQUlKLDZCQUpJLEFBSUo7Z0JBSkksQUFLSix1QkFMSSxBQUtKO2dCQUxJLEFBTUosd0JBTkksQUFNSixBQUVKOztnQkFBTTt3QkFDRixBQUNXLEFBQ1A7c0JBRkosQUFFUyxBQUNMOzZCQUhKLEFBR2dCLEFBQ1o7dUJBQU0sRUFBQyxjQUxELEFBQ1YsQUFJVSxBQUFjO0FBSnhCLEFBQ0ksYUFGTTt3QkFNUixBQUNTLEFBQ1A7c0JBRkYsQUFFTyxBQUNMOzZCQVRNLEFBTVIsQUFHYztBQUhkLEFBQ0U7d0JBR0YsQUFDUyxBQUNQO3NCQUZGLEFBRU8sQUFDTDs2QkFiTSxBQVVSLEFBR2M7QUFIZCxBQUNFO3dCQUdGLEFBQ1MsQUFDUDtzQkFGRixBQUVPLEFBQ0w7NkJBakJNLEFBY1IsQUFHYztBQUhkLEFBQ0U7d0JBSU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDVCLEFBQ1MsQUFBMkIsQUFDbEM7c0JBRkYsQUFFTyxBQUNMOzZCQXJCUixBQUFjLEFBa0JSLEFBR2MsQUFJcEI7QUFQTSxBQUNFO2lEQU1ELEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFFVjtBQUZVO2FBQUE7Ozs7aUNBR0gsQUFDSjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQTtBQUFBO0FBQUEsYUFBQSxFQUVLLGtCQUZMLEFBRUssQUFBSyxBQUNOLDhCQUFBLEFBQUM7OzhCQUFEO2dDQUpSLEFBQ0ksQUFHSSxBQUdYO0FBSFc7QUFBQTs7Ozs7aUgsQUF0RGlCOzs7OztpQ0FDbkI7QSwyQ0FBVyx3QkFBUyxNQUFBLEFBQU0sTUFBZixBQUFxQixBOzt1Q0FDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7aUNBQTlDO0EsbURBQ047O3dDQUFBLEFBQVEsSUFBUixBQUFZLFdBQVosQUFBc0I7O3lEQUVFLFFBRGpCLEFBQ2lCLEFBQVEsQUFDNUI7NkNBQVEsUUFGTCxBQUVLLEFBQVEsQUFDaEI7bURBQWMsUUFIWCxBQUdXLEFBQVEsQUFDdEI7b0RBQWUsUUFKWixBQUlZLEFBQVEsQUFDdkI7NkNBQVEsUUFMTCxBQUtLLEFBQVEsQTtBQUxiLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOZSxBLEFBNkQzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmtpdG1hbGhvdHJhL3JlYWN0LXB1YmxpYy9raWNrc3RhcnQifQ==