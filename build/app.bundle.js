/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ErrorCode = exports.ErrorCode = {
    // Server related 1 ~ 9999

    // Account 10000 ~ 19999
    ACCOUNT__ACCOUNT_ALREADY_EXISITS: 10001,
    ACCOUNT__ACCOUNT_NOT_EXISITS: 10002,
    ACCOUNT__ACCOUNT_PASSWORD_NOT_MATCH: 10003
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Joy on 4/9/17.
 */

var Profile = function (_React$Component) {
    _inherits(Profile, _React$Component);

    function Profile() {
        _classCallCheck(this, Profile);

        var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));

        _this.state = {
            logOutStatus: false
        };

        _this.logOutHandler = _this.logOutHandler.bind(_this);
        return _this;
    }

    _createClass(Profile, [{
        key: 'logOutHandler',
        value: function logOutHandler() {
            $.ajax({
                url: "http://omniscient.us-west-1.elasticbeanstalk.com/profile/logout",
                dataType: 'json',
                type: 'POST',
                cache: false,
                success: function (data) {
                    if (data.success) {
                        this.props.afterLogOut();
                    }
                }.bind(this)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var logOutMessage = null;
            if (this.state.logOutStatus) {
                logOutMessage = "You've logged out successfully!";
            } else {
                logOutMessage = React.createElement(
                    'a',
                    { href: '#', onClick: this.logOutHandler },
                    'log out'
                );
            }
            return React.createElement(
                'div',
                { className: 'profile col-sm-2' },
                React.createElement(
                    'h2',
                    { id: 'userName' },
                    this.props.userName
                ),
                React.createElement(
                    'div',
                    { id: 'logOutMessage' },
                    logOutMessage
                )
            );
        }
    }]);

    return Profile;
}(React.Component);

exports.default = Profile;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignIn = function (_React$Component) {
    _inherits(SignIn, _React$Component);

    function SignIn() {
        _classCallCheck(this, SignIn);

        var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this));

        _this.state = {
            errorCode: 0,
            userName: null,
            password: null
        };

        _this.signInHandler = _this.signInHandler.bind(_this);
        _this.userNameHandler = _this.userNameHandler.bind(_this);
        _this.passwordHandler = _this.passwordHandler.bind(_this);
        return _this;
    }

    _createClass(SignIn, [{
        key: 'signInHandler',
        value: function signInHandler(e) {
            e.preventDefault();
            $.ajax({
                url: "http://omniscient.us-west-1.elasticbeanstalk.com/profile/signin",
                dataType: 'json',
                type: 'POST',
                data: { user_name: this.state.userName, password: this.state.password },
                cache: false,
                success: function (data) {
                    if (data.success) {
                        this.props.afterSigned(data);
                    } else {
                        this.setState({ errorCode: data.error_code });
                    }
                }.bind(this)
            });
        }
    }, {
        key: 'userNameHandler',
        value: function userNameHandler(e) {
            this.setState({ userName: e.target.value });
        }
    }, {
        key: 'passwordHandler',
        value: function passwordHandler(e) {
            this.setState({ password: e.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var errorMessage = "";
            if (this.state.errorCode === _Constants.ErrorCode.ACCOUNT__ACCOUNT_NOT_EXISITS) {
                errorMessage = "User name does not exist, please sign up.";
            } else if (this.state.errorCode === _Constants.ErrorCode.ACCOUNT__ACCOUNT_PASSWORD_NOT_MATCH) {
                errorMessage = "The user name and/or password were wrong, please try again.";
            }
            return React.createElement(
                'div',
                { className: 'profile col-sm-2' },
                React.createElement(
                    'h2',
                    null,
                    'Sign In'
                ),
                React.createElement(
                    'form',
                    { className: 'form-horizontal' },
                    React.createElement(
                        'label',
                        { className: 'control-label' },
                        'User Name'
                    ),
                    React.createElement('input', { className: 'form-control', type: 'text', name: 'userName', onChange: this.userNameHandler }),
                    React.createElement('br', null),
                    React.createElement(
                        'label',
                        { className: 'control-label' },
                        'Password'
                    ),
                    React.createElement('input', { className: 'form-control', type: 'password', name: 'password', onChange: this.passwordHandler }),
                    React.createElement('br', null),
                    React.createElement(
                        'p',
                        { id: 'already' },
                        'Don\'t have an account?',
                        React.createElement(
                            'a',
                            { href: '#', onClick: this.props.profileToggle },
                            ' Sign up'
                        )
                    ),
                    React.createElement('input', { type: 'submit', value: 'Sign In', className: 'btn btn-success', onClick: this.signInHandler }),
                    React.createElement(
                        'div',
                        { id: 'errorMessage' },
                        errorMessage
                    )
                )
            );
        }
    }]);

    return SignIn;
}(React.Component);

exports.default = SignIn;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUp = function (_React$Component) {
    _inherits(SignUp, _React$Component);

    function SignUp() {
        _classCallCheck(this, SignUp);

        var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this));

        _this.state = {
            errorCode: 0,
            userName: null,
            password: null,
            confirmPassword: true
        };

        _this.signUpHandler = _this.signUpHandler.bind(_this);
        _this.userNameHandler = _this.userNameHandler.bind(_this);
        _this.passwordHandler = _this.passwordHandler.bind(_this);
        _this.confirmPasswordHandler = _this.confirmPasswordHandler.bind(_this);
        return _this;
    }

    _createClass(SignUp, [{
        key: 'signUpHandler',
        value: function signUpHandler(e) {
            e.preventDefault();
            $.ajax({
                url: "http://omniscient.us-west-1.elasticbeanstalk.com/profile/signup",
                dataType: 'json',
                type: 'POST',
                data: { user_name: this.state.userName, password: this.state.password },
                cache: false,
                success: function (data) {
                    if (data.success) {
                        this.props.afterSigned(data);
                    } else {
                        this.setState({ errorCode: data.error_code });
                    }
                }.bind(this)
            });
        }
    }, {
        key: 'userNameHandler',
        value: function userNameHandler(e) {
            this.setState({ userName: e.target.value });
        }
    }, {
        key: 'passwordHandler',
        value: function passwordHandler(e) {
            this.setState({ password: e.target.value });
        }
    }, {
        key: 'confirmPasswordHandler',
        value: function confirmPasswordHandler(e) {
            if (e.target.value !== this.state.password) {
                this.setState({ confirmPassword: false });
            }if (e.target.value === this.state.password) {
                this.setState({ confirmPassword: true });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var confirmPasswordMessage = "";

            if (this.state.confirmPassword === false) {
                confirmPasswordMessage = "The password you input was not the same, please check again";
            } else if (this.state.confirmPassword) {
                confirmPasswordMessage = "";
            }

            var errorMessage = "";
            if (this.state.errorCode === _Constants.ErrorCode.ACCOUNT__ACCOUNT_ALREADY_EXISITS) {
                errorMessage = "You already have an account, please sign in.";
            }

            return React.createElement(
                'div',
                { className: 'profile col-sm-2' },
                React.createElement(
                    'h2',
                    null,
                    'Sign Up'
                ),
                React.createElement(
                    'form',
                    { className: 'form-horizontal' },
                    React.createElement(
                        'label',
                        { className: 'control-label' },
                        'User Name'
                    ),
                    React.createElement('input', { className: 'form-control', type: 'text', name: 'userName', onChange: this.userNameHandler }),
                    React.createElement('br', null),
                    React.createElement(
                        'label',
                        { className: 'control-label' },
                        'Password'
                    ),
                    React.createElement('input', { className: 'form-control', type: 'password', name: 'password', onChange: this.passwordHandler }),
                    React.createElement('br', null),
                    React.createElement(
                        'label',
                        { className: 'control-label' },
                        'Confirm Password'
                    ),
                    React.createElement('input', { className: 'form-control', type: 'password', name: 'confirmPassword', onChange: this.confirmPasswordHandler }),
                    React.createElement(
                        'p',
                        { id: 'confirmPasswordMessage' },
                        confirmPasswordMessage
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'p',
                        { id: 'already' },
                        'Already signed up? ',
                        React.createElement(
                            'a',
                            { href: '#', onClick: this.props.profileToggle },
                            'Sign in'
                        )
                    ),
                    React.createElement('input', { type: 'submit', value: 'Sign Up', className: 'btn btn-success', onClick: this.signUpHandler }),
                    React.createElement(
                        'div',
                        { id: 'errorMessage' },
                        errorMessage
                    )
                )
            );
        }
    }]);

    return SignUp;
}(React.Component);

exports.default = SignUp;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Constants = __webpack_require__(0);

var _SignIn = __webpack_require__(2);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _SignUp = __webpack_require__(3);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _Profile = __webpack_require__(1);

var _Profile2 = _interopRequireDefault(_Profile);

var _Item = __webpack_require__(6);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Joy on 4/3/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page() {
        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));

        _this.state = {
            profile: null,
            userName: null

        };
        _this.profileToggle = _this.profileToggle.bind(_this);
        _this.afterSigned = _this.afterSigned.bind(_this);
        _this.afterLogOut = _this.afterLogOut.bind(_this);
        return _this;
    }

    _createClass(Page, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            $.ajax({
                url: 'http://omniscient.us-west-1.elasticbeanstalk.com/profile',
                dataType: 'json',
                cache: false,
                success: function (data) {
                    if (data.success === false) {
                        this.setState({ profile: 'SignUp' });
                    } else if (data.profile.user_name) {
                        this.setState({ profile: 'SignedIn', userName: data.profile.user_name });
                    }
                }.bind(this)
            });
        }
    }, {
        key: 'profileToggle',
        value: function profileToggle() {
            if (this.state.profile === 'SignUp') {
                this.setState({ profile: 'SignIn' });
            } else if (this.state.profile === 'SignIn') {
                this.setState({ profile: 'SignUp' });
            }
        }
    }, {
        key: 'afterSigned',
        value: function afterSigned(data) {
            this.setState({
                profile: 'SignedIn',
                userName: data.profile.user_name
            });
        }
    }, {
        key: 'afterLogOut',
        value: function afterLogOut() {
            this.setState({ profile: 'SignIn' });
        }
    }, {
        key: 'render',
        value: function render() {
            var profilePanel = null;
            if (this.state.profile === 'SignUp') {
                profilePanel = React.createElement(_SignUp2.default, { profileToggle: this.profileToggle, afterSigned: this.afterSigned });
            } else if (this.state.profile === 'SignIn') {
                profilePanel = React.createElement(_SignIn2.default, { profileToggle: this.profileToggle, afterSigned: this.afterSigned });
            } else if (this.state.profile === 'SignedIn') {
                profilePanel = React.createElement(_Profile2.default, { userName: this.state.userName, afterLogOut: this.afterLogOut });
            }
            return React.createElement(
                'div',
                { className: 'page' },
                profilePanel,
                React.createElement(Window, { items: this.props.data })
            );
        }
    }]);

    return Page;
}(React.Component);

var Window = function (_React$Component2) {
    _inherits(Window, _React$Component2);

    function Window() {
        _classCallCheck(this, Window);

        return _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).apply(this, arguments));
    }

    _createClass(Window, [{
        key: 'render',

        /*constructor() {
            super();
            this.state = {
             }
        }*/

        value: function render() {

            return React.createElement(
                'div',
                { className: 'window col-sm-8' },
                React.createElement(CommandBox, null)
            );
        }
    }]);

    return Window;
}(React.Component);

var CommandBox = function (_React$Component3) {
    _inherits(CommandBox, _React$Component3);

    function CommandBox() {
        _classCallCheck(this, CommandBox);

        return _possibleConstructorReturn(this, (CommandBox.__proto__ || Object.getPrototypeOf(CommandBox)).apply(this, arguments));
    }

    _createClass(CommandBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'commandBox' },
                React.createElement('input', { type: 'text', onChange: function onChange() {} })
            );
        }
    }]);

    return CommandBox;
}(React.Component);

ReactDOM.render(React.createElement(Page, null), document.getElementById('content'));

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Joy on 4/9/17.
 */
var Item = function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item() {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

        _this.itemCompletedHandler = _this.itemCompletedHandler.bind(_this);
        return _this;
    }

    _createClass(Item, [{
        key: "itemCompletedHandler",
        value: function itemCompletedHandler() {
            if (this.props.item.completed === false) {
                this.setState({ completed: true });
            } else {
                this.setState({ completed: false });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "item" },
                React.createElement("input", { type: "checkbox", onClick: this.itemCompleteHandler }),
                React.createElement(
                    "p",
                    { className: "itemContent" },
                    this.props.item.itemContent
                )
            );
        }
    }]);

    return Item;
}(React.Component);

exports.default = Item;

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map