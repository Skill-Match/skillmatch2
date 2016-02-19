/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(2);
	__webpack_require__(6);
	__webpack_require__(8);
	__webpack_require__(10);
	__webpack_require__(12);
	__webpack_require__(14);
	__webpack_require__(16);
	__webpack_require__(18);
	__webpack_require__(20);
	__webpack_require__(22);
	__webpack_require__(24);
	__webpack_require__(26);
	__webpack_require__(28);
	__webpack_require__(30);
	__webpack_require__(32);
	$(document).ready(function() {
	  var Cookie = __webpack_require__(34);
	  var Router = __webpack_require__(35);
	});


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.0
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-08T20:02Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					// Support: IE<11
					// option.value not trimmed (#14858)
					return jQuery.trim( elem.value );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
								jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the compat branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8+
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		context = context || ( support.createHTMLDocument ?
			document.implementation.createHTMLDocument( "" ) :
			document );

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( self, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				// Subtract offsetParent scroll positions
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ) -
					offsetParent.scrollTop();
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true ) -
					offsetParent.scrollLeft();
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "* {\n  font-family: 'Ubuntu', sans-serif;\n}\n.row {\n  background-color: #324053;\n}\n.logo {\n  width: 100%;\n  margin: 20%;\n}\n#loginForm {\n  padding: 0 7%;\n  margin-top: 2.3em;\n  margin-left: 1.2em;\n}\n#title {\n  color: white;\n  font-size: 2.5em;\n  margin: 33px 0 0 15px;\n}\n#signUp {\n  font-size: 17px;\n  color: white;\n}\n#logout:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\ninput {\n  font-size: 15px;\n  margin: 1em .5em .5em;\n  border: none;\n  width: 150px;\n  padding: 8px 10px;\n  border-radius: 5px;\n}\nbutton {\n  margin-top: 1.5em;\n  padding: 8px;\n  background-color:#f5f2ec;\n  border: none;\n  border-radius: 10px;\n  box-shadow: 1px 5px 8px 0px rgba(0,0,0,0.50);\n  outline: none;\n}\nbutton:active {\n  box-shadow: none;\n}\n@media(max-width: 1450px){\n  .logo {\n  width: 100%;\n  margin: 15%;\n}\n#loginForm {\n  padding: 0 7%;\n  margin-top: 2.5em;\n  margin-left: 5.3em;\n}\n#title {\n  color: white;\n  font-size: 2em;\n  margin: 45px 0 0 15px;\n}\n#signUp {\n  font-size: 17px;\n  color: white;\n}\n}\n\n@media(max-width: 400px){\n  .logo {\n  width: 50%;\n}\n#loginForm {\n  padding: 0 7%;\n  margin-top: 2.5em;\n  margin-left: 5.3em;\n}\n#title {\n  color: white;\n  font-size: 2em;\n  margin: 45px 0 0 15px;\n}\n#signUp {\n  font-size: 17px;\n  color: white;\n}\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./normal.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./normal.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#imageContainer {\n  width: 100%;\n  background-image: url(\"/images/tennis.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 350px;\n  box-shadow: -1px 5px 8px 0px rgba(0, 0, 0, 0.5); }\n  #imageContainer #over {\n    display: inline-block;\n    position: relative;\n    top: 25%;\n    left: 13%;\n    font-size: 2em; }\n  #imageContainer #createMatchButton {\n    color: white;\n    background-color: #ef3122;\n    border-radius: 15px;\n    border: none;\n    outline: none;\n    box-shadow: 10px 10px 8px 0px rgba(0, 0, 0, 0.5); }\n  #imageContainer #createMatchButton:active {\n    box-shadow: 0 0 0 0;\n    font-size: 29px; }\n  #imageContainer #mission {\n    color: white;\n    width: 100%; }\n\n#upComing {\n  width: 80%;\n  margin: 2% 10%; }\n  #upComing select {\n    font-size: 18px;\n    margin: 1em .5em .5em;\n    border: none;\n    padding: 8px 10px;\n    border-radius: 5px;\n    background-color: #e3e3e3; }\n  #upComing #sportImage {\n    display: inline-block;\n    width: 23%;\n    margin: 1% 2%;\n    position: relative;\n    top: 2em; }\n    #upComing #sportImage img {\n      width: 100%; }\n  #upComing a {\n    text-decoration: none;\n    color: black; }\n  #upComing a:hover {\n    text-decoration: underline; }\n  #upComing ul {\n    width: 100%;\n    padding: 0;\n    height: 18em;\n    background-color: white;\n    float: left; }\n  #upComing li:nth-last-child(1) {\n    margin-bottom: 35px; }\n  #upComing li {\n    list-style-type: none;\n    padding-bottom: 5px;\n    width: 20%; }\n  #upComing h2 {\n    display: inline-block;\n    float: left;\n    margin-bottom: 0; }\n  #upComing .description {\n    display: inline-block;\n    font-size: 1em;\n    line-height: 1.7em;\n    width: 40%;\n    margin: 1% 2%;\n    position: relative;\n    bottom: 7em; }\n  #upComing #skillProgress {\n    position: relative;\n    right: 15%;\n    bottom: 5em;\n    display: inline-block; }\n    #upComing #skillProgress .skill {\n      width: 100%; }\n  #upComing .players {\n    display: inline-block;\n    width: 40%;\n    margin-left: 5%;\n    position: relative;\n    left: 25%;\n    bottom: 5.5em;\n    text-decoration: none; }\n    #upComing .players img {\n      border-radius: 100%;\n      width: 20%; }\n    #upComing .players .name {\n      position: relative;\n      right: 17%;\n      top: 1em; }\n    #upComing .players .empty {\n      opacity: 0.3;\n      border: 2px dashed black;\n      position: relative;\n      top: .3em; }\n  #upComing #areaSearch {\n    display: inline-block; }\n  #upComing #areaInput {\n    line-height: normal;\n    position: relative;\n    left: 15%;\n    bottom: 2.2em; }\n  #upComing #submitArea {\n    position: relative;\n    bottom: 2.2em;\n    left: 18%; }\n  #upComing #area {\n    position: relative;\n    bottom: 2.2em;\n    left: 20%; }\n  #upComing #matchSubmit {\n    padding: .5em 1em;\n    background-color: #1e8880;\n    font-size: 1.2em;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none;\n    width: 4%;\n    display: inline-block;\n    margin: 3%;\n    position: relative;\n    left: 40%;\n    bottom: 10em; }\n    #upComing #matchSubmit a {\n      color: white; }\n  #upComing #matchSubmit:active {\n    box-shadow: none; }\n  #upComing .creatorName {\n    color: #00bfff; }\n  #upComing .creatorName:hover {\n    text-decoration: underline; }\n  #upComing .skill {\n    width: 300px; }\n  #upComing #parkAnchor {\n    color: grey; }\n  #upComing #next {\n    margin-bottom: 1em; }\n  #upComing #prev {\n    margin-left: .5em; }\n\n/*# sourceMappingURL=main.css.map */\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./login.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./login.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#loginPage {\n  background-color: #D8DFEA;\n  height: 35em;\n  width: 50%;\n  margin: 0% 25%;\n  text-align: center; }\n  #loginPage #loginHeader {\n    height: 75px;\n    background-color: #356b66; }\n    #loginPage #loginHeader h2 {\n      padding-top: 25px;\n      color: white; }\n  #loginPage #loginForm input {\n    margin: 10px 5px 5px;\n    font-size: 18px;\n    width: 300px;\n    padding: 8px 10px;\n    border: none;\n    border-radius: 5px; }\n  #loginPage #loginForm #loginSubmit {\n    margin: 15px 0 0 70px;\n    padding: 15px;\n    background-color: #356b66;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none; }\n  #loginPage #loginForm .register {\n    text-decoration: none;\n    padding: 15px;\n    background-color: #356b66;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none; }\n\n/*# sourceMappingURL=login.css.map */\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./signup.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./signup.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#signupPage {\n  background-color: #e3e3e3;\n  height: 35em;\n  width: 50%;\n  margin: 0% 25%;\n  text-align: center;\n  box-shadow: 4px 0px 8px 0px rgba(0, 0, 0, 0.5); }\n  #signupPage #signupHeader {\n    height: 75px;\n    background-color: #1e8880; }\n    #signupPage #signupHeader h2 {\n      padding-top: 25px;\n      color: white; }\n  #signupPage #signupForm input {\n    margin: 10px 5px 5px;\n    font-size: 18px;\n    width: 300px;\n    padding: 8px 10px;\n    border: none;\n    border-radius: 5px; }\n  #signupPage #signupForm select {\n    margin: 10px 5px 5px;\n    font-size: 18px;\n    width: 300px;\n    padding: 8px 10px;\n    border: none;\n    border-radius: 5px;\n    position: relative;\n    left: 50px; }\n  #signupPage #signupForm #remail {\n    position: relative;\n    left: 22px; }\n  #signupPage #signupForm #rerpass {\n    margin-right: 4em; }\n  #signupPage #signupForm .rgen {\n    width: 30px;\n    margin: 0;\n    padding: 0; }\n  #signupPage #signupForm #gender {\n    position: relative;\n    right: 39px; }\n  #signupPage #signupForm #rnumber {\n    position: relative;\n    left: 17px; }\n  #signupPage #signupForm .register {\n    text-decoration: none;\n    padding: 15px;\n    background-color: #1e8880;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none;\n    position: relative;\n    top: 30px; }\n\n/*# sourceMappingURL=signup.css.map */\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./createMatch.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./createMatch.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#createMatchPage {\n  background-color: #e3e3e3;\n  height: 35em;\n  width: 50%;\n  margin: 0% 25%;\n  text-align: center;\n  box-shadow: 4px 0px 8px 0px rgba(0, 0, 0, 0.5);\n  /* Chrome/ Opera */ }\n  #createMatchPage h2 {\n    padding-top: 1em;\n    color: white;\n    background-color: #1e8880;\n    border: solid #1e8880 1px;\n    height: 50px; }\n  #createMatchPage ul {\n    list-style-type: none; }\n  #createMatchPage li {\n    margin-top: 10px; }\n  #createMatchPage input {\n    font-size: 18px;\n    margin: 10px 5px 5px;\n    border: none;\n    width: 300px;\n    padding: 8px 10px;\n    border-radius: 5px; }\n  #createMatchPage select {\n    font-size: 18px;\n    margin: 10px 5px 5px;\n    border: none;\n    width: 315px;\n    padding: 8px 10px;\n    border-radius: 5px; }\n  #createMatchPage textarea {\n    width: 320px;\n    margin-right: -40px;\n    height: 50px;\n    border-radius: 5px;\n    border: none; }\n  #createMatchPage label {\n    position: relative;\n    bottom: 2em; }\n  #createMatchPage #createMatch {\n    margin-top: 15px;\n    padding: 15px;\n    background-color: #1e8880;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none;\n    position: relative;\n    bottom: 2em; }\n  #createMatchPage #createMatch:active {\n    box-shadow: none; }\n  #createMatchPage input[type='range'] {\n    align-self: center;\n    border: solid 0 transparent;\n    border-width: 0 1.25em;\n    padding: 0;\n    width: 16.125em;\n    height: 5.25em;\n    opacity: .65;\n    background: linear-gradient(90deg, #d5cebc 0.125em, transparent 0.125em) repeat-x 0 2.5em content-box;\n    background-size: 0.5em 1em;\n    font-size: 1em;\n    cursor: pointer; }\n  #createMatchPage input[type='range'], #createMatchPage input[type='range']::-webkit-slider-runnable-track, #createMatchPage input[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none; }\n  #createMatchPage input[type='range']::-webkit-slider-runnable-track {\n    position: relative;\n    width: 16.125em;\n    height: 1.75em;\n    background: linear-gradient(#d5cebc, #d5cebc) no-repeat 50% 0;\n    background-size: 16.125em 0.375em; }\n  #createMatchPage input[type='range']::-webkit-slider-thumb {\n    position: relative;\n    margin-left: -0.0625em;\n    margin-top: 0.25em;\n    border: none;\n    border-radius: 50% 50% 0;\n    background: currentColor;\n    width: 1.25em;\n    height: 1.25em;\n    box-shadow: 1.1875em 1.1875em 0 -0.5625em, 1.25em 1.25em 0 -0.5625em, 1.3125em 1.3125em 0 -0.5625em, 1.375em 1.375em 0 -0.5625em, 1.4375em 1.4375em 0 -0.5625em, 1.5em 1.5em 0 -0.5625em, 1.5625em 1.5625em 0 -0.5625em, 1.625em 1.625em 0 -0.5625em, 1.6875em 1.6875em 0 -0.5625em, 1.75em 1.75em 0 -0.5625em, 1.8125em 1.8125em 0 -0.5625em, 1.875em 1.875em 0 -0.5625em, 1.9375em 1.9375em 0 -0.5625em, 2em 2em 0 -0.5625em, 2.0625em 2.0625em 0 -0.5625em, 2.125em 2.125em 0 -0.5625em, 2.1875em 2.1875em 0 -0.5625em, 2.25em 2.25em 0 -0.5625em, 2.3125em 2.3125em 0 -0.5625em, 2.375em 2.375em 0 -0.5625em;\n    transform: translate(1px, -1.75888em) rotate(45deg); }\n  #createMatchPage input[type='range']::-webkit-slider-runnable-track:before, #createMatchPage input[type='range']::-webkit-slider-runnable-track:after, #createMatchPage input[type='range'] /deep/ #track:before, #createMatchPage input[type='range'] /deep/ #track:after {\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    left: 0;\n    width: 0.5625em;\n    height: 100%;\n    background: #e3e3e3;\n    content: ''; }\n  #createMatchPage input[type='range']::-webkit-slider-runnable-track:after, #createMatchPage input[type='range'] /deep/ #track:after {\n    right: 0;\n    left: auto; }\n  #createMatchPage input[type='range']::-webkit-slider-thumb:before, #createMatchPage input[type='range'] /deep/ #thumb:before {\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    width: 16.125em;\n    transform-origin: 100% 0;\n    transform: rotate(-45deg) translate(0.0625em, 0.88388em);\n    height: 1.75em;\n    box-shadow: inset 0 0.375em currentColor;\n    background: linear-gradient(90deg, currentColor 0.125em, transparent 0.125em) repeat-x 0 100%;\n    background-size: 0.5em 1em;\n    color: inherit;\n    content: ''; }\n  #createMatchPage input[type='range']:nth-of-type(1) {\n    color: #ef3122; }\n  #createMatchPage input[type='range']:focus {\n    outline: none;\n    opacity: .99; }\n  #createMatchPage input[type='range']:not(*:root) {\n    overflow: hidden;\n    width: 17.25em;\n    background-position: 0.5625em 2.5em; }\n\n/*# sourceMappingURL=createMatch.css.map */\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./parkCreateMatch.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./parkCreateMatch.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#parkMatchPage {\n  background-color: #e3e3e3;\n  height: 35em;\n  width: 50%;\n  margin: 0% 25%;\n  text-align: center;\n  box-shadow: 4px 0px 8px 0px rgba(0, 0, 0, 0.5);\n  /* Chrome/ Opera */ }\n  #parkMatchPage h2 {\n    padding-top: 1em;\n    color: white;\n    background-color: #1e8880;\n    border: solid #1e8880 1px;\n    height: 50px; }\n  #parkMatchPage ul {\n    list-style-type: none; }\n  #parkMatchPage li {\n    margin-top: 10px;\n    display: inline-block; }\n  #parkMatchPage input {\n    font-size: 18px;\n    margin: 10px 5px 5px;\n    border: none;\n    width: 300px;\n    padding: 8px 10px;\n    border-radius: 5px; }\n  #parkMatchPage select {\n    font-size: 18px;\n    margin: 10px 5px 5px;\n    border: none;\n    width: 315px;\n    padding: 8px 10px;\n    border-radius: 5px; }\n  #parkMatchPage textarea {\n    width: 320px;\n    margin-right: -40px;\n    height: 50px;\n    border-radius: 5px;\n    border: none; }\n  #parkMatchPage label {\n    position: relative;\n    bottom: 2em; }\n  #parkMatchPage .hidden {\n    display: none; }\n  #parkMatchPage dialog {\n    width: 30%; }\n  #parkMatchPage #hiddenMessage {\n    z-index: 2;\n    margin-top: 4em;\n    margin-left: 3%; }\n  #parkMatchPage #createParkMatches {\n    padding: 15px;\n    background-color: #1e8880;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none;\n    position: relative;\n    bottom: 2em; }\n  #parkMatchPage #createParkMatches:active {\n    box-shadow: none; }\n  #parkMatchPage #infoIcon {\n    position: relative;\n    top: .3em; }\n  #parkMatchPage input[type='range'] {\n    align-self: center;\n    border: solid 0 transparent;\n    border-width: 0 1.25em;\n    padding: 0;\n    width: 16.125em;\n    height: 5.25em;\n    opacity: .65;\n    background: linear-gradient(90deg, #d5cebc 0.125em, transparent 0.125em) repeat-x 0 2.5em content-box;\n    background-size: 0.5em 1em;\n    font-size: 1em;\n    cursor: pointer; }\n  #parkMatchPage input[type='range'], #parkMatchPage input[type='range']::-webkit-slider-runnable-track, #parkMatchPage input[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none; }\n  #parkMatchPage input[type='range']::-webkit-slider-runnable-track {\n    position: relative;\n    width: 16.125em;\n    height: 1.75em;\n    background: linear-gradient(#d5cebc, #d5cebc) no-repeat 50% 0;\n    background-size: 16.125em 0.375em; }\n  #parkMatchPage input[type='range']::-webkit-slider-thumb {\n    position: relative;\n    margin-left: -0.0625em;\n    margin-top: 0.25em;\n    border: none;\n    border-radius: 50% 50% 0;\n    background: currentColor;\n    width: 1.25em;\n    height: 1.25em;\n    box-shadow: 1.1875em 1.1875em 0 -0.5625em, 1.25em 1.25em 0 -0.5625em, 1.3125em 1.3125em 0 -0.5625em, 1.375em 1.375em 0 -0.5625em, 1.4375em 1.4375em 0 -0.5625em, 1.5em 1.5em 0 -0.5625em, 1.5625em 1.5625em 0 -0.5625em, 1.625em 1.625em 0 -0.5625em, 1.6875em 1.6875em 0 -0.5625em, 1.75em 1.75em 0 -0.5625em, 1.8125em 1.8125em 0 -0.5625em, 1.875em 1.875em 0 -0.5625em, 1.9375em 1.9375em 0 -0.5625em, 2em 2em 0 -0.5625em, 2.0625em 2.0625em 0 -0.5625em, 2.125em 2.125em 0 -0.5625em, 2.1875em 2.1875em 0 -0.5625em, 2.25em 2.25em 0 -0.5625em, 2.3125em 2.3125em 0 -0.5625em, 2.375em 2.375em 0 -0.5625em;\n    transform: translate(1px, -1.75888em) rotate(45deg); }\n  #parkMatchPage input[type='range']::-webkit-slider-runnable-track:before, #parkMatchPage input[type='range']::-webkit-slider-runnable-track:after, #parkMatchPage input[type='range'] /deep/ #track:before, #parkMatchPage input[type='range'] /deep/ #track:after {\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    left: 0;\n    width: 0.5625em;\n    height: 100%;\n    background: #e3e3e3;\n    content: ''; }\n  #parkMatchPage input[type='range']::-webkit-slider-runnable-track:after, #parkMatchPage input[type='range'] /deep/ #track:after {\n    right: 0;\n    left: auto; }\n  #parkMatchPage input[type='range']::-webkit-slider-thumb:before, #parkMatchPage input[type='range'] /deep/ #thumb:before {\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    width: 16.125em;\n    transform-origin: 100% 0;\n    transform: rotate(-45deg) translate(0.0625em, 0.88388em);\n    height: 1.75em;\n    box-shadow: inset 0 0.375em currentColor;\n    background: linear-gradient(90deg, currentColor 0.125em, transparent 0.125em) repeat-x 0 100%;\n    background-size: 0.5em 1em;\n    color: inherit;\n    content: ''; }\n  #parkMatchPage input[type='range']:nth-of-type(1) {\n    color: #ef3122; }\n  #parkMatchPage input[type='range']:focus {\n    outline: none;\n    opacity: .99; }\n  #parkMatchPage input[type='range']:not(*:root) {\n    overflow: hidden;\n    width: 17.25em;\n    background-position: 0.5625em 2.5em; }\n\n/*# sourceMappingURL=parkCreateMatch.css.map */\n", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./updatematch.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./updatematch.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#UpMatchPage {\n  background-color: #e3e3e3;\n  height: 35em;\n  width: 50%;\n  margin: 0% 25%;\n  text-align: center;\n  box-shadow: 4px 0px 8px 0px rgba(0, 0, 0, 0.5);\n  /* Chrome/ Opera */ }\n  #UpMatchPage h2 {\n    padding-top: 1em;\n    color: white;\n    background-color: #1e8880;\n    border: solid #1e8880 1px;\n    height: 50px; }\n  #UpMatchPage ul {\n    list-style-type: none; }\n  #UpMatchPage li {\n    margin-top: 10px; }\n  #UpMatchPage input {\n    font-size: 18px;\n    margin: 10px 5px 5px;\n    border: none;\n    width: 300px;\n    padding: 8px 10px;\n    border-radius: 5px; }\n  #UpMatchPage select {\n    font-size: 18px;\n    margin: 8px 4px 2px;\n    border: none;\n    width: 321px;\n    padding: 7px 12px;\n    border-radius: 5px; }\n  #UpMatchPage textarea {\n    width: 320px;\n    margin-right: -40px;\n    height: 50px;\n    border-radius: 5px;\n    border: none;\n    position: relative;\n    right: 3%; }\n  #UpMatchPage label {\n    position: relative;\n    bottom: 2em; }\n  #UpMatchPage #updateMatch {\n    margin-top: 15px;\n    padding: 8px;\n    background-color: #1e8880;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none;\n    text-decoration: none; }\n  #UpMatchPage #updateMatch:active {\n    box-shadow: none; }\n  #UpMatchPage input[type='range'] {\n    align-self: center;\n    border: solid 0 transparent;\n    border-width: 0 1.25em;\n    padding: 0;\n    width: 16.125em;\n    height: 5.25em;\n    opacity: .65;\n    background: linear-gradient(90deg, #d5cebc 0.125em, transparent 0.125em) repeat-x 0 2.5em content-box;\n    background-size: 0.5em 1em;\n    font-size: 1em;\n    cursor: pointer; }\n  #UpMatchPage input[type='range'], #UpMatchPage input[type='range']::-webkit-slider-runnable-track, #UpMatchPage input[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none; }\n  #UpMatchPage input[type='range']::-webkit-slider-runnable-track {\n    position: relative;\n    width: 16.125em;\n    height: 1.75em;\n    background: linear-gradient(#d5cebc, #d5cebc) no-repeat 50% 0;\n    background-size: 16.125em 0.375em; }\n  #UpMatchPage input[type='range']::-webkit-slider-thumb {\n    position: relative;\n    margin-left: -0.0625em;\n    margin-top: 0.25em;\n    border: none;\n    border-radius: 50% 50% 0;\n    background: currentColor;\n    width: 1.25em;\n    height: 1.25em;\n    box-shadow: 1.1875em 1.1875em 0 -0.5625em, 1.25em 1.25em 0 -0.5625em, 1.3125em 1.3125em 0 -0.5625em, 1.375em 1.375em 0 -0.5625em, 1.4375em 1.4375em 0 -0.5625em, 1.5em 1.5em 0 -0.5625em, 1.5625em 1.5625em 0 -0.5625em, 1.625em 1.625em 0 -0.5625em, 1.6875em 1.6875em 0 -0.5625em, 1.75em 1.75em 0 -0.5625em, 1.8125em 1.8125em 0 -0.5625em, 1.875em 1.875em 0 -0.5625em, 1.9375em 1.9375em 0 -0.5625em, 2em 2em 0 -0.5625em, 2.0625em 2.0625em 0 -0.5625em, 2.125em 2.125em 0 -0.5625em, 2.1875em 2.1875em 0 -0.5625em, 2.25em 2.25em 0 -0.5625em, 2.3125em 2.3125em 0 -0.5625em, 2.375em 2.375em 0 -0.5625em;\n    transform: translate(1px, -1.75888em) rotate(45deg); }\n  #UpMatchPage input[type='range']::-webkit-slider-runnable-track:before, #UpMatchPage input[type='range']::-webkit-slider-runnable-track:after, #UpMatchPage input[type='range'] /deep/ #track:before, #UpMatchPage input[type='range'] /deep/ #track:after {\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    left: 0;\n    width: 0.5625em;\n    height: 100%;\n    background: #e3e3e3;\n    content: ''; }\n  #UpMatchPage input[type='range']::-webkit-slider-runnable-track:after, #UpMatchPage input[type='range'] /deep/ #track:after {\n    right: 0;\n    left: auto; }\n  #UpMatchPage input[type='range']::-webkit-slider-thumb:before, #UpMatchPage input[type='range'] /deep/ #thumb:before {\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    width: 16.125em;\n    transform-origin: 100% 0;\n    transform: rotate(-45deg) translate(0.0625em, 0.88388em);\n    height: 1.75em;\n    box-shadow: inset 0 0.375em currentColor;\n    background: linear-gradient(90deg, currentColor 0.125em, transparent 0.125em) repeat-x 0 100%;\n    background-size: 0.5em 1em;\n    color: inherit;\n    content: ''; }\n  #UpMatchPage input[type='range']:nth-of-type(1) {\n    color: #ef3122; }\n  #UpMatchPage input[type='range']:focus {\n    outline: none;\n    opacity: .99; }\n  #UpMatchPage input[type='range']:not(*:root) {\n    overflow: hidden;\n    width: 17.25em;\n    background-position: 0.5625em 2.5em; }\n\n/*# sourceMappingURL=updatematch.css.map */\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./match.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./match.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#matchDetailContainer {\n  height: 30em; }\n  #matchDetailContainer li {\n    list-style-type: none; }\n  #matchDetailContainer #playersFeedback {\n    width: 20px; }\n  #matchDetailContainer #matchJoin {\n    width: 35%;\n    position: relative;\n    left: 20%;\n    bottom: 15.2em; }\n    #matchDetailContainer #matchJoin li {\n      margin-bottom: 10px; }\n  #matchDetailContainer .createdName {\n    color: black; }\n  #matchDetailContainer #matchSkill {\n    position: relative;\n    left: 66%;\n    top: 6em; }\n  #matchDetailContainer #playerImage {\n    position: relative;\n    left: 24%;\n    bottom: 14em;\n    width: 7%;\n    margin-left: 1em; }\n  #matchDetailContainer .skill {\n    width: 59%; }\n  #matchDetailContainer #join {\n    padding: 15px 30px;\n    text-decoration: none;\n    background-color: #1e8880;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none;\n    position: relative;\n    left: 70%;\n    bottom: 27em; }\n  #matchDetailContainer #join:active {\n    box-shadow: none; }\n  #matchDetailContainer #confirm {\n    padding: 15px;\n    text-decoration: none;\n    background-color: #1e8880;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none;\n    position: absolute;\n    top: 29em;\n    left: 4.5em;\n    text-decoration: none; }\n  #matchDetailContainer #confirm:active {\n    box-shadow: none; }\n  #matchDetailContainer #decline {\n    padding: 15px;\n    background-color: #1e8880;\n    text-decoration: none;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none;\n    position: absolute;\n    top: 33em;\n    left: 4.7em;\n    text-decoration: none; }\n  #matchDetailContainer #decline:active {\n    box-shadow: none; }\n  #matchDetailContainer #sportImage {\n    display: inline-block;\n    width: 20%;\n    margin: 1% 2%;\n    position: relative;\n    top: 4em; }\n    #matchDetailContainer #sportImage img {\n      width: 140%;\n      height: 14em;\n      position: relative;\n      bottom: 1em; }\n  #matchDetailContainer #cancel {\n    font-size: 12px;\n    position: absolute;\n    top: 37em;\n    right: 89%; }\n  #matchDetailContainer #update {\n    font-size: 12px;\n    position: absolute;\n    position: absolute;\n    top: 37em;\n    right: 84%; }\n  #matchDetailContainer #cancelEdit a {\n    color: black;\n    text-decoration: none; }\n  #matchDetailContainer #cancelEdit a:hover {\n    text-decoration: underline; }\n  #matchDetailContainer #parkLink {\n    color: grey;\n    text-decoration: none; }\n  #matchDetailContainer #parkLink:hover {\n    text-decoration: underline; }\n  #matchDetailContainer #playersFeedback {\n    display: inline-block;\n    padding: 0; }\n  #matchDetailContainer #leaveMatch {\n    padding: 15px;\n    background-color: #1e8880;\n    text-decoration: none;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none;\n    position: absolute;\n    top: 15.5em;\n    right: 8.5em; }\n  #matchDetailContainer #feedBackMatch {\n    padding: 15px;\n    background-color: #1e8880;\n    text-decoration: none;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none;\n    position: relative;\n    bottom: 26em;\n    left: 65%; }\n\n/*# sourceMappingURL=match.css.map */\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./home.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./home.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#userprofile {\n  background-color: #e3e3e3;\n  height: 250px;\n  font-size: 20px;\n  border-bottom: solid black 1px;\n  width: 100%; }\n  #userprofile ul {\n    width: 100%;\n    padding: 0; }\n  #userprofile li {\n    display: inline-block;\n    width: 30%; }\n  #userprofile .homeProfileImg {\n    width: 10%;\n    margin: 0 2% 0 5%; }\n    #userprofile .homeProfileImg img {\n      height: 200px;\n      position: relative;\n      width: 200px;\n      top: 1em; }\n  #userprofile .userDes {\n    position: relative;\n    bottom: 2em;\n    left: 5%;\n    margin-left: 1%; }\n  #userprofile #logout {\n    text-decoration: underline;\n    font-size: 12px;\n    position: absolute;\n    right: 2em; }\n  #userprofile #createMatch {\n    padding: 15px;\n    background-color: #1e8880;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none;\n    position: relative;\n    left: 35em;\n    bottom: 7em; }\n  #userprofile #createMatch:active {\n    box-shadow: none; }\n\n#youMatches {\n  width: 90%; }\n  #youMatches ul {\n    width: 100%;\n    padding: 0;\n    margin: 3% 5%;\n    height: 13.5em;\n    background-color: white; }\n  #youMatches h2 {\n    display: none;\n    margin-left: 5%; }\n  #youMatches #pending h2:first-child {\n    display: inherit; }\n  #youMatches #upcoming h2:first-child {\n    display: inherit; }\n  #youMatches #history h2:first-child {\n    display: inherit; }\n  #youMatches .parkslink {\n    text-decoration: none;\n    color: grey; }\n  #youMatches .parkslink:hover {\n    text-decoration: underline; }\n  #youMatches a {\n    color: black; }\n  #youMatches ul:nth-last-child(1) {\n    border-bottom: none;\n    padding-bottom: 20px; }\n  #youMatches li {\n    list-style-type: none;\n    padding-bottom: 5px; }\n  #youMatches #profileName {\n    text-decoration: none;\n    color: #00bfff; }\n  #youMatches .playing img {\n    position: relative;\n    bottom: 2.5em;\n    width: 5%; }\n  #youMatches .playing .name {\n    position: relative;\n    right: 2.5em;\n    bottom: 1.5em;\n    text-decoration: none; }\n  #youMatches #profileName:hover {\n    text-decoration: underline; }\n  #youMatches #skillProgressHome {\n    display: inline-block;\n    position: relative;\n    left: 25%;\n    bottom: 3em;\n    width: 10%; }\n  #youMatches .skill {\n    width: 10em; }\n  #youMatches #sportImage {\n    float: left;\n    height: 200px;\n    width: 200px;\n    margin: .5em 2em; }\n  #youMatches #dateHome {\n    text-decoration: none; }\n  #youMatches #dateHome:hover {\n    text-decoration: underline; }\n  #youMatches #goToFeedback {\n    position: relative;\n    left: 85%;\n    bottom: 8em;\n    padding: 15px 10px;\n    background-color: #1e8880;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none;\n    text-decoration: none; }\n\n/*# sourceMappingURL=home.css.map */\n", ""]);

	// exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./profile.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./profile.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#profileContainer {\n  background-color: #e3e3e3;\n  height: 250px;\n  font-size: 20px;\n  border-bottom: solid black 1px; }\n  #profileContainer #challenge {\n    position: absolute;\n    left: 40em;\n    top: 12em; }\n  #profileContainer #userProfileImg {\n    height: 200px;\n    width: 200px; }\n  #profileContainer #userProfileImg {\n    margin: 20px 0px; }\n  #profileContainer .profileDescription {\n    position: relative;\n    width: 35em;\n    left: 12em;\n    bottom: 10em;\n    margin-bottom: .5em; }\n  #profileContainer li {\n    list-style-type: none; }\n\n#historyContainer {\n  overflow: auto; }\n  #historyContainer a {\n    text-decoration: none; }\n  #historyContainer li {\n    list-style-type: none;\n    position: relative;\n    left: 15em;\n    bottom: 10em;\n    width: 35em; }\n  #historyContainer h2 {\n    margin-left: 1.5em; }\n  #historyContainer ul {\n    border-bottom: 1px solid #4f1e47;\n    width: 1200px;\n    margin-left: 2em; }\n  #historyContainer ul:nth-last-child(1) {\n    border-bottom: none; }\n  #historyContainer #goToFeedback {\n    padding: 15px;\n    background-color: #1e8880;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none;\n    position: relative;\n    left: 35em; }\n  #historyContainer #goToFeedback:active {\n    box-shadow: none; }\n  #historyContainer #sportImage {\n    padding-left: 4em;\n    height: 200px;\n    width: 200px; }\n\n/*# sourceMappingURL=profile.css.map */\n", ""]);

	// exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./feedback.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./feedback.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#feedbackContainer {\n  height: auto;\n  width: 100%; }\n  #feedbackContainer #dialog {\n    display: none; }\n  #feedbackContainer #feedbackForm {\n    text-align: center;\n    width: 50%;\n    margin: auto; }\n  #feedbackContainer .infoIcon {\n    position: relative;\n    top: .2em; }\n  #feedbackContainer input[type='range'] {\n    align-self: center;\n    border: solid 0 transparent;\n    border-width: 0 1.25em;\n    padding: 0;\n    width: 16.125em;\n    height: 5.25em;\n    opacity: .65;\n    background: linear-gradient(90deg, #d5cebc 0.125em, transparent 0.125em) repeat-x 0 2.5em content-box;\n    background-size: 0.5em 1em;\n    font-size: 1em;\n    cursor: pointer; }\n  #feedbackContainer input[type='range'], #feedbackContainer input[type='range']::-webkit-slider-runnable-track, #feedbackContainer input[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none; }\n  #feedbackContainer input[type='range']::-webkit-slider-runnable-track {\n    position: relative;\n    width: 16.125em;\n    height: 1.75em;\n    background: linear-gradient(#d5cebc, #d5cebc) no-repeat 50% 0;\n    background-size: 16.125em 0.375em; }\n  #feedbackContainer input[type='range']::-webkit-slider-thumb {\n    position: relative;\n    margin-left: -0.0625em;\n    margin-top: 0.25em;\n    border: none;\n    border-radius: 50% 50% 0;\n    background: currentColor;\n    width: 1.25em;\n    height: 1.25em;\n    box-shadow: 1.1875em 1.1875em 0 -0.5625em, 1.25em 1.25em 0 -0.5625em, 1.3125em 1.3125em 0 -0.5625em, 1.375em 1.375em 0 -0.5625em, 1.4375em 1.4375em 0 -0.5625em, 1.5em 1.5em 0 -0.5625em, 1.5625em 1.5625em 0 -0.5625em, 1.625em 1.625em 0 -0.5625em, 1.6875em 1.6875em 0 -0.5625em, 1.75em 1.75em 0 -0.5625em, 1.8125em 1.8125em 0 -0.5625em, 1.875em 1.875em 0 -0.5625em, 1.9375em 1.9375em 0 -0.5625em, 2em 2em 0 -0.5625em, 2.0625em 2.0625em 0 -0.5625em, 2.125em 2.125em 0 -0.5625em, 2.1875em 2.1875em 0 -0.5625em, 2.25em 2.25em 0 -0.5625em, 2.3125em 2.3125em 0 -0.5625em, 2.375em 2.375em 0 -0.5625em;\n    transform: translate(1px, -1.75888em) rotate(45deg); }\n  #feedbackContainer input[type='range']::-webkit-slider-runnable-track:before, #feedbackContainer input[type='range']::-webkit-slider-runnable-track:after, #feedbackContainer input[type='range'] /deep/ #track:before, #feedbackContainer input[type='range'] /deep/ #track:after {\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    left: 0;\n    width: 0.5625em;\n    height: 100%;\n    background: #e3e3e3;\n    content: ''; }\n  #feedbackContainer input[type='range']::-webkit-slider-runnable-track:after, #feedbackContainer input[type='range'] /deep/ #track:after {\n    right: 0;\n    left: auto; }\n  #feedbackContainer input[type='range']::-webkit-slider-thumb:before, #feedbackContainer input[type='range'] /deep/ #thumb:before {\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    width: 16.125em;\n    transform-origin: 100% 0;\n    transform: rotate(-45deg) translate(0.0625em, 0.88388em);\n    height: 1.75em;\n    box-shadow: inset 0 0.375em currentColor;\n    background: linear-gradient(90deg, currentColor 0.125em, transparent 0.125em) repeat-x 0 100%;\n    background-size: 0.5em 1em;\n    color: inherit;\n    content: ''; }\n  #feedbackContainer #addSkillFeedback[type='range'] {\n    color: #ef3122; }\n  #feedbackContainer #addFunFeedback[type='range'] {\n    color: #324053; }\n  #feedbackContainer #addCrowdFeedback[type='range'] {\n    color: #101813; }\n  #feedbackContainer input[type='range']:focus {\n    outline: none;\n    opacity: .99; }\n  #feedbackContainer input[type='range']:not(*:root) {\n    overflow: hidden;\n    width: 17.25em;\n    background-position: 0.5625em 2.5em; }\n  #feedbackContainer .hidden {\n    display: none; }\n  #feedbackContainer #submitFeedback {\n    margin: 5% 0;\n    padding: 15px;\n    background-color: #1e8880;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none;\n    position: relative;\n    left: 45%; }\n  #feedbackContainer #submitFeedback:active {\n    box-shadow: none; }\n  #feedbackContainer #skillInfo {\n    position: relative;\n    top: 1em; }\n  #feedbackContainer #skillRating {\n    position: relative;\n    top: 1em; }\n  #feedbackContainer #skillInfo2 {\n    position: relative;\n    right: 10.81em;\n    top: 1em; }\n  #feedbackContainer #skillInfo3 {\n    position: relative;\n    right: 10.81em;\n    top: 1em; }\n  #feedbackContainer .hidden {\n    display: none; }\n\n/*# sourceMappingURL=feedback.css.map */\n", ""]);

	// exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./parks.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./parks.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#parksContainer {\n  width: 90%;\n  display: inline-block;\n  margin: 5%;\n  margin-top: 2%; }\n  #parksContainer #zip {\n    margin-left: 1%; }\n  #parksContainer input {\n    width: 12em; }\n  #parksContainer #locate {\n    position: relative;\n    top: 2.1em;\n    left: 26%; }\n  #parksContainer .parks {\n    padding: 0 3%;\n    float: left;\n    height: 20em;\n    width: 90%;\n    background-color: white;\n    list-style: none; }\n    #parksContainer .parks ul {\n      padding: 0; }\n    #parksContainer .parks li {\n      display: inline-block;\n      width: 20%; }\n    #parksContainer .parks a {\n      text-decoration: none;\n      font-size: 1em;\n      color: black; }\n    #parksContainer .parks p {\n      display: inline-block;\n      position: relative;\n      bottom: 2em; }\n    #parksContainer .parks .googleMaps {\n      display: inline-block;\n      float: left;\n      position: relative;\n      top: .5em;\n      right: 3%;\n      padding-right: 1em; }\n    #parksContainer .parks .parkName {\n      display: inline-block;\n      font-size: 1.5em; }\n    #parksContainer .parks .parkName:hover {\n      text-decoration: underline; }\n    #parksContainer .parks .parkPic {\n      display: inline-block;\n      position: relative;\n      left: 8%;\n      top: 1em;\n      margin-left: 1%;\n      width: 15%; }\n    #parksContainer .parks .parkDet {\n      display: inline-block;\n      position: relative;\n      right: 5%;\n      bottom: 4em;\n      width: 39%;\n      text-align: center; }\n      #parksContainer .parks .parkDet a {\n        text-decoration: none;\n        font-size: 1em;\n        color: black; }\n    #parksContainer .parks .parkAddress {\n      display: inline-block;\n      position: relative;\n      left: 32.5%;\n      bottom: 10em; }\n    #parksContainer .parks .parkMatch {\n      display: inline-block;\n      position: relative;\n      left: 45%;\n      bottom: -1em;\n      width: 11%;\n      color: white;\n      background-color: #ef3122;\n      border-radius: 15px;\n      border: none;\n      outline: none;\n      box-shadow: 10px 10px 8px 0px rgba(0, 0, 0, 0.5);\n      text-align: center;\n      padding: 1%;\n      font-size: 18px; }\n    #parksContainer .parks .availableSports {\n      display: inline-block;\n      float: left;\n      width: 45%;\n      list-style-type: none;\n      position: relative;\n      left: 9%;\n      top: 2em; }\n      #parksContainer .parks .availableSports .sportPic {\n        width: 15%;\n        padding-right: 0.1em; }\n    #parksContainer .parks .parkMatch:active {\n      box-shadow: none; }\n    #parksContainer .parks a {\n      color: white;\n      text-decoration: none; }\n    #parksContainer .parks #updateDetails {\n      position: relative;\n      left: 100%;\n      top: 6em; }\n\n#backPark {\n  position: relative;\n  left: 5%;\n  bottom: 4em; }\n\n#nextPark {\n  position: relative;\n  left: 5.5%;\n  bottom: 4em; }\n\n/*# sourceMappingURL=parks.css.map */\n", ""]);

	// exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./parksDetail.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./parksDetail.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#parksPage * {\n  display: inline-block;\n  margin: 0; }\n#parksPage h2 {\n  position: relative;\n  left: 17%; }\n#parksPage .hidden {\n  display: none; }\n#parksPage dialog {\n  width: 60%;\n  margin: 0 20%;\n  z-index: 2; }\n  #parksPage dialog .close {\n    text-decoration: none;\n    border-radius: 100%;\n    background-color: transparent;\n    padding: .0em .3em .1em 0.3em;\n    outline: none;\n    text-align: center;\n    position: relative;\n    bottom: 1.5em;\n    left: 10%;\n    color: black;\n    box-shadow: none; }\n#parksPage #parksDetail {\n  background-color: #e3e3e3;\n  height: 250px;\n  font-size: 20px;\n  border-bottom: solid black 1px;\n  width: 100%; }\n  #parksPage #parksDetail ul {\n    width: 100%;\n    padding: 0; }\n    #parksPage #parksDetail ul .details {\n      position: relative;\n      left: 5%; }\n    #parksPage #parksDetail ul .available {\n      position: relative;\n      right: 20%;\n      padding: 15px; }\n#parksPage #googleMaps2 {\n  position: relative;\n  top: .5em;\n  left: 7%; }\n#parksPage .parkName {\n  position: relative;\n  bottom: 6em;\n  left: 6%; }\n#parksPage .parkAddress {\n  position: relative;\n  bottom: 3.5em;\n  right: 34.5%; }\n#parksPage .yelp {\n  position: relative;\n  bottom: 3.5em;\n  left: 9.5%;\n  color: black; }\n#parksPage #availableSports {\n  position: relative;\n  right: 37%; }\n#parksPage #sportIcon {\n  position: relative;\n  right: 10em;\n  top: 0.4em; }\n#parksPage #parkMatch {\n  padding: 10px;\n  background-color: #1e8880;\n  color: white;\n  border: none;\n  border-radius: 20px;\n  box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n  outline: none;\n  text-decoration: none;\n  position: relative;\n  bottom: 8em;\n  left: 65%; }\n#parksPage #createCourt {\n  padding: 10px;\n  background-color: #1e8880;\n  color: white;\n  border: none;\n  border-radius: 20px;\n  box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n  outline: none;\n  text-decoration: none;\n  position: relative;\n  bottom: 5em;\n  left: 75.4%; }\n#parksPage .parkMatches {\n  background-color: #fff;\n  width: 70%;\n  margin: 1% 16%;\n  padding: 0;\n  height: 15em; }\n  #parksPage .parkMatches #sportImage img {\n    width: 80%;\n    margin: 5%;\n    position: relative;\n    top: 1.5em; }\n  #parksPage .parkMatches .description {\n    position: relative;\n    bottom: 7em;\n    right: 3%; }\n  #parksPage .parkMatches #skillProgress {\n    position: relative;\n    bottom: 4em;\n    right: 23%; }\n  #parksPage .parkMatches .players {\n    position: relative;\n    right: 50%;\n    bottom: 1em; }\n  #parksPage .parkMatches .matchSubmit {\n    position: relative;\n    bottom: 4em;\n    padding: 10px;\n    background-color: #1e8880;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n    outline: none; }\n    #parksPage .parkMatches .matchSubmit a {\n      text-decoration: none;\n      color: white; }\n  #parksPage .parkMatches .smallImg {\n    position: relative;\n    top: 2em; }\n\n/*# sourceMappingURL=parksDetail.css.map */\n", ""]);

	// exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./userUpdate.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./userUpdate.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#updatePage {\n  background-color: #e3e3e3;\n  height: 35em;\n  width: 50%;\n  margin: 0% 25%;\n  text-align: center;\n  box-shadow: 4px 0px 8px 0px rgba(0, 0, 0, 0.5); }\n  #updatePage h2 {\n    padding-top: 1em;\n    color: white;\n    background-color: #1e8880;\n    border: solid #1e8880 1px;\n    height: 50px; }\n  #updatePage ul {\n    list-style-type: none; }\n  #updatePage li {\n    margin-top: 10px; }\n  #updatePage input {\n    font-size: 18px;\n    margin: 10px 55px 5px;\n    border: none;\n    width: 50%;\n    padding: 8px 10px;\n    border-radius: 5px; }\n  #updatePage #gender {\n    margin: 2px; }\n  #updatePage .rgen {\n    margin: 4px;\n    width: 10px; }\n  #updatePage #ruser {\n    position: relative;\n    right: 1em; }\n  #updatePage #rpass {\n    position: relative;\n    right: 1em; }\n  #updatePage #rerpass {\n    position: relative;\n    right: 3em; }\n  #updatePage #rtxt {\n    position: relative;\n    right: 1em; }\n  #updatePage #rnumber {\n    position: relative;\n    right: .2em; }\n  #updatePage #rage {\n    position: relative;\n    left: .3em; }\n  #updatePage #imageUpload {\n    position: relative;\n    left: 2em; }\n  #updatePage #user {\n    position: relative;\n    right: .7em; }\n  #updatePage .register {\n    position: relative;\n    left: 12em;\n    bottom: 2em; }\n  #updatePage select {\n    font-size: 18px;\n    margin: 10px 5px 5px;\n    border: none;\n    width: 315px;\n    padding: 8px 10px;\n    border-radius: 5px; }\n  #updatePage textarea {\n    width: 320px;\n    margin-right: -40px;\n    height: 50px;\n    border-radius: 5px;\n    border: none; }\n\n/*# sourceMappingURL=userUpdate.css.map */\n", ""]);

	// exports


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.1.0
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	(function (factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			var _OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = _OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}

		function init (converter) {
			function api (key, value, attributes) {
				var result;

				// Write

				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);

					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}

					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}

					if (!converter.write) {
						value = encodeURIComponent(String(value))
							.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}

					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);

					return (document.cookie = [
						key, '=', value,
						attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
						attributes.path    && '; path=' + attributes.path,
						attributes.domain  && '; domain=' + attributes.domain,
						attributes.secure ? '; secure' : ''
					].join(''));
				}

				// Read

				if (!key) {
					result = {};
				}

				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;

				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var name = parts[0].replace(rdecode, decodeURIComponent);
					var cookie = parts.slice(1).join('=');

					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}

					try {
						cookie = converter.read ?
							converter.read(cookie, name) : converter(cookie, name) ||
							cookie.replace(rdecode, decodeURIComponent);

						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}

						if (key === name) {
							result = cookie;
							break;
						}

						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}

				return result;
			}

			api.get = api.set = api;
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};

			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};

			api.withConverter = init;

			return api;
		}

		return init(function () {});
	}));


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {////////////////////////////////////////////////////////////
	// Requiring in all JS libraries
	// Requiring in all templates
	// Setting global variables
	var Backbone = __webpack_require__(36);
	var Mustache = __webpack_require__(38);
	var Cookie = __webpack_require__(34);
	var BackbonePagination = __webpack_require__(39)
	var login = __webpack_require__(40);
	var signup = __webpack_require__(44);
	var main = __webpack_require__(45);
	var matchPage = __webpack_require__(46);
	var updatematch = __webpack_require__(47);
	var userUpdate = __webpack_require__(48);
	var history = __webpack_require__(49);
	var profile = __webpack_require__(50);
	var createMatch = __webpack_require__(51);
	var feedback = __webpack_require__(52);
	var home = __webpack_require__(53);
	var parks = __webpack_require__(54);
	var parksDetail = __webpack_require__(55);
	var parkCreateMatch = __webpack_require__(56);
	var parkCreatePage = __webpack_require__(57);
	var counter = 1;
	var jQuery = __webpack_require__(1);
	////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////
	// Creating routers for navigation
	var Router = Backbone.Router.extend({
	  initialize: function () {
	    Backbone.history.start({pushState: true});
	  },
	  routes: {
	    "feedback/:id":"feedback",
	    "match/:id":"match",
	    "updatematch/:id":"updatematch",
	    "signup":"signup",
	    "userUpdate/:id":"userUpdate",
	    "profile/:creator":"profile",
	    "createMatch":"createMatch",
	    "challenge/:id":"challenge",
	    "home/:username":"home",
	    "parks":"parks",
	    "parkCreateMatch/:id":"parkCreateMatch",
	    "parkCreatePage/:id":"parkCreatePage",
	    "parksDetail/:id":"parksDetail",
	    "":"index"
	  },
	  index: function (username) {
	    var Match = Backbone.Model.extend({
	  initialize: function () {
	  },
	  defaults: {
	    creator: null,
	    creator_name: null,
	    description: null,
	    park: null,
	    sport: null,
	    skill_level: null,
	    date: null,
	    time: null
	  },
	  url: 'https://skill-match.herokuapp.com/api/matches/'
	  });

	  // Using Backbone fetch to GET the up coming matches
	  var Matches = Backbone.Collection.extend({
	    model: Match,
	    url: 'https://skill-match.herokuapp.com/api/matches/'
	  });

	  $('#loginSubmit').on('click', function(e){
	    e.preventDefault();
	    var username = $("#username").val();
	    var password = $("#password").val();
	    var homeBtn = document.createElement('a');
	    var link = document.createTextNode("Hello, " + username);
	    homeBtn.appendChild(link);
	    $.ajax({
	      url:"https://skill-match.herokuapp.com/api/api-token-auth/",
	      method:'POST',
	      data: {username: username, password:password}
	    }).then(function(resp){
	      setToken(resp.token);
	      console.log(resp);
	      var user_id = resp.user_id;
	      var user = resp.username;
	      var token = resp.token;
	      Cookie.set('token', token);
	      Cookie.set('uid', user_id);
	      Cookie.set('userName', user);
	      $('#loginForm').html(homeBtn);
	      $('#loginForm').append('<a id="logout"> Logout </a>');
	      homeBtn.setAttribute('href', '/home/'+username);
	      if (document.URL == 'http://localhost:8080/') {
	      router.navigate('/home/' + username , {trigger:true})
	      };
	    });
	  });
	  function setToken(token) {
	    var backboneSync = Backbone.sync;
	    Backbone.sync = function(method,model,options) {
	      options.headers = {
	        'Authorization': 'Token ' + token
	      };
	    backboneSync(method,model,options);
	    };
	  }

	  function geoFindMe() {
	    function success(position) {
	      var latitude  = position.coords.latitude;
	      var longitude = position.coords.longitude;
	      console.log('latitude '+latitude);
	      console.log('longitude '+longitude);
	      var match = new Match();
	      match.fetch({
	        url: 'https://skill-match.herokuapp.com/api/matches/?lat='+ latitude + '&long=' + longitude,
	        success: function(resp) {
	          var html = main({'data': resp.toJSON().results});
	          var mainTemplate = $("#mainTemplate").text();
	          var mainHTML = Mustache.render(mainTemplate, 'data');
	          var next = resp.toJSON().next;
	          var previous = resp.toJSON().previous;
	          $("#upComing").html(mainHTML);
	          $("#container").html(html);
	          console.log("success: ",resp)
	          $("#sport").on('change', function() {
	            filterSport();
	          });
	          $('#next').on('click', function(){
	            nextPage(next)
	            window.scrollTo(0, 450);
	          });
	          $('#prev').on('click', function(){
	            prevPage(prev)
	            window.scrollTo(0, 450);
	          });
	          $("#createMatchButton").on('click', function() {
	            router.navigate('/parks', {trigger: true});
	          });
	          $("#area").on('click', function() {
	            geoFindMe();
	          });
	          $("#submitArea").on('click', function() {
	            matchesAround();
	          });
	        },
	        error: function(err) {
	          console.log("nope")
	        }
	      });
	    };
	  function error() {
	  };
	  $('#areaInput').val("Locating…");
	    navigator.geolocation.getCurrentPosition(success, error);
	  }


	  function matchesAround() {
	    var match = new Match();
	    match.fetch({
	      url: 'http://skill-match.herokuapp.com/api/matches/?zip='+$('#areaInput').val(),
	      success: function(resp) {
	        var html = main({'data': resp.toJSON().results});
	        var mainTemplate = $("#mainTemplate").text();
	        var mainHTML = Mustache.render(mainTemplate, 'data');
	        var next = resp.toJSON().next;
	        var previous = resp.toJSON().previous;
	        $("#upComing").html(mainHTML);
	        $("#container").html(html);
	        console.log("success: ",resp)
	        $("#sport").on('change', function() {
	          filterSport();
	        });
	        $('#next').on('click', function(){
	          nextPage(next)
	          window.scrollTo(0, 450);
	        });
	        $('#prev').on('click', function(){
	          prevPage(prev)
	          window.scrollTo(0, 450);
	        });
	        $("#createMatchButton").on('click', function() {
	          router.navigate('/parks', {trigger: true});
	        });
	        $("#area").on('click', function() {
	          geoFindMe();
	        });
	        $("#submitArea").on('click', function() {
	          matchesAround();
	        });
	      },
	      error: function(err) {
	        console.log("nope")
	      }
	    });
	    $('#areaInput').val("Locating…");
	  };

	  function filterSport() {
	    var match = counter++
	    var match = new Match();
	    match.fetch({
	      url: "http://skill-match.herokuapp.com/api/matches/?sport=" + $("#sport").val(),
	        success: function(resp) {
	          var html = main({'data': resp.toJSON().results});
	          var mainTemplate = $("#mainTemplate").text();
	          var mainHTML = Mustache.render(mainTemplate, 'data');
	          var next = resp.toJSON().next;
	          var previous = resp.toJSON().previous;
	          $("#upComing").html(mainHTML);
	          $("#container").html(html);
	          $("#sport").on('change', function() {
	            filterSport();
	          });
	          $('#next').on('click', function(){
	            nextPage(next)
	          });
	          $('#prev').on('click', function(){
	            prevPage(previous)
	          });
	          $("#createMatchButton").on('click', function() {
	            router.navigate('/parks', {trigger: true});
	          });
	          $("#area").on('click', function() {
	            geoFindMe();
	          });
	          $("#submitArea").on('click', function() {
	            matchesAround();
	          });
	        },
	        error: function(err) {
	          console.log("nope")
	        }
	    });
	  }

	  function nextPage(next){
	    var nextPages = new Match();
	    nextPages.fetch({
	      url: next,
	      success: function(resp) {
	        var html = main({'data': resp.toJSON().results});
	        var mainTemplate = $("#mainTemplate").text();
	        var mainHTML = Mustache.render(mainTemplate, 'data');
	        var next = resp.toJSON().next;
	        var previous = resp.toJSON().previous;
	        console.log(next);
	        console.log(previous);
	        $("#upComing").html(mainHTML);
	        $("#container").html(html);
	        console.log("success: ",resp)
	        $("#sport").on('change', function() {
	          filterSport();
	        });
	        $('#prev').on('click', function(){
	          prevPage(previous)
	          window.scrollTo(0, 450);
	        });
	        $("#createMatchButton").on('click', function() {
	          router.navigate('/parks', {trigger: true});
	        });
	        $("#area").on('click', function() {
	          geoFindMe();
	        });
	        $("#submitArea").on('click', function() {
	          matchesAround();
	        });
	      },
	      error: function(err) {
	        console.log("nope")
	      }
	    });
	  }

	  function prevPage(previous){
	    var prevPages = new Match();
	    prevPages.fetch({
	      url: previous,
	      success: function(resp) {
	        var html = main({'data': resp.toJSON().results});
	        var mainTemplate = $("#mainTemplate").text();
	        var mainHTML = Mustache.render(mainTemplate, 'data');
	        var next = resp.toJSON().next;
	        var previous = resp.toJSON().previous;
	        console.log(next);
	        console.log(previous);
	        $("#upComing").html(mainHTML);
	        $("#container").html(html);
	        console.log("success: ",resp)
	        $("#sport").on('change', function() {
	          filterSport();
	        });
	        $('#next').on('click', function(){
	          nextPage(next)
	          window.scrollTo(0, 450);
	        });
	        $('#prev').on('click', function(){
	          prevPage(previous)
	          window.scrollTo(0, 450);
	        });
	        $("#createMatchButton").on('click', function() {
	          router.navigate('/parks', {trigger: true});
	        });
	        $("#area").on('click', function() {
	          geoFindMe();
	        });
	        $("#submitArea").on('click', function() {
	          matchesAround();
	        })
	      },
	      error: function(err) {
	        console.log("nope")
	      }
	    });
	  }

	    var match = new Match();
	    match.fetch({
	      success: function(resp) {
	        var html = main({'data': resp.toJSON().results});
	        var mainTemplate = $("#mainTemplate").text();
	        var mainHTML = Mustache.render(mainTemplate, 'data');
	        var next = resp.toJSON().next;
	        var previous = resp.toJSON().previous;
	        $("#upComing").html(mainHTML);
	        $("#container").html(html);
	        console.log("success: ",resp)
	        $("#sport").on('change', function() {
	          filterSport();
	        });
	        $('#next').on('click', function(){
	          nextPage(next)
	          window.scrollTo(0, 450);
	        });
	        $('#prev').on('click', function(){
	          prevPage(prev)
	          window.scrollTo(0, 450);
	        });
	        $("#createMatchButton").on('click', function() {
	          router.navigate('/parks', {trigger: true});
	        });
	        $("#area").on('click', function() {
	          geoFindMe();
	        });
	        $("#submitArea").on('click', function() {
	          matchesAround();
	        });
	      },
	      error: function(err) {
	        console.log("nope")
	      }
	    });
	  }
	});
	// End of backbone fetch for upcoming games
	////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////
	// Creating the router for the sign up
	var router = new Router();
	router.on('route:signup', function(){
	  var html = signup;
	  $("#container").html(html);
	  var User = Backbone.Model.extend({
	    initialize: function () {
	    },
	    defaults: {
	      username: null,
	      email: null,
	      password: null,
	      profile: {
	        gender: null,
	        age: null,
	        phone_number: null,
	        wants_texts: false
	      }
	    },
	    url: 'https://skill-match.herokuapp.com/api/users/create/'
	  });
	  $('#rtxt').prop('checked', true);
	  $(".register").on('click', function(e) {
	    e.preventDefault();
	    user = new User();
	    user.set({
	      username: $("#ruser").val(),
	      email: $("#remail").val(),
	      password:$("#rpass").val(),
	      profile: {
	      gender: $(".rgen:checked").val(),
	      age: $("#rage").val(),
	      phone_number: $("#rnumber").val(),
	      wants_texts: $("#rtxt").is(':checked')
	    }
	  });
	  var Users = Backbone.Collection.extend({
	    model: User,
	    url: 'https://skill-match.herokuapp.com/api/users/create/'
	  });
	  var UserCollection = new Users();
	  if ($("#rpass").val() === ($("#rerpass").val())) {
	    user.save(null, {
	      success: function(resp) {
	        console.log("success: ",resp)
	        console.log("New user added.");
	        router.navigate("/?home=home", {trigger: true})
	      },
	      error: function(err) {
	        console.log("nope")
	      }
	    });
	  } else {
	      alert("Sorry, you entered the wrong password. Please try again.");
	      router.navigate("/signup", {trigger: true});
	    }
	  });
	});
	// End of the sign up router
	////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////
	// Creating the router for the home page
	router.on('route:home', function(username, id) {
	  var Match = Backbone.Model.extend({
	  initialize: function () {
	  },
	  defaults: {
	    description: null,
	    park: null,
	    sport: null,
	    skill_level: null,
	    date: null,
	    time: null
	  },
	  url: 'http://skill-match.herokuapp.com/api/matches/?username=' + username
	  });
	  var Matches = Backbone.Collection.extend({
	    model: Match,
	    url: 'http://skill-match.herokuapp.com/api/matches/?username=' + username
	  });
	  var match = new Match();
	    match.fetch({
	      success: function(resp) {
	        var html = home({'data': resp.toJSON().results});
	        var homeTemplate = $("#homeTemplate").text();
	        var homeHTML = Mustache.render(homeTemplate, 'data');
	        $("#yourMatches").html(homeHTML);
	        $("#container").html(html);
	        console.log("success: ",resp);
	        var profileContainer = Backbone.Model.extend({
	        initialize: function() {
	        },
	        defaults: {
	          id: null,
	          username: null,
	          profile: {
	            gender: null,
	            age: null,
	            skill: null,
	            sportsmanship: null
	          }
	        },
	        Model: profileContainer,
	        url: 'https://skill-match.herokuapp.com/api/users/'+Cookie.get('uid')+'/'
	      });
	      var Profiles = Backbone.Collection.extend({
	        Model: profileContainer,
	        url: 'https://skill-match.herokuapp.com/api/users/'+Cookie.get('uid')+'/'
	      });
	      var userProfile = new Profiles();
	      userProfile.fetch({
	        success: function(resp) {
	        var userhtml =home({'user': resp.toJSON()});
	        var userTemplate = $("#userTemplate").text();
	        var userHTML = Mustache.render(userTemplate, 'user');
	        $("#userprofile").html(userhtml);
	        console.log('success', resp.toJSON());
	        $("#logout").on('click', function() {
	          Cookie.remove('token');
	          Cookie.remove('userName');
	          Cookie.remove('uid');
	          router.navigate('/?home=home');
	          location.reload();
	        });
	        $('#createMatch').on('click', function(){
	          function success(position) {
	            var latitude  = position.coords.latitude;
	            var longitude = position.coords.longitude;
	            console.log('latitude '+latitude);
	            console.log('longitude '+longitude);
	          }
	          router.navigate('/parks', {trigger: true});
	          })
	        },
	        error: function(err) {
	          console.log('error', err);
	        }
	      });
	    },
	    error: function(err) {
	      console.log("nope");
	    }
	  });
	});
	// End of home router
	////////////////////////////////////////////////////////////
	router.on('route:userUpdate', function(id){
	  var profileContainer = Backbone.Model.extend({
	    initialize: function() {
	    },
	    defaults: {
	      id: null,
	      username: null,
	      password: null,
	      profile: {
	        gender: null,
	        age: null,
	        phone_number: null,
	        wants_texts: null
	      }
	    },
	    Model: profileContainer,
	    url: 'https://skill-match.herokuapp.com/api/users/'+id+'/'
	  });
	  var Profiles = Backbone.Collection.extend({
	    Model: profileContainer,
	    url: 'https://skill-match.herokuapp.com/api/users/'+id+'/'
	  });
	  var userProfile = new Profiles(id);
	    userProfile.fetch({
	      success: function(resp) {
	      var html = userUpdate({'update': resp.toJSON()});
	      var updateTemplate = $("#updateTemplate").text();
	      var updateHTML = Mustache.render(updateTemplate, 'update');
	      $("#updatePage").html(updateHTML);
	      $("#container").html(html);
	      console.log('success', resp.toJSON());
	      $('#rtxt').prop('checked', true)
	      $(".register").on('click', function(e) {
	        e.preventDefault();
	        userProfile = new profileContainer({id:id});
	        userProfile.set({
	          username: $("#ruser").val(),
	          email: $("#remail").val(),
	          password:$("#rpass").val(),
	          profile: {
	            gender: $(".rgen").val(),
	            age: $("#rage").val(),
	            phone_number: $("#rnumber").val(),
	            wants_texts: $("#rtxt").is(':checked')
	          }
	        });
	        userProfile.save(null, {
	          url: 'https://skill-match.herokuapp.com/api/users/'+id+'/',
	          success: function(resp) {
	            console.log("success", resp);
	          },
	          error: function(err) {
	          console.log("error", err);
	          }
	        });
	      });
	    },
	    error: function(err) {
	      console.log("error", err);
	    }
	  });
	});
	// End of userUpdate router
	//////////////////////////////////////////////////////////////////////////////////////
	// Player Profile page
	router.on('route:profile', function(creator, username) {
	  if(Cookie.get('uid')==creator) {
	    router.navigate('/home/' + Cookie.get('userName'), {trigger: true})
	  }
	  var profileContainer = Backbone.Model.extend({
	    initialize: function() {
	    },
	    defaults: {
	      id: null,
	      username: null,
	      profile: {
	        gender: null,
	        age: null,
	        sportsmanship: null
	      },
	      skill_set: {
	        sport: null,
	        skill: null,
	        num_feedbacks: null
	      }
	    },
	    Model: profileContainer,
	    url: 'https://skill-match.herokuapp.com/api/users/' + creator +'/'
	  });
	  var Profiles = Backbone.Collection.extend({
	    Model: profileContainer,
	    url: 'https://skill-match.herokuapp.com/api/users/' + creator +'/'
	  });
	  var userProfile = new Profiles();
	  userProfile.fetch({
	    success: function(resp) {
	      var html = profile({'data': resp.toJSON()});
	      var profileTemplate = $("#profileTemplate").text();
	      var profileHTML = Mustache.render(profileTemplate, 'data');
	      var id = resp.toJSON()[0].id;
	      var username = resp.toJSON()[0].username;
	      $("#profileContainer").html(profileHTML);
	      $("#container").html(html);
	      console.log('success', resp.toJSON());
	      $('#challenge').on('click', function(){
	        router.navigate('/challenge/' + id, {trigger: true});
	      });
	      var Match = Backbone.Model.extend({
	        initialize: function () {
	      },
	        defaults: {
	          description: null,
	          park_name: null,
	          sport: null,
	          skill_level: null,
	          date: null,
	          time: null
	        },
	        url: 'http://skill-match.herokuapp.com/api/matches/?username=' + username
	        });
	      var Matches = Backbone.Collection.extend({
	        model: Match,
	        url: 'http://skill-match.herokuapp.com/api/matches/?username=' + username
	      });
	      var userMatches = new Match();
	      userMatches.fetch({
	        success: function(resp) {
	        var historyhtml = history({'history': resp.toJSON().results});
	        var historyTemplate = $("#historyTemplate").text();
	        var historyHTML = Mustache.render(historyTemplate, 'history');
	        $("#historyContainer").html(historyhtml);
	          console.log('success', resp.toJSON());
	        },
	        error: function(err) {
	          console.log('error', err);
	        }
	      });
	    },
	    error: function(err) {
	      console.log('error', err);
	    }
	  });
	});

	var matchContainer = Backbone.Model.extend({
	  initialize: function() {
	  },
	  defaults: {
	    park: null,
	    sport: null,
	    skill_level: null,
	    date: null,
	    time: null
	  },
	    Model: matchContainer,
	    url: 'https://skill-match.herokuapp.com/api/matches/'
	});
	var Matches = Backbone.Collection.extend({
	  model: matchContainer,
	  url: 'https://skill-match.herokuapp.com/api/matches/'
	});

	//////////////////////////////////////////////////////////////////////////////////////
	// Match Detail Page

	router.on('route:match', function(id, username) {
	    var matchDetail = new matchContainer();
	    matchDetail.fetch({
	      url: 'https://skill-match.herokuapp.com/api/matches/' +id +"/",
	      success: function(resp) {
	        var park = resp.toJSON().park_name;
	        var creator = resp.toJSON().creator;
	        var confirm = resp.toJSON().is_confirmed;
	        var completed = resp.toJSON().is_completed;
	        var open = resp.toJSON().is_open;
	        var html = matchPage({"data": resp.toJSON()});
	        console.log("success", resp);
	        var matchTemplate = $("#matchTemplate").text();
	        var matchHTML = Mustache.render(matchTemplate, 'data');
	        $("#matchDetailContainer").html(matchHTML);
	        $("#container").html(html);
	        $("#confirm").hide();
	        $("#decline").hide();
	        $("#update").hide();
	        $("#cancel").hide();
	        $("#leaveMatch").hide();
	        $('#feedBackMatch').hide();
	        if (Cookie.get('uid') == creator) {
	          $("#update").show();
	          $("#cancel").show();
	          $("#leaveMatch").hide();
	          $('#join').hide();
	        };
	        if(Cookie.get('uid') !== creator && confirm == false && open == false) {
	          $("#leaveMatch").show();
	        };
	        if (Cookie.get('uid') == creator && confirm == false && open == false) {
	          $("#confirm").show();
	          $("#decline").show();
	          $("#leaveMatch").hide();
	        };


	        if (Cookie.get('uid') !== creator && open == false) {
	           $('#join').hide();
	        };
	        if (completed == true) {
	          $("#update").hide();
	          $("#cancel").hide();
	          $("#feedBackMatch").show();
	        };
	        $('#homeBtn').on('click', function(){
	          router.navigate('/home/' + player, {trigger: true});
	        })
	        $('#cancel').on('click', function(){
	          var matchDetail = new matchContainer({id:id});
	          matchDetail.destroy({
	            url: 'https://skill-match.herokuapp.com/api/matches/' +id +"/",
	            success: function(resp){
	              console.log("success", resp);
	            },
	            error : function() {
	                console.log("error")
	            }
	          });
	        });
	        var Join = Backbone.Model.extend({
	          initialize: function () {
	          },
	          defaults: {},
	          url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/join/'
	        });

	        var Joins = Backbone.Collection.extend({
	          model: Join,
	          url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/join/'
	        });
	        $("#join").on('click', function() {
	          var join = new Join();
	          join.set({id:id})
	          join.save(null, {
	            success: function(resp) {
	              console.log("success", resp);
	              router.navigate('/home/' + Cookie.get('userName'), {trigger: true});
	            },
	            error: function(err) {
	              console.log("error", err);
	            }
	          });
	        });
	      var Confirm = Backbone.Model.extend({
	        defaults: {},
	        url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/confirm/'
	      });
	      var Confirms = Backbone.Collection.extend ({
	        model: Confirm,
	        url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/confirm/'
	      });
	      $("#confirm").on('click', function() {
	        var confirm = new Confirm();
	        confirm.set({id:id})
	        confirm.save(null, {
	          success: function(resp) {
	            console.log("success", resp);
	          },
	          error: function(err) {
	            console.log("error", err);
	          }
	        });
	      });
	      var Decline = Backbone.Model.extend({
	        defaults: {},
	        url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/decline/'
	      });
	      var Declines = Backbone.Collection.extend({
	        model: Decline,
	        url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/decline/'
	      });
	      $("#decline").on('click', function(){
	        var decline = new Decline();
	        decline.set({id:id})
	        decline.save(null, {
	          success: function(resp) {
	            console.log("success", resp);
	          },
	          error: function(err) {
	            console.log("error", err);
	          }
	        })
	      });
	      var LeaveMatch = Backbone.Model.extend({
	        defaults: {},
	        url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/leave/'
	      });
	      var LeaveMatches = Backbone.Collection.extend({
	        model: LeaveMatch,
	        url: 'https://skill-match.herokuapp.com/api/matches/' + id + '/leave/'
	      });
	      $("#leaveMatch").on('click', function() {
	        var leaveMatch = new LeaveMatch();
	        leaveMatch.set({id: id})
	        leaveMatch.save(null, {
	          success: function(resp) {
	            console.log('success', resp);
	          },
	          error: function(err) {
	            console.log('error', err);
	          }
	        })
	      })
	    },
	    error: function(err) {
	      console.log("error", err);
	    }
	  })
	});
	// End of match page
	//////////////////////////////////////////////////////////////////////////////////////
	// Match Creation Page
	router.on('route:createMatch', function(id, username) {
	  var Park = Backbone.Model.extend({
	    initialize: function () {
	    },
	    defaults: {
	      id: null,
	      name: null
	    },
	    url: 'https://skill-match.herokuapp.com/api/parks/'
	  });
	  var Parks = Backbone.Collection.extend({
	    model: Park,
	    url: 'https://skill-match.herokuapp.com/api/parks/'
	  });
	  var park = new Parks();
	  park.fetch({
	    success: function(resp) {
	      var html = createMatch({'park': resp.toJSON()[0].results});
	      var createMatchTemplate = $("#mainTemplate").text();
	      var createMatchHTML = Mustache.render(createMatchTemplate, 'park');
	      $("#create").html(createMatchHTML);
	      $("#container").html(html);
	      console.log("success: ",resp)
	      $("#createMatch").on('click', function(e) {
	        e.preventDefault();
	        update = new matchContainer();
	        update.set({
	          park: $("#addPark").val(),
	          description: $("#addDescription").val(),
	          sport: $("#addSport").val(),
	          skill_level:$("#addSkill").val(),
	          date: $("#addDate").val(),
	          time: $("#addTime").val()
	        });
	        update.save(null, {
	          url: 'https://skill-match.herokuapp.com/api/matches/',
	          success: function(resp) {
	            console.log("success", resp);
	            var id = resp.toJSON().id;
	            router.navigate('/match/' + id, {trigger: true});
	          },
	          error: function(err) {
	            console.log("error", err);
	          }
	        });
	        $("#addPark").val("");
	        $("#addDescription").val("");
	        $("#addSport").val("");
	        $("#addSkill").val("");
	        $("#addDate").val("");
	        $("#addTime").val("");
	      });
	    },
	    error: function(err) {
	      console.log("nope")
	    }
	  });
	});
	// End of create match
	//////////////////////////////////////////////////////////////////////////////////////

	router.on('route:parkCreateMatch', function(id, name) {
	  var ParkMatch = Backbone.Model.extend({
	    initialize: function () {
	    },
	    defaults: {
	      id: null,
	      name: null
	    },
	    url: 'https://skill-match.herokuapp.com/api/parks/'+id+"/"
	  });
	  var ParkMatches = Backbone.Collection.extend({
	    model: ParkMatch,
	    url: 'https://skill-match.herokuapp.com/api/parks/'+id+"/"
	  });
	  var parkMatch = new ParkMatch();
	  parkMatch.fetch({
	    success: function(resp) {
	      var html = parkCreateMatch({'park': resp.toJSON()});
	      var createParkTemplate = $("#createParkTemplate").text();
	      var createParkHTML = Mustache.render(createParkTemplate, 'park');
	      $("#parkMatchPage").html(createParkHTML);
	      $("#container").html(html);
	      console.log(html);
	      $('#skillInfo').hover(function(){
	      $('#hiddenMessage').toggleClass();
	    });
	    console.log('success',resp);
	    $("#createParkMatches").on('click', function(e) {
	      e.preventDefault();
	      match = new matchContainer();
	      match.set({
	        park: $("#addParkCreate").val(),
	        description: $("#addParkDescription").val(),
	        sport: $("#addParkSport").val(),
	        skill_level: $("#addParkSkill").val(),
	        date: $("#addParkDate").val(),
	        time: $("#addParkTime").val()
	      });
	      match.save(null, {
	        url: 'https://skill-match.herokuapp.com/api/matches/',
	        success: function(resp) {
	          console.log("success", resp);
	          var id = resp.toJSON().id;
	          router.navigate('/match/' + id, {trigger: true});
	        },
	        error: function(error, xhr) {
	          console.log(xhr.responseJSON.detail);
	          }
	        });
	      });
	    },
	    error: function(err) {
	      console.log('error', err);
	    }
	  });
	});
	// End of park create match page
	//////////////////////////////////////////////////////////////////////////////////////
	var feedbackContainer = Backbone.Model.extend({
	  initialize: function() {
	  },
	  defaults: {
	    skill: null,
	    sportsmanship: null,
	    punctuality: null,
	    availability: null
	  },
	  Model: feedbackContainer,
	  url: 'https://skill-match.herokuapp.com/api/feedbacks/create/'
	});
	// End of feedback container
	//////////////////////////////////////////////////////////////////////////////////////
	router.on('route:challenge', function(id) {
	  var Park = Backbone.Model.extend({
	  initialize: function () {
	  },
	  defaults: {
	    id: null,
	    name: null
	  },
	  url: 'https://skill-match.herokuapp.com/api/parks/'
	  });
	  var Parks = Backbone.Collection.extend({
	    model: Park,
	    url: 'https://skill-match.herokuapp.com/api/parks/'
	  });
	  var park = new Parks();
	  park.fetch({
	    success: function(resp) {
	      var html = createMatch({'park': resp.toJSON()[0].results});
	      var challengeMatchTemplate = $("#mainTemplate").text();
	      var challengeMatchHTML = Mustache.render(challengeMatchTemplate, 'park');
	      $("#challenge").html(challengeMatchHTML);
	      $("#container").html(html);
	      console.log("success: ",resp)
	      $("#createMatch").on('click', function(e) {
	        e.preventDefault();
	        challenge = new matchContainer();
	        challenge.set({
	          challenge: id,
	          park: $("#addPark").val(),
	          description: $("#addDescription").val(),
	          sport: $("#addSport").val(),
	          skill_level:$("#addSkill").val(),
	          date: $("#addDate").val(),
	          time: $("#addTime").val(),
	        });
	        challenge.save(null, {
	          url: 'https://skill-match.herokuapp.com/api/matches/challenge/',
	           success: function(resp) {
	            console.log("success", resp);
	            var id = resp.toJSON().id;
	            router.navigate('/match/' + id, {trigger: true});
	          },
	          error: function(err) {
	            console.log("error", err);
	          }
	        });
	        $("#addPark").val("");
	        $("#addDescription").val("");
	        $("#addSport").val("");
	        $("#addSkill").val("");
	        $("#addDate").val("");
	        $("#addTime").val("");
	      });
	    },
	    error: function(err) {
	      console.log("nope")
	    }
	  });
	});

	//////////////////////////////////////////////////////////////////////////////////////
	router.on('route:updatematch', function(id){
	  var matchContainer = Backbone.Model.extend({
	    initialize: function() {
	    },
	    defaults: {
	      park: null,
	      sport: null,
	      skill_level: null,
	      date: null,
	      time: null
	    },
	    Model: matchContainer,
	    url: 'https://skill-match.herokuapp.com/api/matches/' +id +"/"
	  });
	  var Matches = Backbone.Collection.extend({
	    model: matchContainer,
	    url: 'https://skill-match.herokuapp.com/api/matches/' +id +"/"
	  });
	  var matchDetail = new matchContainer(id);
	  matchDetail.fetch({
	    success: function(resp) {
	      var html = updatematch({"data": resp.toJSON()});
	      console.log("success", resp);
	      var updatematchTemplate = $("#updatematchTemplate").text();
	      var updatematchHTML = Mustache.render(updatematchTemplate, 'data');
	      $("#updatematch").html(updatematchHTML);
	      $("#container").html(html);
	      var Park = Backbone.Model.extend({
	        initialize: function () {
	        },
	        defaults: {
	          id: null,
	          name: null
	        },
	        url: 'https://skill-match.herokuapp.com/api/parks/'
	      });
	      var Parks = Backbone.Collection.extend({
	        model: Park,
	        url: 'https://skill-match.herokuapp.com/api/parks/'
	      });
	      $("#updateMatch").on('click', function(e) {
	        e.preventDefault();
	        matchDetail = new matchContainer({id:id});
	        matchDetail.set({
	        park: $("#addPark").val(),
	        description: $("#addDescription").val(),
	        sport: $("#addSport").val(),
	        skill_level:$("#addSkill").val(),
	        date: $("#addDate").val(),
	        time: $("#addTime").val()
	      });
	      matchDetail.save(null, {
	        url: 'https://skill-match.herokuapp.com/api/matches/' +id +"/",
	        success: function(resp) {
	          console.log("success", resp);
	        },
	        error: function(err) {
	          console.log("error", err);
	        }
	      });
	      $("#addPark").val("");
	      $("#addDescription").val("");
	      $("#addSport").val("");
	      $("#addSkill").val("");
	      $("#addDate").val("");
	      $("#addTime").val("");
	      });
	    },
	    error: function(err) {
	      console.log("error", err);
	    }
	  });
	});
	////////////////////////////////////////////////////////////////////////////////
	// This page gives you the ability to leave Feedback on completed matches
	router.on('route:feedback', function(id, username){
	  var html = feedback;
	  $("#container").html(html);
	  $("#submitFeedback").on('click', function() {
	    var html = feedback;
	    feedbackAdd = new feedbackContainer();
	    feedbackAdd.set({
	      match: id,
	      skill: $("#addSkillFeedback").val(),
	      sportsmanship: $("#addFunFeedback").val(),
	      availability: $("#addCrowdFeedback").val(),
	      punctuality: $("#addPunctualityFeedback").val()
	    });
	    feedbackAdd.save(null, {
	      url: 'https://skill-match.herokuapp.com/api/feedbacks/create/',
	      success: function(resp) {
	        console.log("success", resp);
	        router.navigate('/match/' + id, {trigger: true});
	      },
	      error: function(err) {
	        console.log("error", err);
	      }
	    });
	    $("#addSkillFeedback").val("");
	    $("#addFunFeedback").val("");
	    $("#addCrowdFeedback").val("");
	    $("#addPunctualityFeedback").val("");
	  });
	  $('#skillLevel').hover(function(){
	    $('#skillLevelinfo').toggleClass();
	  });
	  $('#Sportsmanship').hover(function(){
	    $('#Sportsmanshipinfo').toggleClass();
	  });
	  $('#crowd').hover(function(){
	    $('#crowdinfo').toggleClass();
	  });
	});

	/////////////////////////////////////////////////////////////////////////////
	// Routes to parks page where we fetch and display parks from Api
	// BackbonePagination is used here to page through all parks in Api
	// We used a counter to along with BackbonePagination get the next page of parks
	router.on('route:parks', function(id, name) {
	  function geoFindMe() {
	    function success(position) {
	      var latitude  = position.coords.latitude;
	      var longitude = position.coords.longitude;
	      console.log('latitude '+latitude);
	      console.log('longitude '+longitude);
	      var nextPages = new Park()
	      nextPages.fetch({
	        url: 'https://skill-match.herokuapp.com/api/parks/?lat='+latitude+'&long='+longitude,
	        success: function(resp) {
	          var html = parks({'data': resp.toJSON().results});
	          var parkTemplate = $("#parkTemplate").text();
	          var parkHTML = Mustache.render(parkTemplate, "data");
	          var next = resp.toJSON().next;
	          var previous = resp.toJSON().previous;
	          $("#parksContainer").html(parkHTML);
	          $("#container").html(html);
	          console.log("success", resp);
	          console.log("success: ",resp)
	          $('#nextPark').on('click', function(){
	            nextPage(next)
	            window.scrollTo(0, 450);
	          });
	          $('#backPark').on('click', function(){
	            prevPage(previous)
	            window.scrollTo(0, 450);
	          });
	          $('#locate').on('click', function(){
	            geoFindMe()
	          });
	          $("#searchPark").on('click', function(e) {
	            e.preventDefault();
	            searchPark();
	          });
	          $(".yelpReview").on('click', function(e) {
	            e.preventDefault();
	            window.open($(this).attr('href'));
	          });
	     },
	     error: function(err) {
	       console.log("nope")
	     }
	    });
	  };
	  function error() {
	  };
	  $('#zipcode').val("Locating…");
	  navigator.geolocation.getCurrentPosition(success, error);
	  }
	  function zipCode(zip) {
	    var nextPages = new Park()
	    nextPages.fetch({
	      url: 'http://skill-match.herokuapp.com/api/parks/?zip='+$('#zipcode').val(),
	      success: function(resp) {
	        var html = parks({'data': resp.toJSON().results});
	        var parkTemplate = $("#parkTemplate").text();
	        var parkHTML = Mustache.render(parkTemplate, "data");
	        var next = resp.toJSON().next;
	        var previous = resp.toJSON().previous;
	        $("#parksContainer").html(parkHTML);
	        $("#container").html(html);
	        console.log("success", resp);
	        console.log("success: ",resp)
	        $('#nextPark').on('click', function(){
	          nextPage(next)
	          window.scrollTo(0, 450);
	        });
	        $('#backPark').on('click', function(){
	          prevPage(previous)
	          window.scrollTo(0, 450);
	        });
	        $('#locate').on('click', function(){
	          geoFindMe()
	        });
	        $("#searchPark").on('click', function(e) {
	          e.preventDefault();
	          searchPark();
	        });
	        $(".yelpReview").on('click', function(e) {
	          e.preventDefault();
	          window.open($(this).attr('href'));
	        });
	      },
	     error: function(err) {
	       console.log("nope")
	     }
	    });
	    $('#zipcode').val("Locating…");
	  }
	  function nextPage(next){
	    var nextPages = new Park()
	    nextPages.fetch({
	      url: next,
	      success: function(resp) {
	      var html = parks({'data': resp.toJSON().results});
	      var parkTemplate = $("#parkTemplate").text();
	      var parkHTML = Mustache.render(parkTemplate, "data");
	      var next = resp.toJSON().next;
	      var previous = resp.toJSON().previous;
	      $("#parksContainer").html(parkHTML);
	      $("#container").html(html);
	      console.log("success", resp);
	      console.log("success: ",resp)
	      $('#nextPark').on('click', function(){
	        nextPage(next)
	        window.scrollTo(0, 450);
	      });
	      $('#backPark').on('click', function(){
	        prevPage(previous)
	        window.scrollTo(0, 450);
	      });
	      $('#locate').on('click', function(){
	      geoFindMe()
	      });
	      $("#searchPark").on('click', function(e) {
	        e.preventDefault();
	        searchPark();
	      });
	      $(".yelpReview").on('click', function(e) {
	        e.preventDefault();
	        window.open($(this).attr('href'));
	      });
	     },
	     error: function(err) {
	       console.log("nope")
	     }
	    });
	  }
	  function prevPage(previous){
	    var prevPages = new Park()
	    prevPages.fetch({
	      url: previous,
	      success: function(resp) {
	        var html = parks({'data': resp.toJSON().results});
	        var parkTemplate = $("#parkTemplate").text();
	        var parkHTML = Mustache.render(parkTemplate, "data");
	        var next = resp.toJSON().next;
	        var previous = resp.toJSON().previous;
	        $("#parksContainer").html(parkHTML);
	        $("#container").html(html);
	        console.log("success", resp);
	        console.log("success: ",resp)
	        $('#nextPark').on('click', function(){
	          nextPage(next)
	          window.scrollTo(0, 450);
	        });
	        $('#backPark').on('click', function(){
	          prevPage(previous)
	          window.scrollTo(0, 450);
	        });
	        $('#locate').on('click', function(){
	          geoFindMe()
	        });
	        $("#searchPark").on('click', function(e) {
	          e.preventDefault();
	          searchPark();
	        });
	        $(".yelpReview").on('click', function(e) {
	          e.preventDefault();
	          window.open($(this).attr('href'));
	        });
	      },
	      error: function(err) {
	        console.log("nope")
	      }
	    });
	  }
	  function searchPark() {
	    var search = new Park()
	    search.fetch({
	      url: "http://skill-match.herokuapp.com/api/parks/?search=" + $("#parkSearch").val(),
	      success: function(resp) {
	        var html = parks({'data': resp.toJSON().results});
	        var parkTemplate = $("#parkTemplate").text();
	        var parkHTML = Mustache.render(parkTemplate, "data");
	        $("#parksContainer").html(parkHTML);
	        $("#container").html(html);
	        console.log("success", resp);
	        $("#searchPark").on('click', function(e) {
	          e.preventDefault();
	          searchPark();
	        });
	        $('#nextPark').on('click', function(){
	          nextPage(next)
	          window.scrollTo(0, 450);
	        });
	        $('#backPark').on('click', function(){
	          prevPage(previous)
	          window.scrollTo(0, 450);
	        });
	        $('#locate').on('click', function(){
	          geoFindMe()
	        });
	        $(".yelpReview").on('click', function(e) {
	          e.preventDefault();
	          window.open($(this).attr('href'));
	        });
	      },
	      error: function(err) {
	        console.log("error", err);
	      }
	    })
	  }
	  $("#searchPark").on('click', function(e) {
	    e.preventDefault();
	    searchPark();
	  });
	  var Park = Backbone.Model.extend({
	    initialize: function () {
	    },
	    defaults: {
	    id: null,
	    name: null
	    },
	    url: 'https://skill-match.herokuapp.com/api/parks/'
	  });
	  var Parks = Backbone.Collection.extend({
	    model: Park,
	    url: 'https://skill-match.herokuapp.com/api/parks/'
	  });
	  var park = new Park();
	  park.fetch ({
	    success: function(resp) {
	      var html = parks({'data': resp.toJSON().results});
	      var parkTemplate = $("#parkTemplate").text();
	      var parkHTML = Mustache.render(parkTemplate, "data");
	      var next = resp.toJSON().next;
	      var previous = resp.toJSON().previous;
	      var zip = $('#zipcode').val();
	      $("#parksContainer").html(parkHTML);
	      $("#container").html(html);
	      console.log("success", resp);
	      $(".yelpReview").on('click', function() {
	        window.open($(this).attr('href'));
	      });
	      $('#nextPark').on('click', function(){
	        nextPage(next)
	        window.scrollTo(0, 450);
	      });
	      $('#backPark').on('click', function(){
	        prevPage(previous)
	        window.scrollTo(0, 450);
	      });
	      $('#locate').on('click', function(){
	        geoFindMe()
	      });
	      $('#zip').on('click', function(e){
	        e.preventDefault();
	        zipCode()
	      });
	      $("#searchPark").on('click', function(e) {
	        e.preventDefault();
	        searchPark();
	      });
	    },
	    error: function(err) {
	      console.log("error", err);
	    }
	  });
	});
	/////////////////////////////////////////////////////////////////////////////
	// This page is a more indepth look at the park you have choosen and we display the parks match history.
	// Soon it will include all a list of sports available at the park.
	router.on('route:parksDetail', function(id, name){
	  var Park = Backbone.Model.extend({
	    initialize: function () {
	    },
	    defaults: {
	    id: null,
	    name: null
	    },
	    url: 'https://skill-match.herokuapp.com/api/parks/'+id+'/'
	  });
	  var Parks = Backbone.Collection.extend({
	    model: Park,
	    url: 'https://skill-match.herokuapp.com/api/parks/'+id+'/'
	  });
	  var park = new Park();
	  park.fetch ({
	    success: function(resp) {
	      var html = parksDetail({'data': resp.toJSON()});
	      var parksDetailTemplate = $("#parksDetailTemplate").text();
	      var parksDetailHTML = Mustache.render(parksDetailTemplate, "data");
	      $("#parksDetail").html(parksDetailHTML);
	      $("#container").html(html);
	      console.log("success", resp);
	      $("#yelpReview").on('click', function() {
	        window.open($("#yelpReview").attr('href'));
	      });
	      $('#createCourt').on('click', function(){
	        $('dialog').toggleClass();
	        var parkCreate = Backbone.Model.extend({
	        initialize: function(){
	        },
	        defaults: {
	          sport: null,
	          other: null,
	          num_courts: null,
	          lat: null,
	          long: null
	        },
	        url: "http://skill-match.herokuapp.com/api/courts/"
	      });
	      function geoFindMe() {
	        function success(position) {
	          var latitude  = position.coords.latitude;
	          var longitude = position.coords.longitude;
	          console.log('latitude '+latitude);
	          console.log('longitude '+longitude);
	          var newPark = new parkCreate();
	          newPark.set ({
	            park: id,
	            sport: $(".addNewParkSport").val(),
	            other: $(".addOtherParkSport").val(),
	            num_courts: $(".addNumCourts").val(),
	            lat: latitude,
	            long: longitude
	          });
	          newPark.save (null, {
	            success: function(resp) {
	              console.log('success', resp);
	              router.navigate("/parks", {trigger:true});
	            },
	            error: function(err) {
	            console.log('error', err);
	            }
	          })
	        }
	        function error(err) {
	          console.log("error", err);
	        }
	        $('.createCourtButton').html('Adding ...');
	        navigator.geolocation.getCurrentPosition(success, error);
	      }
	      $(".createCourtButton").on('click', function() {
	        geoFindMe();
	      });
	      $('.close').on('click', function(){
	        $('dialog').toggleClass();
	        $(".createCourtButton").on('click', function() {
	          geoFindMe();
	        });
	        $('.close').on('click', function(){
	          $('dialog').toggleClass();
	        });
	      });
	      });
	    },
	    error: function(err) {
	      console.log("error", err);
	    }
	  });
	});
	////////////////////////////////////////////////////////////////////////////////
	$('body').on('click', 'a', function (e){
	  e.preventDefault();
	  if (!$(this).hasClass("external")) {
	    var href = $(this).attr('href').substr(1);
	    router.navigate(href, {trigger:true});
	    window.scroll(0, 0);
	  }
	});
	$('body').on('hover', 'span', function (e){
	  e.preventDefault();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {//     Backbone.js 1.2.3

	//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org

	(function(factory) {

	  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
	  // We use `self` instead of `window` for `WebWorker` support.
	  var root = (typeof self == 'object' && self.self == self && self) ||
	            (typeof global == 'object' && global.global == global && global);

	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(37), __webpack_require__(1), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, $, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _, $);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	    var _ = require('underscore'), $;
	    try { $ = require('jquery'); } catch(e) {}
	    factory(root, exports, _, $);

	  // Finally, as a browser global.
	  } else {
	    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	  }

	}(function(root, Backbone, _, $) {

	  // Initial Setup
	  // -------------

	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;

	  // Create a local reference to a common array method we'll want to use later.
	  var slice = Array.prototype.slice;

	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.2.3';

	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $;

	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function() {
	    root.Backbone = previousBackbone;
	    return this;
	  };

	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;

	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... this will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;

	  // Proxy Backbone class methods to Underscore functions, wrapping the model's
	  // `attributes` object or collection's `models` array behind the scenes.
	  //
	  // collection.filter(function(model) { return model.get('age') > 10 });
	  // collection.each(this.addView);
	  //
	  // `Function#apply` can be slow so we use the method's arg count, if we know it.
	  var addMethod = function(length, method, attribute) {
	    switch (length) {
	      case 1: return function() {
	        return _[method](this[attribute]);
	      };
	      case 2: return function(value) {
	        return _[method](this[attribute], value);
	      };
	      case 3: return function(iteratee, context) {
	        return _[method](this[attribute], cb(iteratee, this), context);
	      };
	      case 4: return function(iteratee, defaultVal, context) {
	        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
	      };
	      default: return function() {
	        var args = slice.call(arguments);
	        args.unshift(this[attribute]);
	        return _[method].apply(_, args);
	      };
	    }
	  };
	  var addUnderscoreMethods = function(Class, methods, attribute) {
	    _.each(methods, function(length, method) {
	      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
	    });
	  };

	  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
	  var cb = function(iteratee, instance) {
	    if (_.isFunction(iteratee)) return iteratee;
	    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
	    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
	    return iteratee;
	  };
	  var modelMatcher = function(attrs) {
	    var matcher = _.matches(attrs);
	    return function(model) {
	      return matcher(model.attributes);
	    };
	  };

	  // Backbone.Events
	  // ---------------

	  // A module that can be mixed in to *any object* in order to provide it with
	  // a custom event channel. You may bind a callback to an event with `on` or
	  // remove with `off`; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {};

	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;

	  // Iterates over the standard `event, callback` (as well as the fancy multiple
	  // space-separated events `"change blur", callback` and jQuery-style event
	  // maps `{event: callback}`).
	  var eventsApi = function(iteratee, events, name, callback, opts) {
	    var i = 0, names;
	    if (name && typeof name === 'object') {
	      // Handle event maps.
	      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
	      for (names = _.keys(name); i < names.length ; i++) {
	        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
	      }
	    } else if (name && eventSplitter.test(name)) {
	      // Handle space separated event names by delegating them individually.
	      for (names = name.split(eventSplitter); i < names.length; i++) {
	        events = iteratee(events, names[i], callback, opts);
	      }
	    } else {
	      // Finally, standard events.
	      events = iteratee(events, name, callback, opts);
	    }
	    return events;
	  };

	  // Bind an event to a `callback` function. Passing `"all"` will bind
	  // the callback to all events fired.
	  Events.on = function(name, callback, context) {
	    return internalOn(this, name, callback, context);
	  };

	  // Guard the `listening` argument from the public API.
	  var internalOn = function(obj, name, callback, context, listening) {
	    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
	        context: context,
	        ctx: obj,
	        listening: listening
	    });

	    if (listening) {
	      var listeners = obj._listeners || (obj._listeners = {});
	      listeners[listening.id] = listening;
	    }

	    return obj;
	  };

	  // Inversion-of-control versions of `on`. Tell *this* object to listen to
	  // an event in another object... keeping track of what it's listening to
	  // for easier unbinding later.
	  Events.listenTo =  function(obj, name, callback) {
	    if (!obj) return this;
	    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	    var listeningTo = this._listeningTo || (this._listeningTo = {});
	    var listening = listeningTo[id];

	    // This object is not listening to any other events on `obj` yet.
	    // Setup the necessary references to track the listening callbacks.
	    if (!listening) {
	      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
	      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
	    }

	    // Bind callbacks on obj, and keep track of them on listening.
	    internalOn(obj, name, callback, this, listening);
	    return this;
	  };

	  // The reducing API that adds a callback to the `events` object.
	  var onApi = function(events, name, callback, options) {
	    if (callback) {
	      var handlers = events[name] || (events[name] = []);
	      var context = options.context, ctx = options.ctx, listening = options.listening;
	      if (listening) listening.count++;

	      handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
	    }
	    return events;
	  };

	  // Remove one or many callbacks. If `context` is null, removes all
	  // callbacks with that function. If `callback` is null, removes all
	  // callbacks for the event. If `name` is null, removes all bound
	  // callbacks for all events.
	  Events.off =  function(name, callback, context) {
	    if (!this._events) return this;
	    this._events = eventsApi(offApi, this._events, name, callback, {
	        context: context,
	        listeners: this._listeners
	    });
	    return this;
	  };

	  // Tell this object to stop listening to either specific events ... or
	  // to every object it's currently listening to.
	  Events.stopListening =  function(obj, name, callback) {
	    var listeningTo = this._listeningTo;
	    if (!listeningTo) return this;

	    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

	    for (var i = 0; i < ids.length; i++) {
	      var listening = listeningTo[ids[i]];

	      // If listening doesn't exist, this object is not currently
	      // listening to obj. Break out early.
	      if (!listening) break;

	      listening.obj.off(name, callback, this);
	    }
	    if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

	    return this;
	  };

	  // The reducing API that removes a callback from the `events` object.
	  var offApi = function(events, name, callback, options) {
	    if (!events) return;

	    var i = 0, listening;
	    var context = options.context, listeners = options.listeners;

	    // Delete all events listeners and "drop" events.
	    if (!name && !callback && !context) {
	      var ids = _.keys(listeners);
	      for (; i < ids.length; i++) {
	        listening = listeners[ids[i]];
	        delete listeners[listening.id];
	        delete listening.listeningTo[listening.objId];
	      }
	      return;
	    }

	    var names = name ? [name] : _.keys(events);
	    for (; i < names.length; i++) {
	      name = names[i];
	      var handlers = events[name];

	      // Bail out if there are no events stored.
	      if (!handlers) break;

	      // Replace events if there are any remaining.  Otherwise, clean up.
	      var remaining = [];
	      for (var j = 0; j < handlers.length; j++) {
	        var handler = handlers[j];
	        if (
	          callback && callback !== handler.callback &&
	            callback !== handler.callback._callback ||
	              context && context !== handler.context
	        ) {
	          remaining.push(handler);
	        } else {
	          listening = handler.listening;
	          if (listening && --listening.count === 0) {
	            delete listeners[listening.id];
	            delete listening.listeningTo[listening.objId];
	          }
	        }
	      }

	      // Update tail event if the list has any events.  Otherwise, clean up.
	      if (remaining.length) {
	        events[name] = remaining;
	      } else {
	        delete events[name];
	      }
	    }
	    if (_.size(events)) return events;
	  };

	  // Bind an event to only be triggered a single time. After the first time
	  // the callback is invoked, its listener will be removed. If multiple events
	  // are passed in using the space-separated syntax, the handler will fire
	  // once for each event, not once for a combination of all events.
	  Events.once =  function(name, callback, context) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
	    return this.on(events, void 0, context);
	  };

	  // Inversion-of-control versions of `once`.
	  Events.listenToOnce =  function(obj, name, callback) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
	    return this.listenTo(obj, events);
	  };

	  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
	  // `offer` unbinds the `onceWrapper` after it has been called.
	  var onceMap = function(map, name, callback, offer) {
	    if (callback) {
	      var once = map[name] = _.once(function() {
	        offer(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	    }
	    return map;
	  };

	  // Trigger one or many events, firing all bound callbacks. Callbacks are
	  // passed the same arguments as `trigger` is, apart from the event name
	  // (unless you're listening on `"all"`, which will cause your callback to
	  // receive the true name of the event as the first argument).
	  Events.trigger =  function(name) {
	    if (!this._events) return this;

	    var length = Math.max(0, arguments.length - 1);
	    var args = Array(length);
	    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

	    eventsApi(triggerApi, this._events, name, void 0, args);
	    return this;
	  };

	  // Handles triggering the appropriate event callbacks.
	  var triggerApi = function(objEvents, name, cb, args) {
	    if (objEvents) {
	      var events = objEvents[name];
	      var allEvents = objEvents.all;
	      if (events && allEvents) allEvents = allEvents.slice();
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, [name].concat(args));
	    }
	    return objEvents;
	  };

	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function(events, args) {
	    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	    switch (args.length) {
	      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
	      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
	      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
	      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
	      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
	    }
	  };

	  // Aliases for backwards compatibility.
	  Events.bind   = Events.on;
	  Events.unbind = Events.off;

	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);

	  // Backbone.Model
	  // --------------

	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.

	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function(attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId(this.cidPrefix);
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };

	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {

	    // A hash of attributes whose current and previous value differ.
	    changed: null,

	    // The value returned during the last failed validation.
	    validationError: null,

	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',

	    // The prefix is used to create the client id which is used to identify models locally.
	    // You may want to override this if you're experiencing name clashes with model ids.
	    cidPrefix: 'c',

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Return a copy of the model's `attributes` object.
	    toJSON: function(options) {
	      return _.clone(this.attributes);
	    },

	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Get the value of an attribute.
	    get: function(attr) {
	      return this.attributes[attr];
	    },

	    // Get the HTML-escaped value of an attribute.
	    escape: function(attr) {
	      return _.escape(this.get(attr));
	    },

	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function(attr) {
	      return this.get(attr) != null;
	    },

	    // Special-cased proxy to underscore's `_.matches` method.
	    matches: function(attrs) {
	      return !!_.iteratee(attrs, this)(this.attributes);
	    },

	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function(key, val, options) {
	      if (key == null) return this;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options || (options = {});

	      // Run validation.
	      if (!this._validate(attrs, options)) return false;

	      // Extract attributes and options.
	      var unset      = options.unset;
	      var silent     = options.silent;
	      var changes    = [];
	      var changing   = this._changing;
	      this._changing = true;

	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }

	      var current = this.attributes;
	      var changed = this.changed;
	      var prev    = this._previousAttributes;

	      // For each `set` attribute, update or delete the current value.
	      for (var attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          changed[attr] = val;
	        } else {
	          delete changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }

	      // Update the `id`.
	      this.id = this.get(this.idAttribute);

	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0; i < changes.length; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }

	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },

	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
	    },

	    // Clear all attributes on the model, firing `"change"`.
	    clear: function(options) {
	      var attrs = {};
	      for (var key in this.attributes) attrs[key] = void 0;
	      return this.set(attrs, _.extend({}, options, {unset: true}));
	    },

	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },

	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      var changed = {};
	      for (var attr in diff) {
	        var val = diff[attr];
	        if (_.isEqual(old[attr], val)) continue;
	        changed[attr] = val;
	      }
	      return _.size(changed) ? changed : false;
	    },

	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },

	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function() {
	      return _.clone(this._previousAttributes);
	    },

	    // Fetch the model from the server, merging the response with the model's
	    // local attributes. Any changed attributes will trigger a "change" event.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (!model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function(key, val, options) {
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (key == null || typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options = _.extend({validate: true, parse: true}, options);
	      var wait = options.wait;

	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !wait) {
	        if (!this.set(attrs, options)) return false;
	      } else {
	        if (!this._validate(attrs, options)) return false;
	      }

	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      var model = this;
	      var success = options.success;
	      var attributes = this.attributes;
	      options.success = function(resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
	        if (serverAttrs && !model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);

	      // Set temporary attributes if `{wait: true}` to properly find new ids.
	      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

	      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
	      if (method === 'patch' && !options.attrs) options.attrs = attrs;
	      var xhr = this.sync(method, this, options);

	      // Restore attributes.
	      this.attributes = attributes;

	      return xhr;
	    },

	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;
	      var wait = options.wait;

	      var destroy = function() {
	        model.stopListening();
	        model.trigger('destroy', model, model.collection, options);
	      };

	      options.success = function(resp) {
	        if (wait) destroy();
	        if (success) success.call(options.context, model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };

	      var xhr = false;
	      if (this.isNew()) {
	        _.defer(options.success);
	      } else {
	        wrapError(this, options);
	        xhr = this.sync('delete', this, options);
	      }
	      if (!wait) destroy();
	      return xhr;
	    },

	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function() {
	      var base =
	        _.result(this, 'urlRoot') ||
	        _.result(this.collection, 'url') ||
	        urlError();
	      if (this.isNew()) return base;
	      var id = this.get(this.idAttribute);
	      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
	    },

	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new model with identical attributes to this one.
	    clone: function() {
	      return new this.constructor(this.attributes);
	    },

	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function() {
	      return !this.has(this.idAttribute);
	    },

	    // Check if the model is currently in a valid state.
	    isValid: function(options) {
	      return this._validate({}, _.defaults({validate: true}, options));
	    },

	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
	      return false;
	    }

	  });

	  // Underscore methods that we want to implement on the Model, mapped to the
	  // number of arguments they take.
	  var modelMethods = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
	      omit: 0, chain: 1, isEmpty: 1 };

	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  addUnderscoreMethods(Model, modelMethods, 'attributes');

	  // Backbone.Collection
	  // -------------------

	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analogous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.

	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function(models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({silent: true}, options));
	  };

	  // Default options for `Collection#set`.
	  var setOptions = {add: true, remove: true, merge: true};
	  var addOptions = {add: true, remove: false};

	  // Splices `insert` into `array` at index `at`.
	  var splice = function(array, insert, at) {
	    at = Math.min(Math.max(at, 0), array.length);
	    var tail = Array(array.length - at);
	    var length = insert.length;
	    for (var i = 0; i < tail.length; i++) tail[i] = array[i + at];
	    for (i = 0; i < length; i++) array[i + at] = insert[i];
	    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
	  };

	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {

	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function(options) {
	      return this.map(function(model) { return model.toJSON(options); });
	    },

	    // Proxy `Backbone.sync` by default.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Add a model, or list of models to the set. `models` may be Backbone
	    // Models or raw JavaScript objects to be converted to Models, or any
	    // combination of the two.
	    add: function(models, options) {
	      return this.set(models, _.extend({merge: false}, options, addOptions));
	    },

	    // Remove a model, or a list of models from the set.
	    remove: function(models, options) {
	      options = _.extend({}, options);
	      var singular = !_.isArray(models);
	      models = singular ? [models] : _.clone(models);
	      var removed = this._removeModels(models, options);
	      if (!options.silent && removed) this.trigger('update', this, options);
	      return singular ? removed[0] : removed;
	    },

	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function(models, options) {
	      if (models == null) return;

	      options = _.defaults({}, options, setOptions);
	      if (options.parse && !this._isModel(models)) models = this.parse(models, options);

	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();

	      var at = options.at;
	      if (at != null) at = +at;
	      if (at < 0) at += this.length + 1;

	      var set = [];
	      var toAdd = [];
	      var toRemove = [];
	      var modelMap = {};

	      var add = options.add;
	      var merge = options.merge;
	      var remove = options.remove;

	      var sort = false;
	      var sortable = this.comparator && (at == null) && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      var model;
	      for (var i = 0; i < models.length; i++) {
	        model = models[i];

	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        var existing = this.get(model);
	        if (existing) {
	          if (merge && model !== existing) {
	            var attrs = this._isModel(model) ? model.attributes : model;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
	          }
	          if (!modelMap[existing.cid]) {
	            modelMap[existing.cid] = true;
	            set.push(existing);
	          }
	          models[i] = existing;

	        // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	          model = models[i] = this._prepareModel(model, options);
	          if (model) {
	            toAdd.push(model);
	            this._addReference(model, options);
	            modelMap[model.cid] = true;
	            set.push(model);
	          }
	        }
	      }

	      // Remove stale models.
	      if (remove) {
	        for (i = 0; i < this.length; i++) {
	          model = this.models[i];
	          if (!modelMap[model.cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this._removeModels(toRemove, options);
	      }

	      // See if sorting is needed, update `length` and splice in new models.
	      var orderChanged = false;
	      var replace = !sortable && add && remove;
	      if (set.length && replace) {
	        orderChanged = this.length != set.length || _.some(this.models, function(model, index) {
	          return model !== set[index];
	        });
	        this.models.length = 0;
	        splice(this.models, set, 0);
	        this.length = this.models.length;
	      } else if (toAdd.length) {
	        if (sortable) sort = true;
	        splice(this.models, toAdd, at == null ? this.length : at);
	        this.length = this.models.length;
	      }

	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({silent: true});

	      // Unless silenced, it's time to fire all appropriate add/sort events.
	      if (!options.silent) {
	        for (i = 0; i < toAdd.length; i++) {
	          if (at != null) options.index = at + i;
	          model = toAdd[i];
	          model.trigger('add', model, this, options);
	        }
	        if (sort || orderChanged) this.trigger('sort', this, options);
	        if (toAdd.length || toRemove.length) this.trigger('update', this, options);
	      }

	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },

	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function(models, options) {
	      options = options ? _.clone(options) : {};
	      for (var i = 0; i < this.models.length; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({silent: true}, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },

	    // Add a model to the end of the collection.
	    push: function(model, options) {
	      return this.add(model, _.extend({at: this.length}, options));
	    },

	    // Remove a model from the end of the collection.
	    pop: function(options) {
	      var model = this.at(this.length - 1);
	      return this.remove(model, options);
	    },

	    // Add a model to the beginning of the collection.
	    unshift: function(model, options) {
	      return this.add(model, _.extend({at: 0}, options));
	    },

	    // Remove a model from the beginning of the collection.
	    shift: function(options) {
	      var model = this.at(0);
	      return this.remove(model, options);
	    },

	    // Slice out a sub-array of models from the collection.
	    slice: function() {
	      return slice.apply(this.models, arguments);
	    },

	    // Get a model from the set by id.
	    get: function(obj) {
	      if (obj == null) return void 0;
	      var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
	      return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
	    },

	    // Get the model at the given index.
	    at: function(index) {
	      if (index < 0) index += this.length;
	      return this.models[index];
	    },

	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function(attrs, first) {
	      return this[first ? 'find' : 'filter'](attrs);
	    },

	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function(attrs) {
	      return this.where(attrs, true);
	    },

	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function(options) {
	      var comparator = this.comparator;
	      if (!comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});

	      var length = comparator.length;
	      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

	      // Run sort based on type of `comparator`.
	      if (length === 1 || _.isString(comparator)) {
	        this.models = this.sortBy(comparator);
	      } else {
	        this.models.sort(comparator);
	      }
	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },

	    // Pluck an attribute from each model in the collection.
	    pluck: function(attr) {
	      return _.invoke(this.models, 'get', attr);
	    },

	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var success = options.success;
	      var collection = this;
	      options.success = function(resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success.call(options.context, collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function(model, options) {
	      options = options ? _.clone(options) : {};
	      var wait = options.wait;
	      model = this._prepareModel(model, options);
	      if (!model) return false;
	      if (!wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function(model, resp, callbackOpts) {
	        if (wait) collection.add(model, callbackOpts);
	        if (success) success.call(callbackOpts.context, model, resp, callbackOpts);
	      };
	      model.save(null, options);
	      return model;
	    },

	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new collection with an identical list of models as this one.
	    clone: function() {
	      return new this.constructor(this.models, {
	        model: this.model,
	        comparator: this.comparator
	      });
	    },

	    // Define how to uniquely identify models in the collection.
	    modelId: function (attrs) {
	      return attrs[this.model.prototype.idAttribute || 'id'];
	    },

	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function() {
	      this.length = 0;
	      this.models = [];
	      this._byId  = {};
	    },

	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function(attrs, options) {
	      if (this._isModel(attrs)) {
	        if (!attrs.collection) attrs.collection = this;
	        return attrs;
	      }
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },

	    // Internal method called by both remove and set.
	    _removeModels: function(models, options) {
	      var removed = [];
	      for (var i = 0; i < models.length; i++) {
	        var model = this.get(models[i]);
	        if (!model) continue;

	        var index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;

	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }

	        removed.push(model);
	        this._removeReference(model, options);
	      }
	      return removed.length ? removed : false;
	    },

	    // Method for checking whether an object should be considered a model for
	    // the purposes of adding to the collection.
	    _isModel: function (model) {
	      return model instanceof Model;
	    },

	    // Internal method to create a model's ties to a collection.
	    _addReference: function(model, options) {
	      this._byId[model.cid] = model;
	      var id = this.modelId(model.attributes);
	      if (id != null) this._byId[id] = model;
	      model.on('all', this._onModelEvent, this);
	    },

	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function(model, options) {
	      delete this._byId[model.cid];
	      var id = this.modelId(model.attributes);
	      if (id != null) delete this._byId[id];
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },

	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function(event, model, collection, options) {
	      if ((event === 'add' || event === 'remove') && collection !== this) return;
	      if (event === 'destroy') this.remove(model, options);
	      if (event === 'change') {
	        var prevId = this.modelId(model.previousAttributes());
	        var id = this.modelId(model.attributes);
	        if (prevId !== id) {
	          if (prevId != null) delete this._byId[prevId];
	          if (id != null) this._byId[id] = model;
	        }
	      }
	      this.trigger.apply(this, arguments);
	    }

	  });

	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var collectionMethods = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 4,
	      foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3,
	      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
	      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
	      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
	      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
	      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
	      sortBy: 3, indexBy: 3};

	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  addUnderscoreMethods(Collection, collectionMethods, 'models');

	  // Backbone.View
	  // -------------

	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.

	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function(options) {
	    this.cid = _.uniqueId('view');
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	  // List of view options to be set as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {

	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',

	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function(selector) {
	      return this.$el.find(selector);
	    },

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function() {
	      return this;
	    },

	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function() {
	      this._removeElement();
	      this.stopListening();
	      return this;
	    },

	    // Remove this view's element from the document and all event listeners
	    // attached to it. Exposed for subclasses using an alternative DOM
	    // manipulation API.
	    _removeElement: function() {
	      this.$el.remove();
	    },

	    // Change the view's element (`this.el` property) and re-delegate the
	    // view's events on the new element.
	    setElement: function(element) {
	      this.undelegateEvents();
	      this._setElement(element);
	      this.delegateEvents();
	      return this;
	    },

	    // Creates the `this.el` and `this.$el` references for this view using the
	    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
	    // context or an element. Subclasses can override this to utilize an
	    // alternative DOM manipulation API and are only required to set the
	    // `this.el` property.
	    _setElement: function(el) {
	      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
	      this.el = this.$el[0];
	    },

	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    delegateEvents: function(events) {
	      events || (events = _.result(this, 'events'));
	      if (!events) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[method];
	        if (!method) continue;
	        var match = key.match(delegateEventSplitter);
	        this.delegate(match[1], match[2], _.bind(method, this));
	      }
	      return this;
	    },

	    // Add a single event listener to the view's element (or a child element
	    // using `selector`). This only works for delegate-able events: not `focus`,
	    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
	    delegate: function(eventName, selector, listener) {
	      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Clears all callbacks previously bound to the view by `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function() {
	      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },

	    // A finer-grained `undelegateEvents` for removing a single delegated event.
	    // `selector` and `listener` are both optional.
	    undelegate: function(eventName, selector, listener) {
	      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Produces a DOM element to be assigned to your view. Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _createElement: function(tagName) {
	      return document.createElement(tagName);
	    },

	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        this.setElement(this._createElement(_.result(this, 'tagName')));
	        this._setAttributes(attrs);
	      } else {
	        this.setElement(_.result(this, 'el'));
	      }
	    },

	    // Set attributes from a hash on this view's element.  Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _setAttributes: function(attributes) {
	      this.$el.attr(attributes);
	    }

	  });

	  // Backbone.sync
	  // -------------

	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function(method, model, options) {
	    var type = methodMap[method];

	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });

	    // Default JSON-request options.
	    var params = {type: type, dataType: 'json'};

	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }

	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }

	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? {model: params.data} : {};
	    }

	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function(xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }

	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }

	    // Pass along `textStatus` and `errorThrown` from jQuery.
	    var error = options.error;
	    options.error = function(xhr, textStatus, errorThrown) {
	      options.textStatus = textStatus;
	      options.errorThrown = errorThrown;
	      if (error) error.call(options.context, xhr, textStatus, errorThrown);
	    };

	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };

	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch':  'PATCH',
	    'delete': 'DELETE',
	    'read':   'GET'
	  };

	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function() {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };

	  // Backbone.Router
	  // ---------------

	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function(options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam    = /(\(\?)?:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function(route, name, callback) {
	      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(route, function(fragment) {
	        var args = router._extractParameters(route, fragment);
	        if (router.execute(callback, args, name) !== false) {
	          router.trigger.apply(router, ['route:' + name].concat(args));
	          router.trigger('route', name, args);
	          Backbone.history.trigger('route', router, name, args);
	        }
	      });
	      return this;
	    },

	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function(callback, args, name) {
	      if (callback) callback.apply(this, args);
	    },

	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },

	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route, routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },

	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function(route) {
	      route = route.replace(escapeRegExp, '\\$&')
	                   .replace(optionalParam, '(?:$1)?')
	                   .replace(namedParam, function(match, optional) {
	                     return optional ? match : '([^/?]+)';
	                   })
	                   .replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },

	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function(param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }

	  });

	  // Backbone.History
	  // ----------------

	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function() {
	    this.handlers = [];
	    this.checkUrl = _.bind(this.checkUrl, this);

	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };

	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;

	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;

	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;

	  // Has the history handling already been started?
	  History.started = false;

	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {

	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,

	    // Are we at the app root?
	    atRoot: function() {
	      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
	      return path === this.root && !this.getSearch();
	    },

	    // Does the pathname match the root?
	    matchRoot: function() {
	      var path = this.decodeFragment(this.location.pathname);
	      var root = path.slice(0, this.root.length - 1) + '/';
	      return root === this.root;
	    },

	    // Unicode characters in `location.pathname` are percent encoded so they're
	    // decoded for comparison. `%25` should not be decoded since it may be part
	    // of an encoded parameter.
	    decodeFragment: function(fragment) {
	      return decodeURI(fragment.replace(/%25/g, '%2525'));
	    },

	    // In IE6, the hash fragment and search params are incorrect if the
	    // fragment contains `?`.
	    getSearch: function() {
	      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
	      return match ? match[0] : '';
	    },

	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },

	    // Get the pathname and search params, without the root.
	    getPath: function() {
	      var path = this.decodeFragment(
	        this.location.pathname + this.getSearch()
	      ).slice(this.root.length - 1);
	      return path.charAt(0) === '/' ? path.slice(1) : path;
	    },

	    // Get the cross-browser normalized URL fragment from the path or hash.
	    getFragment: function(fragment) {
	      if (fragment == null) {
	        if (this._usePushState || !this._wantsHashChange) {
	          fragment = this.getPath();
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },

	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function(options) {
	      if (History.started) throw new Error('Backbone.history has already been started');
	      History.started = true;

	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options          = _.extend({root: '/'}, this.options, options);
	      this.root             = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
	      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
	      this._wantsPushState  = !!this.options.pushState;
	      this._hasPushState    = !!(this.history && this.history.pushState);
	      this._usePushState    = this._wantsPushState && this._hasPushState;
	      this.fragment         = this.getFragment();

	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {

	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          var root = this.root.slice(0, -1) || '/';
	          this.location.replace(root + '#' + this.getPath());
	          // Return immediately as browser will do redirect to new url
	          return true;

	        // Or if we've started out with a hash-based route, but we're currently
	        // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot()) {
	          this.navigate(this.getHash(), {replace: true});
	        }

	      }

	      // Proxy an iframe to handle location events if the browser doesn't
	      // support the `hashchange` event, HTML5 history, or the user wants
	      // `hashChange` but not `pushState`.
	      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
	        this.iframe = document.createElement('iframe');
	        this.iframe.src = 'javascript:0';
	        this.iframe.style.display = 'none';
	        this.iframe.tabIndex = -1;
	        var body = document.body;
	        // Using `appendChild` will throw on IE < 9 if the document is not ready.
	        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
	        iWindow.document.open();
	        iWindow.document.close();
	        iWindow.location.hash = '#' + this.fragment;
	      }

	      // Add a cross-platform `addEventListener` shim for older browsers.
	      var addEventListener = window.addEventListener || function (eventName, listener) {
	        return attachEvent('on' + eventName, listener);
	      };

	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._usePushState) {
	        addEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        addEventListener('hashchange', this.checkUrl, false);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }

	      if (!this.options.silent) return this.loadUrl();
	    },

	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function() {
	      // Add a cross-platform `removeEventListener` shim for older browsers.
	      var removeEventListener = window.removeEventListener || function (eventName, listener) {
	        return detachEvent('on' + eventName, listener);
	      };

	      // Remove window listeners.
	      if (this._usePushState) {
	        removeEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        removeEventListener('hashchange', this.checkUrl, false);
	      }

	      // Clean up the iframe if necessary.
	      if (this.iframe) {
	        document.body.removeChild(this.iframe);
	        this.iframe = null;
	      }

	      // Some environments will throw when clearing an undefined interval.
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },

	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function(route, callback) {
	      this.handlers.unshift({route: route, callback: callback});
	    },

	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function(e) {
	      var current = this.getFragment();

	      // If the user pressed the back button, the iframe's hash will have
	      // changed and we should use that for comparison.
	      if (current === this.fragment && this.iframe) {
	        current = this.getHash(this.iframe.contentWindow);
	      }

	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },

	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function(fragment) {
	      // If the root doesn't match, no routes can match either.
	      if (!this.matchRoot()) return false;
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.some(this.handlers, function(handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },

	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = {trigger: !!options};

	      // Normalize the fragment.
	      fragment = this.getFragment(fragment || '');

	      // Don't include a trailing slash on the root.
	      var root = this.root;
	      if (fragment === '' || fragment.charAt(0) === '?') {
	        root = root.slice(0, -1) || '/';
	      }
	      var url = root + fragment;

	      // Strip the hash and decode for matching.
	      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

	      if (this.fragment === fragment) return;
	      this.fragment = fragment;

	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._usePushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this._updateHash(this.location, fragment, options.replace);
	        if (this.iframe && (fragment !== this.getHash(this.iframe.contentWindow))) {
	          var iWindow = this.iframe.contentWindow;

	          // Opening and closing the iframe tricks IE7 and earlier to push a
	          // history entry on hash-tag change.  When replace is true, we don't
	          // want this.
	          if (!options.replace) {
	            iWindow.document.open();
	            iWindow.document.close();
	          }

	          this._updateHash(iWindow.location, fragment, options.replace);
	        }

	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	      } else {
	        return this.location.assign(url);
	      }
	      if (options.trigger) return this.loadUrl(fragment);
	    },

	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }

	  });

	  // Create the default Backbone.history.
	  Backbone.history = new History;

	  // Helpers
	  // -------

	  // Helper function to correctly set up the prototype chain for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function(protoProps, staticProps) {
	    var parent = this;
	    var child;

	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function(){ return parent.apply(this, arguments); };
	    }

	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);

	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent` constructor function.
	    var Surrogate = function(){ this.constructor = child; };
	    Surrogate.prototype = parent.prototype;
	    child.prototype = new Surrogate;

	    // Add prototype properties (instance properties) to the subclass,
	    // if supplied.
	    if (protoProps) _.extend(child.prototype, protoProps);

	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;

	    return child;
	  };

	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function() {
	    throw new Error('A "url" property or function must be specified');
	  };

	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function(model, options) {
	    var error = options.error;
	    options.error = function(resp) {
	      if (error) error.call(options.context, model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };

	  return Backbone;

	}));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */

	/*global define: false Mustache: true*/

	(function defineMustache (global, factory) {
	  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
	    factory(exports); // CommonJS
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	  } else {
	    global.Mustache = {};
	    factory(global.Mustache); // script, wsh, asp
	  }
	}(this, function mustacheFactory (mustache) {

	  var objectToString = Object.prototype.toString;
	  var isArray = Array.isArray || function isArrayPolyfill (object) {
	    return objectToString.call(object) === '[object Array]';
	  };

	  function isFunction (object) {
	    return typeof object === 'function';
	  }

	  /**
	   * More correct typeof string handling array
	   * which normally returns typeof 'object'
	   */
	  function typeStr (obj) {
	    return isArray(obj) ? 'array' : typeof obj;
	  }

	  function escapeRegExp (string) {
	    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
	  }

	  /**
	   * Null safe way of checking whether or not an object,
	   * including its prototype, has a given property
	   */
	  function hasProperty (obj, propName) {
	    return obj != null && typeof obj === 'object' && (propName in obj);
	  }

	  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
	  // See https://github.com/janl/mustache.js/issues/189
	  var regExpTest = RegExp.prototype.test;
	  function testRegExp (re, string) {
	    return regExpTest.call(re, string);
	  }

	  var nonSpaceRe = /\S/;
	  function isWhitespace (string) {
	    return !testRegExp(nonSpaceRe, string);
	  }

	  var entityMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '/': '&#x2F;',
	    '`': '&#x60;',
	    '=': '&#x3D;'
	  };

	  function escapeHtml (string) {
	    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
	      return entityMap[s];
	    });
	  }

	  var whiteRe = /\s*/;
	  var spaceRe = /\s+/;
	  var equalsRe = /\s*=/;
	  var curlyRe = /\s*\}/;
	  var tagRe = /#|\^|\/|>|\{|&|=|!/;

	  /**
	   * Breaks up the given `template` string into a tree of tokens. If the `tags`
	   * argument is given here it must be an array with two string values: the
	   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
	   * course, the default is to use mustaches (i.e. mustache.tags).
	   *
	   * A token is an array with at least 4 elements. The first element is the
	   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
	   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
	   * all text that appears outside a symbol this element is "text".
	   *
	   * The second element of a token is its "value". For mustache tags this is
	   * whatever else was inside the tag besides the opening symbol. For text tokens
	   * this is the text itself.
	   *
	   * The third and fourth elements of the token are the start and end indices,
	   * respectively, of the token in the original template.
	   *
	   * Tokens that are the root node of a subtree contain two more elements: 1) an
	   * array of tokens in the subtree and 2) the index in the original template at
	   * which the closing tag for that section begins.
	   */
	  function parseTemplate (template, tags) {
	    if (!template)
	      return [];

	    var sections = [];     // Stack to hold section tokens
	    var tokens = [];       // Buffer to hold the tokens
	    var spaces = [];       // Indices of whitespace tokens on the current line
	    var hasTag = false;    // Is there a {{tag}} on the current line?
	    var nonSpace = false;  // Is there a non-space char on the current line?

	    // Strips all whitespace tokens array for the current line
	    // if there was a {{#tag}} on it and otherwise only space.
	    function stripSpace () {
	      if (hasTag && !nonSpace) {
	        while (spaces.length)
	          delete tokens[spaces.pop()];
	      } else {
	        spaces = [];
	      }

	      hasTag = false;
	      nonSpace = false;
	    }

	    var openingTagRe, closingTagRe, closingCurlyRe;
	    function compileTags (tagsToCompile) {
	      if (typeof tagsToCompile === 'string')
	        tagsToCompile = tagsToCompile.split(spaceRe, 2);

	      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
	        throw new Error('Invalid tags: ' + tagsToCompile);

	      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
	      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
	      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
	    }

	    compileTags(tags || mustache.tags);

	    var scanner = new Scanner(template);

	    var start, type, value, chr, token, openSection;
	    while (!scanner.eos()) {
	      start = scanner.pos;

	      // Match any text between tags.
	      value = scanner.scanUntil(openingTagRe);

	      if (value) {
	        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
	          chr = value.charAt(i);

	          if (isWhitespace(chr)) {
	            spaces.push(tokens.length);
	          } else {
	            nonSpace = true;
	          }

	          tokens.push([ 'text', chr, start, start + 1 ]);
	          start += 1;

	          // Check for whitespace on the current line.
	          if (chr === '\n')
	            stripSpace();
	        }
	      }

	      // Match the opening tag.
	      if (!scanner.scan(openingTagRe))
	        break;

	      hasTag = true;

	      // Get the tag type.
	      type = scanner.scan(tagRe) || 'name';
	      scanner.scan(whiteRe);

	      // Get the tag value.
	      if (type === '=') {
	        value = scanner.scanUntil(equalsRe);
	        scanner.scan(equalsRe);
	        scanner.scanUntil(closingTagRe);
	      } else if (type === '{') {
	        value = scanner.scanUntil(closingCurlyRe);
	        scanner.scan(curlyRe);
	        scanner.scanUntil(closingTagRe);
	        type = '&';
	      } else {
	        value = scanner.scanUntil(closingTagRe);
	      }

	      // Match the closing tag.
	      if (!scanner.scan(closingTagRe))
	        throw new Error('Unclosed tag at ' + scanner.pos);

	      token = [ type, value, start, scanner.pos ];
	      tokens.push(token);

	      if (type === '#' || type === '^') {
	        sections.push(token);
	      } else if (type === '/') {
	        // Check section nesting.
	        openSection = sections.pop();

	        if (!openSection)
	          throw new Error('Unopened section "' + value + '" at ' + start);

	        if (openSection[1] !== value)
	          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
	      } else if (type === 'name' || type === '{' || type === '&') {
	        nonSpace = true;
	      } else if (type === '=') {
	        // Set the tags for the next time around.
	        compileTags(value);
	      }
	    }

	    // Make sure there are no open sections when we're done.
	    openSection = sections.pop();

	    if (openSection)
	      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

	    return nestTokens(squashTokens(tokens));
	  }

	  /**
	   * Combines the values of consecutive text tokens in the given `tokens` array
	   * to a single token.
	   */
	  function squashTokens (tokens) {
	    var squashedTokens = [];

	    var token, lastToken;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      if (token) {
	        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
	          lastToken[1] += token[1];
	          lastToken[3] = token[3];
	        } else {
	          squashedTokens.push(token);
	          lastToken = token;
	        }
	      }
	    }

	    return squashedTokens;
	  }

	  /**
	   * Forms the given array of `tokens` into a nested tree structure where
	   * tokens that represent a section have two additional items: 1) an array of
	   * all tokens that appear in that section and 2) the index in the original
	   * template that represents the end of that section.
	   */
	  function nestTokens (tokens) {
	    var nestedTokens = [];
	    var collector = nestedTokens;
	    var sections = [];

	    var token, section;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      switch (token[0]) {
	        case '#':
	        case '^':
	          collector.push(token);
	          sections.push(token);
	          collector = token[4] = [];
	          break;
	        case '/':
	          section = sections.pop();
	          section[5] = token[2];
	          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
	          break;
	        default:
	          collector.push(token);
	      }
	    }

	    return nestedTokens;
	  }

	  /**
	   * A simple string scanner that is used by the template parser to find
	   * tokens in template strings.
	   */
	  function Scanner (string) {
	    this.string = string;
	    this.tail = string;
	    this.pos = 0;
	  }

	  /**
	   * Returns `true` if the tail is empty (end of string).
	   */
	  Scanner.prototype.eos = function eos () {
	    return this.tail === '';
	  };

	  /**
	   * Tries to match the given regular expression at the current position.
	   * Returns the matched text if it can match, the empty string otherwise.
	   */
	  Scanner.prototype.scan = function scan (re) {
	    var match = this.tail.match(re);

	    if (!match || match.index !== 0)
	      return '';

	    var string = match[0];

	    this.tail = this.tail.substring(string.length);
	    this.pos += string.length;

	    return string;
	  };

	  /**
	   * Skips all text until the given regular expression can be matched. Returns
	   * the skipped string, which is the entire tail if no match can be made.
	   */
	  Scanner.prototype.scanUntil = function scanUntil (re) {
	    var index = this.tail.search(re), match;

	    switch (index) {
	      case -1:
	        match = this.tail;
	        this.tail = '';
	        break;
	      case 0:
	        match = '';
	        break;
	      default:
	        match = this.tail.substring(0, index);
	        this.tail = this.tail.substring(index);
	    }

	    this.pos += match.length;

	    return match;
	  };

	  /**
	   * Represents a rendering context by wrapping a view object and
	   * maintaining a reference to the parent context.
	   */
	  function Context (view, parentContext) {
	    this.view = view;
	    this.cache = { '.': this.view };
	    this.parent = parentContext;
	  }

	  /**
	   * Creates a new context using the given view with this context
	   * as the parent.
	   */
	  Context.prototype.push = function push (view) {
	    return new Context(view, this);
	  };

	  /**
	   * Returns the value of the given name in this context, traversing
	   * up the context hierarchy if the value is absent in this context's view.
	   */
	  Context.prototype.lookup = function lookup (name) {
	    var cache = this.cache;

	    var value;
	    if (cache.hasOwnProperty(name)) {
	      value = cache[name];
	    } else {
	      var context = this, names, index, lookupHit = false;

	      while (context) {
	        if (name.indexOf('.') > 0) {
	          value = context.view;
	          names = name.split('.');
	          index = 0;

	          /**
	           * Using the dot notion path in `name`, we descend through the
	           * nested objects.
	           *
	           * To be certain that the lookup has been successful, we have to
	           * check if the last object in the path actually has the property
	           * we are looking for. We store the result in `lookupHit`.
	           *
	           * This is specially necessary for when the value has been set to
	           * `undefined` and we want to avoid looking up parent contexts.
	           **/
	          while (value != null && index < names.length) {
	            if (index === names.length - 1)
	              lookupHit = hasProperty(value, names[index]);

	            value = value[names[index++]];
	          }
	        } else {
	          value = context.view[name];
	          lookupHit = hasProperty(context.view, name);
	        }

	        if (lookupHit)
	          break;

	        context = context.parent;
	      }

	      cache[name] = value;
	    }

	    if (isFunction(value))
	      value = value.call(this.view);

	    return value;
	  };

	  /**
	   * A Writer knows how to take a stream of tokens and render them to a
	   * string, given a context. It also maintains a cache of templates to
	   * avoid the need to parse the same template twice.
	   */
	  function Writer () {
	    this.cache = {};
	  }

	  /**
	   * Clears all cached templates in this writer.
	   */
	  Writer.prototype.clearCache = function clearCache () {
	    this.cache = {};
	  };

	  /**
	   * Parses and caches the given `template` and returns the array of tokens
	   * that is generated from the parse.
	   */
	  Writer.prototype.parse = function parse (template, tags) {
	    var cache = this.cache;
	    var tokens = cache[template];

	    if (tokens == null)
	      tokens = cache[template] = parseTemplate(template, tags);

	    return tokens;
	  };

	  /**
	   * High-level method that is used to render the given `template` with
	   * the given `view`.
	   *
	   * The optional `partials` argument may be an object that contains the
	   * names and templates of partials that are used in the template. It may
	   * also be a function that is used to load partial templates on the fly
	   * that takes a single argument: the name of the partial.
	   */
	  Writer.prototype.render = function render (template, view, partials) {
	    var tokens = this.parse(template);
	    var context = (view instanceof Context) ? view : new Context(view);
	    return this.renderTokens(tokens, context, partials, template);
	  };

	  /**
	   * Low-level method that renders the given array of `tokens` using
	   * the given `context` and `partials`.
	   *
	   * Note: The `originalTemplate` is only ever used to extract the portion
	   * of the original template that was contained in a higher-order section.
	   * If the template doesn't use higher-order sections, this argument may
	   * be omitted.
	   */
	  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
	    var buffer = '';

	    var token, symbol, value;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      value = undefined;
	      token = tokens[i];
	      symbol = token[0];

	      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
	      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
	      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
	      else if (symbol === '&') value = this.unescapedValue(token, context);
	      else if (symbol === 'name') value = this.escapedValue(token, context);
	      else if (symbol === 'text') value = this.rawValue(token);

	      if (value !== undefined)
	        buffer += value;
	    }

	    return buffer;
	  };

	  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
	    var self = this;
	    var buffer = '';
	    var value = context.lookup(token[1]);

	    // This function is used to render an arbitrary template
	    // in the current context by higher-order sections.
	    function subRender (template) {
	      return self.render(template, context, partials);
	    }

	    if (!value) return;

	    if (isArray(value)) {
	      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
	        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
	      }
	    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
	      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
	    } else if (isFunction(value)) {
	      if (typeof originalTemplate !== 'string')
	        throw new Error('Cannot use higher-order sections without the original template');

	      // Extract the portion of the original template that the section contains.
	      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

	      if (value != null)
	        buffer += value;
	    } else {
	      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
	    }
	    return buffer;
	  };

	  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
	    var value = context.lookup(token[1]);

	    // Use JavaScript's definition of falsy. Include empty arrays.
	    // See https://github.com/janl/mustache.js/issues/186
	    if (!value || (isArray(value) && value.length === 0))
	      return this.renderTokens(token[4], context, partials, originalTemplate);
	  };

	  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
	    if (!partials) return;

	    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
	    if (value != null)
	      return this.renderTokens(this.parse(value), context, partials, value);
	  };

	  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return value;
	  };

	  Writer.prototype.escapedValue = function escapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return mustache.escape(value);
	  };

	  Writer.prototype.rawValue = function rawValue (token) {
	    return token[1];
	  };

	  mustache.name = 'mustache.js';
	  mustache.version = '2.2.1';
	  mustache.tags = [ '{{', '}}' ];

	  // All high-level mustache.* functions use this writer.
	  var defaultWriter = new Writer();

	  /**
	   * Clears all cached templates in the default writer.
	   */
	  mustache.clearCache = function clearCache () {
	    return defaultWriter.clearCache();
	  };

	  /**
	   * Parses and caches the given template in the default writer and returns the
	   * array of tokens it contains. Doing this ahead of time avoids the need to
	   * parse templates on the fly as they are rendered.
	   */
	  mustache.parse = function parse (template, tags) {
	    return defaultWriter.parse(template, tags);
	  };

	  /**
	   * Renders the `template` with the given `view` and `partials` using the
	   * default writer.
	   */
	  mustache.render = function render (template, view, partials) {
	    if (typeof template !== 'string') {
	      throw new TypeError('Invalid template! Template should be a "string" ' +
	                          'but "' + typeStr(template) + '" was given as the first ' +
	                          'argument for mustache#render(template, view, partials)');
	    }

	    return defaultWriter.render(template, view, partials);
	  };

	  // This is here for backwards compatibility with 0.4.x.,
	  /*eslint-disable */ // eslint wants camel cased function name
	  mustache.to_html = function to_html (template, view, partials, send) {
	    /*eslint-enable*/

	    var result = mustache.render(template, view, partials);

	    if (isFunction(send)) {
	      send(result);
	    } else {
	      return result;
	    }
	  };

	  // Export the escaping function so that the user may override it.
	  // See https://github.com/janl/mustache.js/issues/244
	  mustache.escape = escapeHtml;

	  // Export these mainly for testing, but also for advanced usage.
	  mustache.Scanner = Scanner;
	  mustache.Context = Context;
	  mustache.Writer = Writer;

	}));


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  backbone.paginator
	  http://github.com/backbone-paginator/backbone.paginator

	  Copyright (c) 2016 Jimmy Yuen Ho Wong and contributors
	  Licensed under the MIT @license.
	*/

	(function (factory) {

	  // CommonJS
	  if (true) {
	    module.exports = factory(__webpack_require__(37), __webpack_require__(36));
	  }
	  // AMD
	  else if (typeof define == "function" && define.amd) {
	    define(["underscore", "backbone"], factory);
	  }
	  // Browser
	  else if (typeof _ !== "undefined" && typeof Backbone !== "undefined") {
	    var oldPageableCollection = Backbone.PageableCollection;
	    var PageableCollection = factory(_, Backbone);

	    /**
	       __BROWSER ONLY__

	       If you already have an object named `PageableCollection` attached to the
	       `Backbone` module, you can use this to return a local reference to this
	       Backbone.PageableCollection class and reset the name
	       Backbone.PageableCollection to its previous definition.

	           // The left hand side gives you a reference to this
	           // Backbone.PageableCollection implementation, the right hand side
	           // resets Backbone.PageableCollection to your other
	           // Backbone.PageableCollection.
	           var PageableCollection = Backbone.PageableCollection.noConflict();

	       @static
	       @member Backbone.PageableCollection
	       @return {Backbone.PageableCollection}
	    */
	    Backbone.PageableCollection.noConflict = function () {
	      Backbone.PageableCollection = oldPageableCollection;
	      return PageableCollection;
	    };
	  }

	}(function (_, Backbone) {

	  "use strict";

	  var _extend = _.extend;
	  var _omit = _.omit;
	  var _clone = _.clone;
	  var _each = _.each;
	  var _pick = _.pick;
	  var _contains = _.contains;
	  var _isEmpty = _.isEmpty;
	  var _pairs = _.pairs;
	  var _invert = _.invert;
	  var _isArray = _.isArray;
	  var _isFunction = _.isFunction;
	  var _isObject = _.isObject;
	  var _keys = _.keys;
	  var _isUndefined = _.isUndefined;
	  var ceil = Math.ceil;
	  var floor = Math.floor;
	  var max = Math.max;

	  var BBColProto = Backbone.Collection.prototype;

	  function finiteInt (val, name) {
	    if (!_.isNumber(val) || _.isNaN(val) || !_.isFinite(val) || ~~val !== val) {
	      throw new TypeError("`" + name + "` must be a finite integer");
	    }
	    return val;
	  }

	  function queryStringToParams (qs) {
	    var kvp, k, v, ls, params = {}, decode = decodeURIComponent;
	    var kvps = qs.split('&');
	    for (var i = 0, l = kvps.length; i < l; i++) {
	      var param = kvps[i];
	      kvp = param.split('='), k = kvp[0], v = kvp[1];
	      if (v == null) v = true;
	      k = decode(k), v = decode(v), ls = params[k];
	      if (_isArray(ls)) ls.push(v);
	      else if (ls) params[k] = [ls, v];
	      else params[k] = v;
	    }
	    return params;
	  }

	  // hack to make sure the whatever event handlers for this event is run
	  // before func is, and the event handlers that func will trigger.
	  function runOnceAtLastHandler (col, event, func) {
	    var eventHandlers = col._events[event];
	    if (eventHandlers && eventHandlers.length) {
	      var lastHandler = eventHandlers[eventHandlers.length - 1];
	      var oldCallback = lastHandler.callback;
	      lastHandler.callback = function () {
	        try {
	          oldCallback.apply(this, arguments);
	          func();
	        }
	        catch (e) {
	          throw e;
	        }
	        finally {
	          lastHandler.callback = oldCallback;
	        }
	      };
	    }
	    else func();
	  }

	  var PARAM_TRIM_RE = /[\s'"]/g;
	  var URL_TRIM_RE = /[<>\s'"]/g;

	  /**
	     Drop-in replacement for Backbone.Collection. Supports server-side and
	     client-side pagination and sorting. Client-side mode also support fully
	     multi-directional synchronization of changes between pages.

	     @class Backbone.PageableCollection
	     @extends Backbone.Collection
	  */
	  var PageableCollection = Backbone.PageableCollection = Backbone.Collection.extend({

	    /**
	       The container object to store all pagination states.

	       You can override the default state by extending this class or specifying
	       them in an `options` hash to the constructor.

	       @property {Object} state

	       @property {0|1} [state.firstPage=1] The first page index. Set to 0 if
	       your server API uses 0-based indices. You should only override this value
	       during extension, initialization or reset by the server after
	       fetching. This value should be read only at other times.

	       @property {number} [state.lastPage=null] The last page index. This value
	       is __read only__ and it's calculated based on whether `firstPage` is 0 or
	       1, during bootstrapping, fetching and resetting. Please don't change this
	       value under any circumstances.

	       @property {number} [state.currentPage=null] The current page index. You
	       should only override this value during extension, initialization or reset
	       by the server after fetching. This value should be read only at other
	       times. Can be a 0-based or 1-based index, depending on whether
	       `firstPage` is 0 or 1. If left as default, it will be set to `firstPage`
	       on initialization.

	       @property {number} [state.pageSize=25] How many records to show per
	       page. This value is __read only__ after initialization, if you want to
	       change the page size after initialization, you must call #setPageSize.

	       @property {number} [state.totalPages=null] How many pages there are. This
	       value is __read only__ and it is calculated from `totalRecords`.

	       @property {number} [state.totalRecords=null] How many records there
	       are. This value is __required__ under server mode. This value is optional
	       for client mode as the number will be the same as the number of models
	       during bootstrapping and during fetching, either supplied by the server
	       in the metadata, or calculated from the size of the response.

	       @property {string} [state.sortKey=null] The model attribute to use for
	       sorting.

	       @property {-1|0|1} [state.order=-1] The order to use for sorting. Specify
	       -1 for ascending order or 1 for descending order. If 0, no client side
	       sorting will be done and the order query parameter will not be sent to
	       the server during a fetch.
	    */
	    state: {
	      firstPage: 1,
	      lastPage: null,
	      currentPage: null,
	      pageSize: 25,
	      totalPages: null,
	      totalRecords: null,
	      sortKey: null,
	      order: -1
	    },

	    /**
	       @property {"server"|"client"|"infinite"} [mode="server"] The mode of
	       operations for this collection. `"server"` paginates on the server-side,
	       `"client"` paginates on the client-side and `"infinite"` paginates on the
	       server-side for APIs that do not support `totalRecords`.
	    */
	    mode: "server",

	    /**
	       A translation map to convert Backbone.PageableCollection state attributes
	       to the query parameters accepted by your server API.

	       You can override the default state by extending this class or specifying
	       them in `options.queryParams` object hash to the constructor.

	       @property {Object} queryParams
	       @property {string} [queryParams.currentPage="page"]
	       @property {string} [queryParams.pageSize="per_page"]
	       @property {string} [queryParams.totalPages="total_pages"]
	       @property {string} [queryParams.totalRecords="total_entries"]
	       @property {string} [queryParams.sortKey="sort_by"]
	       @property {string} [queryParams.order="order"]
	       @property {string} [queryParams.directions={"-1": "asc", "1": "desc"}] A
	       map for translating a Backbone.PageableCollection#state.order constant to
	       the ones your server API accepts.
	    */
	    queryParams: {
	      currentPage: "page",
	      pageSize: "per_page",
	      totalPages: "total_pages",
	      totalRecords: "total_entries",
	      sortKey: "sort_by",
	      order: "order",
	      directions: {
	        "-1": "asc",
	        "1": "desc"
	      }
	    },

	    /**
	       __CLIENT MODE ONLY__

	       This collection is the internal storage for the bootstrapped or fetched
	       models. You can use this if you want to operate on all the pages.

	       @property {Backbone.Collection} fullCollection
	    */

	    /**
	       Given a list of models or model attributues, bootstraps the full
	       collection in client mode or infinite mode, or just the page you want in
	       server mode.

	       If you want to initialize a collection to a different state than the
	       default, you can specify them in `options.state`. Any state parameters
	       supplied will be merged with the default. If you want to change the
	       default mapping from #state keys to your server API's query parameter
	       names, you can specifiy an object hash in `option.queryParams`. Likewise,
	       any mapping provided will be merged with the default. Lastly, all
	       Backbone.Collection constructor options are also accepted.

	       See:

	       - Backbone.PageableCollection#state
	       - Backbone.PageableCollection#queryParams
	       - [Backbone.Collection#initialize](http://backbonejs.org/#Collection-constructor)

	       @param {Array.<Object>} [models]

	       @param {Object} [options]

	       @param {function(*, *): number} [options.comparator] If specified, this
	       comparator is set to the current page under server mode, or the #fullCollection
	       otherwise.

	       @param {boolean} [options.full] If `false` and either a
	       `options.comparator` or `sortKey` is defined, the comparator is attached
	       to the current page. Default is `true` under client or infinite mode and
	       the comparator will be attached to the #fullCollection.

	       @param {Object} [options.state] The state attributes overriding the defaults.

	       @param {string} [options.state.sortKey] The model attribute to use for
	       sorting. If specified instead of `options.comparator`, a comparator will
	       be automatically created using this value, and optionally a sorting order
	       specified in `options.state.order`. The comparator is then attached to
	       the new collection instance.

	       @param {-1|1} [options.state.order] The order to use for sorting. Specify
	       -1 for ascending order and 1 for descending order.

	       @param {Object} [options.queryParam]
	    */
	    constructor: function (models, options) {

	      BBColProto.constructor.apply(this, arguments);

	      options = options || {};

	      var mode = this.mode = options.mode || this.mode || PageableProto.mode;

	      var queryParams = _extend({}, PageableProto.queryParams, this.queryParams,
	                                options.queryParams || {});

	      queryParams.directions = _extend({},
	                                       PageableProto.queryParams.directions,
	                                       this.queryParams.directions,
	                                       queryParams.directions || {});

	      this.queryParams = queryParams;

	      var state = this.state = _extend({}, PageableProto.state, this.state,
	                                       options.state || {});

	      state.currentPage = state.currentPage == null ?
	        state.firstPage :
	        state.currentPage;

	      if (!_isArray(models)) models = models ? [models] : [];
	      models = models.slice();

	      if (mode != "server" && state.totalRecords == null && !_isEmpty(models)) {
	        state.totalRecords = models.length;
	      }

	      this.switchMode(mode, _extend({fetch: false,
	                                     resetState: false,
	                                     models: models}, options));

	      var comparator = options.comparator;

	      if (state.sortKey && !comparator) {
	        this.setSorting(state.sortKey, state.order, options);
	      }

	      if (mode != "server") {
	        var fullCollection = this.fullCollection;

	        if (comparator && options.full) {
	          this.comparator = null;
	          fullCollection.comparator = comparator;
	        }

	        if (options.full) fullCollection.sort();

	        // make sure the models in the current page and full collection have the
	        // same references
	        if (models && !_isEmpty(models)) {
	          this.reset(models, _extend({silent: true}, options));
	          this.getPage(state.currentPage);
	          models.splice.apply(models, [0, models.length].concat(this.models));
	        }
	      }

	      this._initState = _clone(this.state);
	    },

	    /**
	       Makes a Backbone.Collection that contains all the pages.

	       @private
	       @param {Array.<Object|Backbone.Model>} models
	       @param {Object} options Options for Backbone.Collection constructor.
	       @return {Backbone.Collection}
	    */
	    _makeFullCollection: function (models, options) {

	      var properties = ["url", "model", "sync", "comparator"];
	      var thisProto = this.constructor.prototype;
	      var i, length, prop;

	      var proto = {};
	      for (i = 0, length = properties.length; i < length; i++) {
	        prop = properties[i];
	        if (!_isUndefined(thisProto[prop])) {
	          proto[prop] = thisProto[prop];
	        }
	      }

	      var fullCollection = new (Backbone.Collection.extend(proto))(models, options);

	      for (i = 0, length = properties.length; i < length; i++) {
	        prop = properties[i];
	        if (this[prop] !== thisProto[prop]) {
	          fullCollection[prop] = this[prop];
	        }
	      }

	      return fullCollection;
	    },

	    /**
	       Factory method that returns a Backbone event handler that responses to
	       the `add`, `remove`, `reset`, and the `sort` events. The returned event
	       handler will synchronize the current page collection and the full
	       collection's models.

	       @private

	       @param {Backbone.PageableCollection} pageCol
	       @param {Backbone.Collection} fullCol

	       @return {function(string, Backbone.Model, Backbone.Collection, Object)}
	       Collection event handler
	    */
	    _makeCollectionEventHandler: function (pageCol, fullCol) {

	      return function collectionEventHandler (event, model, collection, options) {

	        var handlers = pageCol._handlers;
	        _each(_keys(handlers), function (event) {
	          var handler = handlers[event];
	          pageCol.off(event, handler);
	          fullCol.off(event, handler);
	        });

	        var state = _clone(pageCol.state);
	        var firstPage = state.firstPage;
	        var currentPage = firstPage === 0 ?
	          state.currentPage :
	          state.currentPage - 1;
	        var pageSize = state.pageSize;
	        var pageStart = currentPage * pageSize, pageEnd = pageStart + pageSize;

	        if (event == "add") {
	          var pageIndex, fullIndex, addAt, colToAdd, options = options || {};
	          if (collection == fullCol) {
	            fullIndex = fullCol.indexOf(model);
	            if (fullIndex >= pageStart && fullIndex < pageEnd) {
	              colToAdd = pageCol;
	              pageIndex = addAt = fullIndex - pageStart;
	            }
	          }
	          else {
	            pageIndex = pageCol.indexOf(model);
	            fullIndex = pageStart + pageIndex;
	            colToAdd = fullCol;
	            var addAt = !_isUndefined(options.at) ?
	              options.at + pageStart :
	              fullIndex;
	          }

	          if (!options.onRemove) {
	            ++state.totalRecords;
	            delete options.onRemove;
	          }

	          pageCol.state = pageCol._checkState(state);

	          if (colToAdd) {
	            colToAdd.add(model, _extend({}, options || {}, {at: addAt}));
	            var modelToRemove = pageIndex >= pageSize ?
	              model :
	              !_isUndefined(options.at) && addAt < pageEnd && pageCol.length > pageSize ?
	              pageCol.at(pageSize) :
	              null;
	            if (modelToRemove) {
	              runOnceAtLastHandler(collection, event, function () {
	                pageCol.remove(modelToRemove, {onAdd: true});
	              });
	            }
	          }
	        }

	        // remove the model from the other collection as well
	        if (event == "remove") {
	          if (!options.onAdd) {
	            // decrement totalRecords and update totalPages and lastPage
	            if (!--state.totalRecords) {
	              state.totalRecords = null;
	              state.totalPages = null;
	            }
	            else {
	              var totalPages = state.totalPages = ceil(state.totalRecords / pageSize);
	              state.lastPage = firstPage === 0 ? totalPages - 1 : totalPages || firstPage;
	              if (state.currentPage > totalPages) state.currentPage = state.lastPage;
	            }
	            pageCol.state = pageCol._checkState(state);

	            var nextModel, removedIndex = options.index;
	            if (collection == pageCol) {
	              if (nextModel = fullCol.at(pageEnd)) {
	                runOnceAtLastHandler(pageCol, event, function () {
	                  pageCol.push(nextModel, {onRemove: true});
	                });
	              }
	              else if (!pageCol.length && state.totalRecords) {
	                pageCol.reset(fullCol.models.slice(pageStart - pageSize, pageEnd - pageSize),
	                              _extend({}, options, {parse: false}));
	              }
	              fullCol.remove(model);
	            }
	            else if (removedIndex >= pageStart && removedIndex < pageEnd) {
	              if (nextModel = fullCol.at(pageEnd - 1)) {
	                runOnceAtLastHandler(pageCol, event, function() {
	                  pageCol.push(nextModel, {onRemove: true});
	                });
	              }
	              pageCol.remove(model);
	              if (!pageCol.length && state.totalRecords) {
	                pageCol.reset(fullCol.models.slice(pageStart - pageSize, pageEnd - pageSize),
	                              _extend({}, options, {parse: false}));
	              }
	            }
	          }
	          else delete options.onAdd;
	        }

	        if (event == "reset") {
	          options = collection;
	          collection = model;

	          // Reset that's not a result of getPage
	          if (collection == pageCol && options.from == null &&
	              options.to == null) {
	            var head = fullCol.models.slice(0, pageStart);
	            var tail = fullCol.models.slice(pageStart + pageCol.models.length);
	            fullCol.reset(head.concat(pageCol.models).concat(tail), options);
	          }
	          else if (collection == fullCol) {
	            if (!(state.totalRecords = fullCol.models.length)) {
	              state.totalRecords = null;
	              state.totalPages = null;
	            }
	            if (pageCol.mode == "client") {
	              firstPage = state.lastPage = state.currentPage = state.firstPage;
	              currentPage = firstPage === 0 ? state.currentPage : state.currentPage - 1;
	              pageStart = currentPage * pageSize;
	              pageEnd = pageStart + pageSize;
	            }
	            pageCol.state = pageCol._checkState(state);
	            pageCol.reset(fullCol.models.slice(pageStart, pageEnd),
	                          _extend({}, options, {parse: false}));
	          }
	        }

	        if (event == "sort") {
	          options = collection;
	          collection = model;
	          if (collection === fullCol) {
	            pageCol.reset(fullCol.models.slice(pageStart, pageEnd),
	                          _extend({}, options, {parse: false}));
	          }
	        }

	        _each(_keys(handlers), function (event) {
	          var handler = handlers[event];
	          _each([pageCol, fullCol], function (col) {
	            col.on(event, handler);
	            var callbacks = col._events[event] || [];
	            callbacks.unshift(callbacks.pop());
	          });
	        });
	      };
	    },

	    /**
	       Sanity check this collection's pagination states. Only perform checks
	       when all the required pagination state values are defined and not null.
	       If `totalPages` is undefined or null, it is set to `totalRecords` /
	       `pageSize`. `lastPage` is set according to whether `firstPage` is 0 or 1
	       when no error occurs.

	       @private

	       @throws {TypeError} If `totalRecords`, `pageSize`, `currentPage` or
	       `firstPage` is not a finite integer.

	       @throws {RangeError} If `pageSize`, `currentPage` or `firstPage` is out
	       of bounds.

	       @return {Object} Returns the `state` object if no error was found.
	    */
	    _checkState: function (state) {

	      var mode = this.mode;
	      var links = this.links;
	      var totalRecords = state.totalRecords;
	      var pageSize = state.pageSize;
	      var currentPage = state.currentPage;
	      var firstPage = state.firstPage;
	      var totalPages = state.totalPages;

	      if (totalRecords != null && pageSize != null && currentPage != null &&
	          firstPage != null && (mode == "infinite" ? links : true)) {

	        totalRecords = finiteInt(totalRecords, "totalRecords");
	        pageSize = finiteInt(pageSize, "pageSize");
	        currentPage = finiteInt(currentPage, "currentPage");
	        firstPage = finiteInt(firstPage, "firstPage");

	        if (pageSize < 1) {
	          throw new RangeError("`pageSize` must be >= 1");
	        }

	        totalPages = state.totalPages = ceil(totalRecords / pageSize);

	        if (firstPage < 0 || firstPage > 1) {
	          throw new RangeError("`firstPage must be 0 or 1`");
	        }

	        state.lastPage = firstPage === 0 ? max(0, totalPages - 1) : totalPages || firstPage;

	        if (mode == "infinite") {
	          if (!links[currentPage + '']) {
	            throw new RangeError("No link found for page " + currentPage);
	          }
	        }
	        else if (currentPage < firstPage ||
	                 (totalPages > 0 &&
	                  (firstPage ? currentPage > totalPages : currentPage >= totalPages))) {
	          throw new RangeError("`currentPage` must be firstPage <= currentPage " +
	                               (firstPage ? "<" : "<=") +
	                               " totalPages if " + firstPage + "-based. Got " +
	                               currentPage + '.');
	        }
	      }

	      return state;
	    },

	    /**
	       Change the page size of this collection.

	       Under most if not all circumstances, you should call this method to
	       change the page size of a pageable collection because it will keep the
	       pagination state sane. By default, the method will recalculate the
	       current page number to one that will retain the current page's models
	       when increasing the page size. When decreasing the page size, this method
	       will retain the last models to the current page that will fit into the
	       smaller page size.

	       If `options.first` is true, changing the page size will also reset the
	       current page back to the first page instead of trying to be smart.

	       For server mode operations, changing the page size will trigger a #fetch
	       and subsequently a `reset` event.

	       For client mode operations, changing the page size will `reset` the
	       current page by recalculating the current page boundary on the client
	       side.

	       If `options.fetch` is true, a fetch can be forced if the collection is in
	       client mode.

	       @param {number} pageSize The new page size to set to #state.
	       @param {Object} [options] {@link #fetch} options.
	       @param {boolean} [options.first=false] Reset the current page number to
	       the first page if `true`.
	       @param {boolean} [options.fetch] If `true`, force a fetch in client mode.

	       @throws {TypeError} If `pageSize` is not a finite integer.
	       @throws {RangeError} If `pageSize` is less than 1.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this.
	    */
	    setPageSize: function (pageSize, options) {
	      pageSize = finiteInt(pageSize, "pageSize");

	      options = options || {first: false};

	      var state = this.state;
	      var totalPages = ceil(state.totalRecords / pageSize);
	      var currentPage = totalPages ?
	          max(state.firstPage, floor(totalPages * state.currentPage / state.totalPages)) :
	        state.firstPage;

	      state = this.state = this._checkState(_extend({}, state, {
	        pageSize: pageSize,
	        currentPage: options.first ? state.firstPage : currentPage,
	        totalPages: totalPages
	      }));

	      return this.getPage(state.currentPage, _omit(options, ["first"]));
	    },

	    /**
	       Switching between client, server and infinite mode.

	       If switching from client to server mode, the #fullCollection is emptied
	       first and then deleted and a fetch is immediately issued for the current
	       page from the server. Pass `false` to `options.fetch` to skip fetching.

	       If switching to infinite mode, and if `options.models` is given for an
	       array of models, #links will be populated with a URL per page, using the
	       default URL for this collection.

	       If switching from server to client mode, all of the pages are immediately
	       refetched. If you have too many pages, you can pass `false` to
	       `options.fetch` to skip fetching.

	       If switching to any mode from infinite mode, the #links will be deleted.

	       @param {"server"|"client"|"infinite"} [mode] The mode to switch to.

	       @param {Object} [options]

	       @param {boolean} [options.fetch=true] If `false`, no fetching is done.

	       @param {boolean} [options.resetState=true] If 'false', the state is not
	       reset, but checked for sanity instead.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this if `options.fetch` is `false`.
	    */
	    switchMode: function (mode, options) {

	      if (!_contains(["server", "client", "infinite"], mode)) {
	        throw new TypeError('`mode` must be one of "server", "client" or "infinite"');
	      }

	      options = options || {fetch: true, resetState: true};

	      var state = this.state = options.resetState ?
	        _clone(this._initState) :
	        this._checkState(_extend({}, this.state));

	      this.mode = mode;

	      var self = this;
	      var fullCollection = this.fullCollection;
	      var handlers = this._handlers = this._handlers || {}, handler;
	      if (mode != "server" && !fullCollection) {
	        fullCollection = this._makeFullCollection(options.models || [], options);
	        fullCollection.pageableCollection = this;
	        this.fullCollection = fullCollection;
	        var allHandler = this._makeCollectionEventHandler(this, fullCollection);
	        _each(["add", "remove", "reset", "sort"], function (event) {
	          handlers[event] = handler = _.bind(allHandler, {}, event);
	          self.on(event, handler);
	          fullCollection.on(event, handler);
	        });
	        fullCollection.comparator = this._fullComparator;
	      }
	      else if (mode == "server" && fullCollection) {
	        _each(_keys(handlers), function (event) {
	          handler = handlers[event];
	          self.off(event, handler);
	          fullCollection.off(event, handler);
	        });
	        delete this._handlers;
	        this._fullComparator = fullCollection.comparator;
	        delete this.fullCollection;
	      }

	      if (mode == "infinite") {
	        var links = this.links = {};
	        var firstPage = state.firstPage;
	        var totalPages = ceil(state.totalRecords / state.pageSize);
	        var lastPage = firstPage === 0 ? max(0, totalPages - 1) : totalPages || firstPage;
	        for (var i = state.firstPage; i <= lastPage; i++) {
	          links[i] = this.url;
	        }
	      }
	      else if (this.links) delete this.links;

	      return options.fetch ?
	        this.fetch(_omit(options, "fetch", "resetState")) :
	        this;
	    },

	    /**
	       @return {boolean} `true` if this collection can page backward, `false`
	       otherwise.
	    */
	    hasPreviousPage: function () {
	      var state = this.state;
	      var currentPage = state.currentPage;
	      if (this.mode != "infinite") return currentPage > state.firstPage;
	      return !!this.links[currentPage - 1];
	    },

	    /**
	       @return {boolean} `true` if this collection can page forward, `false`
	       otherwise.
	    */
	    hasNextPage: function () {
	      var state = this.state;
	      var currentPage = this.state.currentPage;
	      if (this.mode != "infinite") return currentPage < state.lastPage;
	      return !!this.links[currentPage + 1];
	    },

	    /**
	       Fetch the first page in server mode, or reset the current page of this
	       collection to the first page in client or infinite mode.

	       @param {Object} options {@link #getPage} options.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this.
	    */
	    getFirstPage: function (options) {
	      return this.getPage("first", options);
	    },

	    /**
	       Fetch the previous page in server mode, or reset the current page of this
	       collection to the previous page in client or infinite mode.

	       @param {Object} options {@link #getPage} options.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this.
	    */
	    getPreviousPage: function (options) {
	      return this.getPage("prev", options);
	    },

	    /**
	       Fetch the next page in server mode, or reset the current page of this
	       collection to the next page in client mode.

	       @param {Object} options {@link #getPage} options.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this.
	    */
	    getNextPage: function (options) {
	      return this.getPage("next", options);
	    },

	    /**
	       Fetch the last page in server mode, or reset the current page of this
	       collection to the last page in client mode.

	       @param {Object} options {@link #getPage} options.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this.
	    */
	    getLastPage: function (options) {
	      return this.getPage("last", options);
	    },

	    /**
	       Given a page index, set #state.currentPage to that index. If this
	       collection is in server mode, fetch the page using the updated state,
	       otherwise, reset the current page of this collection to the page
	       specified by `index` in client mode. If `options.fetch` is true, a fetch
	       can be forced in client mode before resetting the current page. Under
	       infinite mode, if the index is less than the current page, a reset is
	       done as in client mode. If the index is greater than the current page
	       number, a fetch is made with the results **appended** to #fullCollection.
	       The current page will then be reset after fetching.

	       @param {number|string} index The page index to go to, or the page name to
	       look up from #links in infinite mode.
	       @param {Object} [options] {@link #fetch} options or
	       [reset](http://backbonejs.org/#Collection-reset) options for client mode
	       when `options.fetch` is `false`.
	       @param {boolean} [options.fetch=false] If true, force a {@link #fetch} in
	       client mode.

	       @throws {TypeError} If `index` is not a finite integer under server or
	       client mode, or does not yield a URL from #links under infinite mode.

	       @throws {RangeError} If `index` is out of bounds.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this.
	    */
	    getPage: function (index, options) {

	      var mode = this.mode, fullCollection = this.fullCollection;

	      options = options || {fetch: false};

	      var state = this.state,
	      firstPage = state.firstPage,
	      currentPage = state.currentPage,
	      lastPage = state.lastPage,
	      pageSize = state.pageSize;

	      var pageNum = index;
	      switch (index) {
	        case "first": pageNum = firstPage; break;
	        case "prev": pageNum = currentPage - 1; break;
	        case "next": pageNum = currentPage + 1; break;
	        case "last": pageNum = lastPage; break;
	        default: pageNum = finiteInt(index, "index");
	      }

	      this.state = this._checkState(_extend({}, state, {currentPage: pageNum}));

	      options.from = currentPage, options.to = pageNum;

	      var pageStart = (firstPage === 0 ? pageNum : pageNum - 1) * pageSize;
	      var pageModels = fullCollection && fullCollection.length ?
	        fullCollection.models.slice(pageStart, pageStart + pageSize) :
	        [];
	      if ((mode == "client" || (mode == "infinite" && !_isEmpty(pageModels))) &&
	          !options.fetch) {
	        this.reset(pageModels, _omit(options, "fetch"));
	        return this;
	      }

	      if (mode == "infinite") options.url = this.links[pageNum];

	      return this.fetch(_omit(options, "fetch"));
	    },

	    /**
	       Fetch the page for the provided item offset in server mode, or reset the current page of this
	       collection to the page for the provided item offset in client mode.

	       @param {Object} options {@link #getPage} options.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this.
	    */
	    getPageByOffset: function (offset, options) {
	      if (offset < 0) {
	        throw new RangeError("`offset must be > 0`");
	      }
	      offset = finiteInt(offset);

	      var page = floor(offset / this.state.pageSize);
	      if (this.state.firstPage !== 0) page++;
	      if (page > this.state.lastPage) page = this.state.lastPage;
	      return this.getPage(page, options);
	    },

	    /**
	       Overidden to make `getPage` compatible with Zepto.

	       @param {string} method
	       @param {Backbone.Model|Backbone.Collection} model
	       @param {Object} [options]

	       @return {XMLHttpRequest}
	    */
	    sync: function (method, model, options) {
	      var self = this;
	      if (self.mode == "infinite") {
	        var success = options.success;
	        var currentPage = self.state.currentPage;
	        options.success = function (resp, status, xhr) {
	          var links = self.links;
	          var newLinks = self.parseLinks(resp, _extend({xhr: xhr}, options));
	          if (newLinks.first) links[self.state.firstPage] = newLinks.first;
	          if (newLinks.prev) links[currentPage - 1] = newLinks.prev;
	          if (newLinks.next) links[currentPage + 1] = newLinks.next;
	          if (success) success(resp, status, xhr);
	        };
	      }

	      return (BBColProto.sync || Backbone.sync).call(self, method, model, options);
	    },

	    /**
	       Parse pagination links from the server response. Only valid under
	       infinite mode.

	       Given a response body and a XMLHttpRequest object, extract pagination
	       links from them for infinite paging.

	       This default implementation parses the RFC 5988 `Link` header and extract
	       3 links from it - `first`, `prev`, `next`. Any subclasses overriding this
	       method __must__ return an object hash having only the keys
	       above. However, simply returning a `next` link or an empty hash if there
	       are no more links should be enough for most implementations.

	       @param {*} resp The deserialized response body.
	       @param {Object} [options]
	       @param {XMLHttpRequest} [options.xhr] The XMLHttpRequest object for this
	       response.
	       @return {Object}
	    */
	    parseLinks: function (resp, options) {
	      var links = {};
	      var linkHeader = options.xhr.getResponseHeader("Link");
	      if (linkHeader) {
	        var relations = ["first", "prev", "next"];
	        _each(linkHeader.split(","), function (linkValue) {
	          var linkParts = linkValue.split(";");
	          var url = linkParts[0].replace(URL_TRIM_RE, '');
	          var params = linkParts.slice(1);
	          _each(params, function (param) {
	            var paramParts = param.split("=");
	            var key = paramParts[0].replace(PARAM_TRIM_RE, '');
	            var value = paramParts[1].replace(PARAM_TRIM_RE, '');
	            if (key == "rel" && _contains(relations, value)) links[value] = url;
	          });
	        });
	      }

	      return links;
	    },

	    /**
	       Parse server response data.

	       This default implementation assumes the response data is in one of two
	       structures:

	           [
	             {}, // Your new pagination state
	             [{}, ...] // An array of JSON objects
	           ]

	       Or,

	           [{}] // An array of JSON objects

	       The first structure is the preferred form because the pagination states
	       may have been updated on the server side, sending them down again allows
	       this collection to update its states. If the response has a pagination
	       state object, it is checked for errors.

	       The second structure is the
	       [Backbone.Collection#parse](http://backbonejs.org/#Collection-parse)
	       default.

	       **Note:** this method has been further simplified since 1.1.7. While
	       existing #parse implementations will continue to work, new code is
	       encouraged to override #parseState and #parseRecords instead.

	       @param {Object} resp The deserialized response data from the server.
	       @param {Object} the options for the ajax request

	       @return {Array.<Object>} An array of model objects
	    */
	    parse: function (resp, options) {
	      var newState = this.parseState(resp, _clone(this.queryParams), _clone(this.state), options);
	      if (newState) this.state = this._checkState(_extend({}, this.state, newState));
	      return this.parseRecords(resp, options);
	    },

	    /**
	       Parse server response for server pagination state updates. Not applicable
	       under infinite mode.

	       This default implementation first checks whether the response has any
	       state object as documented in #parse. If it exists, a state object is
	       returned by mapping the server state keys to this pageable collection
	       instance's query parameter keys using `queryParams`.

	       It is __NOT__ neccessary to return a full state object complete with all
	       the mappings defined in #queryParams. Any state object resulted is merged
	       with a copy of the current pageable collection state and checked for
	       sanity before actually updating. Most of the time, simply providing a new
	       `totalRecords` value is enough to trigger a full pagination state
	       recalculation.

	           parseState: function (resp, queryParams, state, options) {
	             return {totalRecords: resp.total_entries};
	           }

	       If you want to use header fields use:

	           parseState: function (resp, queryParams, state, options) {
	               return {totalRecords: options.xhr.getResponseHeader("X-total")};
	           }

	       This method __MUST__ return a new state object instead of directly
	       modifying the #state object. The behavior of directly modifying #state is
	       undefined.

	       @param {Object} resp The deserialized response data from the server.
	       @param {Object} queryParams A copy of #queryParams.
	       @param {Object} state A copy of #state.
	       @param {Object} [options] The options passed through from
	       `parse`. (backbone >= 0.9.10 only)

	       @return {Object} A new (partial) state object.
	     */
	    parseState: function (resp, queryParams, state, options) {
	      if (resp && resp.length === 2 && _isObject(resp[0]) && _isArray(resp[1])) {

	        var newState = _clone(state);
	        var serverState = resp[0];

	        _each(_pairs(_omit(queryParams, "directions")), function (kvp) {
	          var k = kvp[0], v = kvp[1];
	          var serverVal = serverState[v];
	          if (!_isUndefined(serverVal) && !_.isNull(serverVal)) newState[k] = serverState[v];
	        });

	        if (serverState.order) {
	          newState.order = _invert(queryParams.directions)[serverState.order] * 1;
	        }

	        return newState;
	      }
	    },

	    /**
	       Parse server response for an array of model objects.

	       This default implementation first checks whether the response has any
	       state object as documented in #parse. If it exists, the array of model
	       objects is assumed to be the second element, otherwise the entire
	       response is returned directly.

	       @param {Object} resp The deserialized response data from the server.
	       @param {Object} [options] The options passed through from the
	       `parse`. (backbone >= 0.9.10 only)

	       @return {Array.<Object>} An array of model objects
	     */
	    parseRecords: function (resp, options) {
	      if (resp && resp.length === 2 && _isObject(resp[0]) && _isArray(resp[1])) {
	        return resp[1];
	      }

	      return resp;
	    },

	    /**
	       Fetch a page from the server in server mode, or all the pages in client
	       mode. Under infinite mode, the current page is refetched by default and
	       then reset.

	       The query string is constructed by translating the current pagination
	       state to your server API query parameter using #queryParams. The current
	       page will reset after fetch.

	       @param {Object} [options] Accepts all
	       [Backbone.Collection#fetch](http://backbonejs.org/#Collection-fetch)
	       options.

	       @return {XMLHttpRequest}
	    */
	    fetch: function (options) {

	      options = options || {};

	      var state = this._checkState(this.state);

	      var mode = this.mode;

	      if (mode == "infinite" && !options.url) {
	        options.url = this.links[state.currentPage];
	      }

	      var data = options.data || {};

	      // dedup query params
	      var url = options.url || this.url || "";
	      if (_isFunction(url)) url = url.call(this);
	      var qsi = url.indexOf('?');
	      if (qsi != -1) {
	        _extend(data, queryStringToParams(url.slice(qsi + 1)));
	        url = url.slice(0, qsi);
	      }

	      options.url = url;
	      options.data = data;

	      // map params except directions
	      var queryParams = this.mode == "client" ?
	        _pick(this.queryParams, "sortKey", "order") :
	        _omit(_pick(this.queryParams, _keys(PageableProto.queryParams)),
	              "directions");

	      var thisCopy = _.clone(this);
	      _.each(queryParams, function (v, k) {
	        v = _isFunction(v) ? v.call(thisCopy) : v;
	        if (state[k] != null && v != null && _.isUndefined(data[v])) {
	          data[v] = state[k];
	        }
	      }, this);

	      // fix up sorting parameters
	      var i;
	      if (state.sortKey && state.order) {
	        var o = _isFunction(queryParams.order) ?
	          queryParams.order.call(thisCopy) :
	          queryParams.order;
	          if (!_isArray(state.order)) {
	              data[o] = this.queryParams.directions[state.order + ""];
	          }
	          else {
	              data[o] = [];
	              for (i = 0; i < state.order.length; i += 1) {
	                  data[o].push(this.queryParams.directions[state.order[i]]);
	              }
	          }
	      }
	      else if (!state.sortKey) delete data[queryParams.order];

	      // map extra query parameters
	      var extraKvps = _pairs(_omit(this.queryParams,
	                                   _keys(PageableProto.queryParams))),
	          kvp,
	          v;
	      for (i = 0; i < extraKvps.length; i++) {
	        kvp = extraKvps[i];
	        v = kvp[1];
	        v = _isFunction(v) ? v.call(thisCopy) : v;
	        if (v != null) data[kvp[0]] = v;
	      }

	      if (mode != "server") {
	        var self = this, fullCol = this.fullCollection;
	        var success = options.success;
	        options.success = function (col, resp, opts) {

	          // make sure the caller's intent is obeyed
	          opts = opts || {};
	          if (_isUndefined(options.silent)) delete opts.silent;
	          else opts.silent = options.silent;

	          var models = col.models;
	          if (mode == "client") fullCol.reset(models, opts);
	          else {
	            fullCol.add(models, _extend({at: fullCol.length},
	                                        _extend(opts, {parse: false})));
	            self.trigger("reset", self, opts);
	          }

	          if (success) success(col, resp, opts);
	        };

	        // silent the first reset from backbone
	        return BBColProto.fetch.call(this, _extend({}, options, {silent: true}));
	      }

	      return BBColProto.fetch.call(this, options);
	    },

	    /**
	       Convenient method for making a `comparator` sorted by a model attribute
	       identified by `sortKey` and ordered by `order`.

	       Like a Backbone.Collection, a Backbone.PageableCollection will maintain
	       the __current page__ in sorted order on the client side if a `comparator`
	       is attached to it. If the collection is in client mode, you can attach a
	       comparator to #fullCollection to have all the pages reflect the global
	       sorting order by specifying an option `full` to `true`. You __must__ call
	       `sort` manually or #fullCollection.sort after calling this method to
	       force a resort.

	       While you can use this method to sort the current page in server mode,
	       the sorting order may not reflect the global sorting order due to the
	       additions or removals of the records on the server since the last
	       fetch. If you want the most updated page in a global sorting order, it is
	       recommended that you set #state.sortKey and optionally #state.order, and
	       then call #fetch.

	       @protected

	       @param {string} [sortKey=this.state.sortKey] See `state.sortKey`.
	       @param {number} [order=this.state.order] See `state.order`.
	       @param {(function(Backbone.Model, string): Object) | string} [sortValue] See #setSorting.

	       See [Backbone.Collection.comparator](http://backbonejs.org/#Collection-comparator).
	    */
	    _makeComparator: function (sortKey, order, sortValue) {
	      var state = this.state;

	      sortKey = sortKey || state.sortKey;
	      order = order || state.order;

	      if (!sortKey || !order) return;

	      if (!sortValue) sortValue = function (model, attr) {
	        return model.get(attr);
	      };

	      return function (left, right) {
	        var l = sortValue(left, sortKey), r = sortValue(right, sortKey), t;
	        if (order === 1) t = l, l = r, r = t;
	        if (l === r) return 0;
	        else if (l < r) return -1;
	        return 1;
	      };
	    },

	    /**
	       Adjusts the sorting for this pageable collection.

	       Given a `sortKey` and an `order`, sets `state.sortKey` and
	       `state.order`. A comparator can be applied on the client side to sort in
	       the order defined if `options.side` is `"client"`. By default the
	       comparator is applied to the #fullCollection. Set `options.full` to
	       `false` to apply a comparator to the current page under any mode. Setting
	       `sortKey` to `null` removes the comparator from both the current page and
	       the full collection.

	       If a `sortValue` function is given, it will be passed the `(model,
	       sortKey)` arguments and is used to extract a value from the model during
	       comparison sorts. If `sortValue` is not given, `model.get(sortKey)` is
	       used for sorting.

	       @chainable

	       @param {string} sortKey See `state.sortKey`.
	       @param {number} [order=this.state.order] See `state.order`.
	       @param {Object} [options]
	       @param {"server"|"client"} [options.side] By default, `"client"` if
	       `mode` is `"client"`, `"server"` otherwise.
	       @param {boolean} [options.full=true]
	       @param {(function(Backbone.Model, string): Object) | string} [options.sortValue]
	    */
	    setSorting: function (sortKey, order, options) {

	      var state = this.state;

	      state.sortKey = sortKey;
	      state.order = order = order || state.order;

	      var fullCollection = this.fullCollection;

	      var delComp = false, delFullComp = false;

	      if (!sortKey) delComp = delFullComp = true;

	      var mode = this.mode;
	      options = _extend({side: mode == "client" ? mode : "server", full: true},
	                        options);

	      var comparator = this._makeComparator(sortKey, order, options.sortValue);

	      var full = options.full, side = options.side;

	      if (side == "client") {
	        if (full) {
	          if (fullCollection) fullCollection.comparator = comparator;
	          delComp = true;
	        }
	        else {
	          this.comparator = comparator;
	          delFullComp = true;
	        }
	      }
	      else if (side == "server" && !full) {
	        this.comparator = comparator;
	      }

	      if (delComp) this.comparator = null;
	      if (delFullComp && fullCollection) fullCollection.comparator = null;

	      return this;
	    }

	  });

	  var PageableProto = PageableCollection.prototype;

	  return PageableCollection;

	}));


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"loginPage\">");t.b("\n" + i);t.b("  <form id=\"loginForm\">");t.b("\n" + i);t.b("  <div id=\"loginHeader\">");t.b("\n" + i);t.b("    <h2>LOG IN</h2>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <label>Username:</label>");t.b("\n" + i);t.b("  <input id=\"username\" type=\"text\" placeholder=\"USERNAME\">");t.b("\n" + i);t.b("  </br>");t.b("\n" + i);t.b("  <label>Password:</label>");t.b("\n" + i);t.b("  <input id=\"password\" type=\"password\" placeholder=\"PASSWORD\">");t.b("\n" + i);t.b("  </br>");t.b("\n" + i);t.b("  <button id=\"loginSubmit\" type=\"submit\">Submit</button>");t.b("\n" + i);t.b("  <a class=\"register\" type=\"submit\" href=\"/signup\">SignUp</a>");t.b("\n" + i);t.b("  </form>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"loginPage\">\n  <form id=\"loginForm\">\n  <div id=\"loginHeader\">\n    <h2>LOG IN</h2>\n  </div>\n  <label>Username:</label>\n  <input id=\"username\" type=\"text\" placeholder=\"USERNAME\">\n  </br>\n  <label>Password:</label>\n  <input id=\"password\" type=\"password\" placeholder=\"PASSWORD\">\n  </br>\n  <button id=\"loginSubmit\" type=\"submit\">Submit</button>\n  <a class=\"register\" type=\"submit\" href=\"/signup\">SignUp</a>\n  </form>\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	// This file is for use with Node.js. See dist/ for browser files.

	var Hogan = __webpack_require__(42);
	Hogan.Template = __webpack_require__(43).Template;
	Hogan.template = Hogan.Template;
	module.exports = Hogan;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	(function (Hogan) {
	  // Setup regex  assignments
	  // remove whitespace according to Mustache spec
	  var rIsWhitespace = /\S/,
	      rQuot = /\"/g,
	      rNewline =  /\n/g,
	      rCr = /\r/g,
	      rSlash = /\\/g,
	      rLineSep = /\u2028/,
	      rParagraphSep = /\u2029/;

	  Hogan.tags = {
	    '#': 1, '^': 2, '<': 3, '$': 4,
	    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
	    '{': 10, '&': 11, '_t': 12
	  };

	  Hogan.scan = function scan(text, delimiters) {
	    var len = text.length,
	        IN_TEXT = 0,
	        IN_TAG_TYPE = 1,
	        IN_TAG = 2,
	        state = IN_TEXT,
	        tagType = null,
	        tag = null,
	        buf = '',
	        tokens = [],
	        seenTag = false,
	        i = 0,
	        lineStart = 0,
	        otag = '{{',
	        ctag = '}}';

	    function addBuf() {
	      if (buf.length > 0) {
	        tokens.push({tag: '_t', text: new String(buf)});
	        buf = '';
	      }
	    }

	    function lineIsWhitespace() {
	      var isAllWhitespace = true;
	      for (var j = lineStart; j < tokens.length; j++) {
	        isAllWhitespace =
	          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
	          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
	        if (!isAllWhitespace) {
	          return false;
	        }
	      }

	      return isAllWhitespace;
	    }

	    function filterLine(haveSeenTag, noNewLine) {
	      addBuf();

	      if (haveSeenTag && lineIsWhitespace()) {
	        for (var j = lineStart, next; j < tokens.length; j++) {
	          if (tokens[j].text) {
	            if ((next = tokens[j+1]) && next.tag == '>') {
	              // set indent to token value
	              next.indent = tokens[j].text.toString()
	            }
	            tokens.splice(j, 1);
	          }
	        }
	      } else if (!noNewLine) {
	        tokens.push({tag:'\n'});
	      }

	      seenTag = false;
	      lineStart = tokens.length;
	    }

	    function changeDelimiters(text, index) {
	      var close = '=' + ctag,
	          closeIndex = text.indexOf(close, index),
	          delimiters = trim(
	            text.substring(text.indexOf('=', index) + 1, closeIndex)
	          ).split(' ');

	      otag = delimiters[0];
	      ctag = delimiters[delimiters.length - 1];

	      return closeIndex + close.length - 1;
	    }

	    if (delimiters) {
	      delimiters = delimiters.split(' ');
	      otag = delimiters[0];
	      ctag = delimiters[1];
	    }

	    for (i = 0; i < len; i++) {
	      if (state == IN_TEXT) {
	        if (tagChange(otag, text, i)) {
	          --i;
	          addBuf();
	          state = IN_TAG_TYPE;
	        } else {
	          if (text.charAt(i) == '\n') {
	            filterLine(seenTag);
	          } else {
	            buf += text.charAt(i);
	          }
	        }
	      } else if (state == IN_TAG_TYPE) {
	        i += otag.length - 1;
	        tag = Hogan.tags[text.charAt(i + 1)];
	        tagType = tag ? text.charAt(i + 1) : '_v';
	        if (tagType == '=') {
	          i = changeDelimiters(text, i);
	          state = IN_TEXT;
	        } else {
	          if (tag) {
	            i++;
	          }
	          state = IN_TAG;
	        }
	        seenTag = i;
	      } else {
	        if (tagChange(ctag, text, i)) {
	          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
	                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
	          buf = '';
	          i += ctag.length - 1;
	          state = IN_TEXT;
	          if (tagType == '{') {
	            if (ctag == '}}') {
	              i++;
	            } else {
	              cleanTripleStache(tokens[tokens.length - 1]);
	            }
	          }
	        } else {
	          buf += text.charAt(i);
	        }
	      }
	    }

	    filterLine(seenTag, true);

	    return tokens;
	  }

	  function cleanTripleStache(token) {
	    if (token.n.substr(token.n.length - 1) === '}') {
	      token.n = token.n.substring(0, token.n.length - 1);
	    }
	  }

	  function trim(s) {
	    if (s.trim) {
	      return s.trim();
	    }

	    return s.replace(/^\s*|\s*$/g, '');
	  }

	  function tagChange(tag, text, index) {
	    if (text.charAt(index) != tag.charAt(0)) {
	      return false;
	    }

	    for (var i = 1, l = tag.length; i < l; i++) {
	      if (text.charAt(index + i) != tag.charAt(i)) {
	        return false;
	      }
	    }

	    return true;
	  }

	  // the tags allowed inside super templates
	  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

	  function buildTree(tokens, kind, stack, customTags) {
	    var instructions = [],
	        opener = null,
	        tail = null,
	        token = null;

	    tail = stack[stack.length - 1];

	    while (tokens.length > 0) {
	      token = tokens.shift();

	      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
	        throw new Error('Illegal content in < super tag.');
	      }

	      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
	        stack.push(token);
	        token.nodes = buildTree(tokens, token.tag, stack, customTags);
	      } else if (token.tag == '/') {
	        if (stack.length === 0) {
	          throw new Error('Closing tag without opener: /' + token.n);
	        }
	        opener = stack.pop();
	        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
	          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
	        }
	        opener.end = token.i;
	        return instructions;
	      } else if (token.tag == '\n') {
	        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
	      }

	      instructions.push(token);
	    }

	    if (stack.length > 0) {
	      throw new Error('missing closing tag: ' + stack.pop().n);
	    }

	    return instructions;
	  }

	  function isOpener(token, tags) {
	    for (var i = 0, l = tags.length; i < l; i++) {
	      if (tags[i].o == token.n) {
	        token.tag = '#';
	        return true;
	      }
	    }
	  }

	  function isCloser(close, open, tags) {
	    for (var i = 0, l = tags.length; i < l; i++) {
	      if (tags[i].c == close && tags[i].o == open) {
	        return true;
	      }
	    }
	  }

	  function stringifySubstitutions(obj) {
	    var items = [];
	    for (var key in obj) {
	      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
	    }
	    return "{ " + items.join(",") + " }";
	  }

	  function stringifyPartials(codeObj) {
	    var partials = [];
	    for (var key in codeObj.partials) {
	      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
	    }
	    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
	  }

	  Hogan.stringify = function(codeObj, text, options) {
	    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
	  }

	  var serialNo = 0;
	  Hogan.generate = function(tree, text, options) {
	    serialNo = 0;
	    var context = { code: '', subs: {}, partials: {} };
	    Hogan.walk(tree, context);

	    if (options.asString) {
	      return this.stringify(context, text, options);
	    }

	    return this.makeTemplate(context, text, options);
	  }

	  Hogan.wrapMain = function(code) {
	    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
	  }

	  Hogan.template = Hogan.Template;

	  Hogan.makeTemplate = function(codeObj, text, options) {
	    var template = this.makePartials(codeObj);
	    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
	    return new this.template(template, text, this, options);
	  }

	  Hogan.makePartials = function(codeObj) {
	    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
	    for (key in template.partials) {
	      template.partials[key] = this.makePartials(template.partials[key]);
	    }
	    for (key in codeObj.subs) {
	      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
	    }
	    return template;
	  }

	  function esc(s) {
	    return s.replace(rSlash, '\\\\')
	            .replace(rQuot, '\\\"')
	            .replace(rNewline, '\\n')
	            .replace(rCr, '\\r')
	            .replace(rLineSep, '\\u2028')
	            .replace(rParagraphSep, '\\u2029');
	  }

	  function chooseMethod(s) {
	    return (~s.indexOf('.')) ? 'd' : 'f';
	  }

	  function createPartial(node, context) {
	    var prefix = "<" + (context.prefix || "");
	    var sym = prefix + node.n + serialNo++;
	    context.partials[sym] = {name: node.n, partials: {}};
	    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
	    return sym;
	  }

	  Hogan.codegen = {
	    '#': function(node, context) {
	      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
	                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
	                      't.rs(c,p,' + 'function(c,p,t){';
	      Hogan.walk(node.nodes, context);
	      context.code += '});c.pop();}';
	    },

	    '^': function(node, context) {
	      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
	      Hogan.walk(node.nodes, context);
	      context.code += '};';
	    },

	    '>': createPartial,
	    '<': function(node, context) {
	      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
	      Hogan.walk(node.nodes, ctx);
	      var template = context.partials[createPartial(node, context)];
	      template.subs = ctx.subs;
	      template.partials = ctx.partials;
	    },

	    '$': function(node, context) {
	      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
	      Hogan.walk(node.nodes, ctx);
	      context.subs[node.n] = ctx.code;
	      if (!context.inPartial) {
	        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
	      }
	    },

	    '\n': function(node, context) {
	      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
	    },

	    '_v': function(node, context) {
	      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
	    },

	    '_t': function(node, context) {
	      context.code += write('"' + esc(node.text) + '"');
	    },

	    '{': tripleStache,

	    '&': tripleStache
	  }

	  function tripleStache(node, context) {
	    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
	  }

	  function write(s) {
	    return 't.b(' + s + ');';
	  }

	  Hogan.walk = function(nodelist, context) {
	    var func;
	    for (var i = 0, l = nodelist.length; i < l; i++) {
	      func = Hogan.codegen[nodelist[i].tag];
	      func && func(nodelist[i], context);
	    }
	    return context;
	  }

	  Hogan.parse = function(tokens, text, options) {
	    options = options || {};
	    return buildTree(tokens, '', [], options.sectionTags || []);
	  }

	  Hogan.cache = {};

	  Hogan.cacheKey = function(text, options) {
	    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
	  }

	  Hogan.compile = function(text, options) {
	    options = options || {};
	    var key = Hogan.cacheKey(text, options);
	    var template = this.cache[key];

	    if (template) {
	      var partials = template.partials;
	      for (var name in partials) {
	        delete partials[name].instance;
	      }
	      return template;
	    }

	    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
	    return this.cache[key] = template;
	  }
	})( true ? exports : Hogan);


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	var Hogan = {};

	(function (Hogan) {
	  Hogan.Template = function (codeObj, text, compiler, options) {
	    codeObj = codeObj || {};
	    this.r = codeObj.code || this.r;
	    this.c = compiler;
	    this.options = options || {};
	    this.text = text || '';
	    this.partials = codeObj.partials || {};
	    this.subs = codeObj.subs || {};
	    this.buf = '';
	  }

	  Hogan.Template.prototype = {
	    // render: replaced by generated code.
	    r: function (context, partials, indent) { return ''; },

	    // variable escaping
	    v: hoganEscape,

	    // triple stache
	    t: coerceToString,

	    render: function render(context, partials, indent) {
	      return this.ri([context], partials || {}, indent);
	    },

	    // render internal -- a hook for overrides that catches partials too
	    ri: function (context, partials, indent) {
	      return this.r(context, partials, indent);
	    },

	    // ensurePartial
	    ep: function(symbol, partials) {
	      var partial = this.partials[symbol];

	      // check to see that if we've instantiated this partial before
	      var template = partials[partial.name];
	      if (partial.instance && partial.base == template) {
	        return partial.instance;
	      }

	      if (typeof template == 'string') {
	        if (!this.c) {
	          throw new Error("No compiler available.");
	        }
	        template = this.c.compile(template, this.options);
	      }

	      if (!template) {
	        return null;
	      }

	      // We use this to check whether the partials dictionary has changed
	      this.partials[symbol].base = template;

	      if (partial.subs) {
	        // Make sure we consider parent template now
	        if (!partials.stackText) partials.stackText = {};
	        for (key in partial.subs) {
	          if (!partials.stackText[key]) {
	            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
	          }
	        }
	        template = createSpecializedPartial(template, partial.subs, partial.partials,
	          this.stackSubs, this.stackPartials, partials.stackText);
	      }
	      this.partials[symbol].instance = template;

	      return template;
	    },

	    // tries to find a partial in the current scope and render it
	    rp: function(symbol, context, partials, indent) {
	      var partial = this.ep(symbol, partials);
	      if (!partial) {
	        return '';
	      }

	      return partial.ri(context, partials, indent);
	    },

	    // render a section
	    rs: function(context, partials, section) {
	      var tail = context[context.length - 1];

	      if (!isArray(tail)) {
	        section(context, partials, this);
	        return;
	      }

	      for (var i = 0; i < tail.length; i++) {
	        context.push(tail[i]);
	        section(context, partials, this);
	        context.pop();
	      }
	    },

	    // maybe start a section
	    s: function(val, ctx, partials, inverted, start, end, tags) {
	      var pass;

	      if (isArray(val) && val.length === 0) {
	        return false;
	      }

	      if (typeof val == 'function') {
	        val = this.ms(val, ctx, partials, inverted, start, end, tags);
	      }

	      pass = !!val;

	      if (!inverted && pass && ctx) {
	        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
	      }

	      return pass;
	    },

	    // find values with dotted names
	    d: function(key, ctx, partials, returnFound) {
	      var found,
	          names = key.split('.'),
	          val = this.f(names[0], ctx, partials, returnFound),
	          doModelGet = this.options.modelGet,
	          cx = null;

	      if (key === '.' && isArray(ctx[ctx.length - 2])) {
	        val = ctx[ctx.length - 1];
	      } else {
	        for (var i = 1; i < names.length; i++) {
	          found = findInScope(names[i], val, doModelGet);
	          if (found !== undefined) {
	            cx = val;
	            val = found;
	          } else {
	            val = '';
	          }
	        }
	      }

	      if (returnFound && !val) {
	        return false;
	      }

	      if (!returnFound && typeof val == 'function') {
	        ctx.push(cx);
	        val = this.mv(val, ctx, partials);
	        ctx.pop();
	      }

	      return val;
	    },

	    // find values with normal names
	    f: function(key, ctx, partials, returnFound) {
	      var val = false,
	          v = null,
	          found = false,
	          doModelGet = this.options.modelGet;

	      for (var i = ctx.length - 1; i >= 0; i--) {
	        v = ctx[i];
	        val = findInScope(key, v, doModelGet);
	        if (val !== undefined) {
	          found = true;
	          break;
	        }
	      }

	      if (!found) {
	        return (returnFound) ? false : "";
	      }

	      if (!returnFound && typeof val == 'function') {
	        val = this.mv(val, ctx, partials);
	      }

	      return val;
	    },

	    // higher order templates
	    ls: function(func, cx, partials, text, tags) {
	      var oldTags = this.options.delimiters;

	      this.options.delimiters = tags;
	      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
	      this.options.delimiters = oldTags;

	      return false;
	    },

	    // compile text
	    ct: function(text, cx, partials) {
	      if (this.options.disableLambda) {
	        throw new Error('Lambda features disabled.');
	      }
	      return this.c.compile(text, this.options).render(cx, partials);
	    },

	    // template result buffering
	    b: function(s) { this.buf += s; },

	    fl: function() { var r = this.buf; this.buf = ''; return r; },

	    // method replace section
	    ms: function(func, ctx, partials, inverted, start, end, tags) {
	      var textSource,
	          cx = ctx[ctx.length - 1],
	          result = func.call(cx);

	      if (typeof result == 'function') {
	        if (inverted) {
	          return true;
	        } else {
	          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
	          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
	        }
	      }

	      return result;
	    },

	    // method replace variable
	    mv: function(func, ctx, partials) {
	      var cx = ctx[ctx.length - 1];
	      var result = func.call(cx);

	      if (typeof result == 'function') {
	        return this.ct(coerceToString(result.call(cx)), cx, partials);
	      }

	      return result;
	    },

	    sub: function(name, context, partials, indent) {
	      var f = this.subs[name];
	      if (f) {
	        this.activeSub = name;
	        f(context, partials, this, indent);
	        this.activeSub = false;
	      }
	    }

	  };

	  //Find a key in an object
	  function findInScope(key, scope, doModelGet) {
	    var val;

	    if (scope && typeof scope == 'object') {

	      if (scope[key] !== undefined) {
	        val = scope[key];

	      // try lookup with get for backbone or similar model data
	      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
	        val = scope.get(key);
	      }
	    }

	    return val;
	  }

	  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
	    function PartialTemplate() {};
	    PartialTemplate.prototype = instance;
	    function Substitutions() {};
	    Substitutions.prototype = instance.subs;
	    var key;
	    var partial = new PartialTemplate();
	    partial.subs = new Substitutions();
	    partial.subsText = {};  //hehe. substext.
	    partial.buf = '';

	    stackSubs = stackSubs || {};
	    partial.stackSubs = stackSubs;
	    partial.subsText = stackText;
	    for (key in subs) {
	      if (!stackSubs[key]) stackSubs[key] = subs[key];
	    }
	    for (key in stackSubs) {
	      partial.subs[key] = stackSubs[key];
	    }

	    stackPartials = stackPartials || {};
	    partial.stackPartials = stackPartials;
	    for (key in partials) {
	      if (!stackPartials[key]) stackPartials[key] = partials[key];
	    }
	    for (key in stackPartials) {
	      partial.partials[key] = stackPartials[key];
	    }

	    return partial;
	  }

	  var rAmp = /&/g,
	      rLt = /</g,
	      rGt = />/g,
	      rApos = /\'/g,
	      rQuot = /\"/g,
	      hChars = /[&<>\"\']/;

	  function coerceToString(val) {
	    return String((val === null || val === undefined) ? '' : val);
	  }

	  function hoganEscape(str) {
	    str = coerceToString(str);
	    return hChars.test(str) ?
	      str
	        .replace(rAmp, '&amp;')
	        .replace(rLt, '&lt;')
	        .replace(rGt, '&gt;')
	        .replace(rApos, '&#39;')
	        .replace(rQuot, '&quot;') :
	      str;
	  }

	  var isArray = Array.isArray || function(a) {
	    return Object.prototype.toString.call(a) === '[object Array]';
	  };

	})( true ? exports : Hogan);


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"signupPage\">");t.b("\n" + i);t.b("  <div id=\"signupHeader\">");t.b("\n" + i);t.b("    <h2>REGISTER</h2>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <form id=\"signupForm\">");t.b("\n" + i);t.b("    <label>USERNAME:</label>");t.b("\n" + i);t.b("    <input id=\"ruser\" type=\"text\" placeholder=\"Username\">");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label>EMAIL:</label>");t.b("\n" + i);t.b("    <input id=\"remail\" type=\"email\" placeholder=\"Email\">");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label>PASSWORD:</label>");t.b("\n" + i);t.b("    <input id=\"rpass\" type=\"password\" placeholder=\"Password\">");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label>Re-Enter PASSWORD:</label>");t.b("\n" + i);t.b("    <input id=\"rerpass\" type=\"password\" placeholder=\"Password\">");t.b("\n" + i);t.b("    <span id=\"reenterMessage\"></span>");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label>PHONE:</label>");t.b("\n" + i);t.b("    <input id=\"rnumber\" type=\"text\" placeholder=\"Phone Number\">");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label>Text Alerts:</label>");t.b("\n" + i);t.b("    <input id=\"rtxt\" type=\"checkbox\" checked=\"checked\">");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label id=\"gender\">GENDER:</label>");t.b("\n" + i);t.b("    Male");t.b("\n" + i);t.b("    <input class=\"rgen\" type=\"radio\" name=\"Gender\" value=\"Male\"> Female");t.b("\n" + i);t.b("    <input class=\"rgen\" type=\"radio\" name=\"Gender\" value=\"Female\"> Other");t.b("\n" + i);t.b("    <input class=\"rgen\" type=\"radio\" name=\"Gender\" value=\"Other\">");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <select id=\"rage\" name=\"age\">");t.b("\n" + i);t.b("      <option value=\"age\">Enter Age</option>");t.b("\n" + i);t.b("      <option value=\"Under 16\">Under 16</option>");t.b("\n" + i);t.b("      <option value=\"16-19\">16-19</option>");t.b("\n" + i);t.b("      <option value=\"20's\">20's</option>");t.b("\n" + i);t.b("      <option value=\"30's\">30's</option>");t.b("\n" + i);t.b("      <option value=\"40's\">40's</option>");t.b("\n" + i);t.b("      <option value=\"50's\">50's</option>");t.b("\n" + i);t.b("      <option value=\"60+\">60 +</option>");t.b("\n" + i);t.b("    </select>");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label>Upload an Image:</label>");t.b("\n" + i);t.b("    <input id=\"rpic\" type=\"file\" enctype=\"multipart/form-data\">");t.b("\n" + i);t.b("    <button class=\"register\" type=\"submit\">Submit</button>");t.b("\n" + i);t.b("  </form>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"signupPage\">\n  <div id=\"signupHeader\">\n    <h2>REGISTER</h2>\n  </div>\n  <form id=\"signupForm\">\n    <label>USERNAME:</label>\n    <input id=\"ruser\" type=\"text\" placeholder=\"Username\">\n    </br>\n    <label>EMAIL:</label>\n    <input id=\"remail\" type=\"email\" placeholder=\"Email\">\n    </br>\n    <label>PASSWORD:</label>\n    <input id=\"rpass\" type=\"password\" placeholder=\"Password\">\n    </br>\n    <label>Re-Enter PASSWORD:</label>\n    <input id=\"rerpass\" type=\"password\" placeholder=\"Password\">\n    <span id=\"reenterMessage\"></span>\n    </br>\n    <label>PHONE:</label>\n    <input id=\"rnumber\" type=\"text\" placeholder=\"Phone Number\">\n    </br>\n    <label>Text Alerts:</label>\n    <input id=\"rtxt\" type=\"checkbox\" checked=\"checked\">\n    </br>\n    <label id=\"gender\">GENDER:</label>\n    Male\n    <input class=\"rgen\" type=\"radio\" name=\"Gender\" value=\"Male\"> Female\n    <input class=\"rgen\" type=\"radio\" name=\"Gender\" value=\"Female\"> Other\n    <input class=\"rgen\" type=\"radio\" name=\"Gender\" value=\"Other\">\n    </br>\n    <select id=\"rage\" name=\"age\">\n      <option value=\"age\">Enter Age</option>\n      <option value=\"Under 16\">Under 16</option>\n      <option value=\"16-19\">16-19</option>\n      <option value=\"20's\">20's</option>\n      <option value=\"30's\">30's</option>\n      <option value=\"40's\">40's</option>\n      <option value=\"50's\">50's</option>\n      <option value=\"60+\">60 +</option>\n    </select>\n    </br>\n    </br>\n    <label>Upload an Image:</label>\n    <input id=\"rpic\" type=\"file\" enctype=\"multipart/form-data\">\n    <button class=\"register\" type=\"submit\">Submit</button>\n  </form>\n</div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>");t.b("\n" + i);t.b("<div id=\"imageContainer\">");t.b("\n" + i);t.b("  <div id=\"over\">");t.b("\n" + i);t.b("    <p id=\"mission\"> Find the Game for you... </p>");t.b("\n" + i);t.b("    <button id=\"createMatchButton\" type=\"submit\">Create Match</button>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("<div id=\"upComing\">");t.b("\n" + i);t.b("  <div id=\"filter\">");t.b("\n" + i);t.b("    <select id=\"sport\">");t.b("\n" + i);t.b("      <option>Filter Sport</option>");t.b("\n" + i);t.b("      <option value=\"tennis\">Tennis</option>");t.b("\n" + i);t.b("      <option value=\"basketball\">Basketball</option>");t.b("\n" + i);t.b("      <option value=\"football\">Football</option>");t.b("\n" + i);t.b("      <option value=\"soccer\">Soccer</option>");t.b("\n" + i);t.b("      <option value=\"pickleball\">Pickleball</option>");t.b("\n" + i);t.b("      <option value=\"volleyball\">Volleyball</option>");t.b("\n" + i);t.b("      <option value=\"other\">Other</option>");t.b("\n" + i);t.b("      <option value=\"\">All</option>");t.b("\n" + i);t.b("    </select>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div id=\"areaSearch\">");t.b("\n" + i);t.b("    <input type=\"text\" id=\"areaInput\" placeholder=\"Zip Code\">");t.b("\n" + i);t.b("    <button type=\"submit\" id=\"submitArea\"> Search </button>");t.b("\n" + i);t.b("    <button type=\"submit\" id=\"area\"> Use Location </button>");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <div id=\"locating\"></div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <h2>Open Matches</h2> ");if(t.s(t.f("data",c,p,1),c,p,0,1064,1937,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");if(t.s(t.f("is_open",c,p,1),c,p,0,1077,1924,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("\n" + i);t.b("  <ul>");t.b("\n" + i);t.b("    <li id=\"sportImage\">");t.b("\n" + i);t.b("      <a href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\"><img src=\"");t.b(t.v(t.f("img_url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      </a>");t.b("\n" + i);t.b("      </br>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li class=\"description\"> <a href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("date",c,p,0)));t.b("</a> ");t.b(t.v(t.f("time",c,p,0)));t.b("\n" + i);t.b("      </br>");t.b("\n" + i);t.b("      ");t.b(t.v(t.f("distance",c,p,0)));t.b(" Miles </br>");t.b("\n" + i);t.b("      <a id=\"parkAnchor\" href=\"/parksDetail/");t.b(t.v(t.f("park",c,p,0)));t.b("\">");t.b(t.v(t.f("park_name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li id=\"skillProgress\"> Skill level");t.b("\n" + i);t.b("      <progress class=\"skill\" value=\"");t.b(t.v(t.f("skill_level",c,p,0)));t.b("\" max=\"100\">");t.b("\n" + i);t.b("      </progress>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li class=\"players\">");if(t.s(t.f("players",c,p,1),c,p,0,1566,1690,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("\n" + i);t.b("      <a href=\"/profile/");t.b(t.v(t.f("id",c,p,0)));t.b("\"><img src=\"");t.b(t.v(t.f("small_img",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      </a><a href=\"/profile/");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"name\">");t.b(t.v(t.f("username",c,p,0)));t.b("</a>");});c.pop();}t.b(" <img class=\"empty\" src=\"http://res.cloudinary.com/skill-match/image/upload/c_scale,w_50/v1451856777/Man_cqggt4.png\">");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li id=\"matchSubmit\"><a type=\"sumbit\" href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\"> Join </a>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("  </ul>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("  <div id=\"pagination\">");t.b("\n" + i);t.b("    <button id=\"prev\">Prev</button>");t.b("\n" + i);t.b("    <button id=\"next\">Next</button>");t.b("\n" + i);t.b("  </div>");return t.fl(); },partials: {}, subs: {  }}, "<link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>\n<div id=\"imageContainer\">\n  <div id=\"over\">\n    <p id=\"mission\"> Find the Game for you... </p>\n    <button id=\"createMatchButton\" type=\"submit\">Create Match</button>\n  </div>\n</div>\n<div id=\"upComing\">\n  <div id=\"filter\">\n    <select id=\"sport\">\n      <option>Filter Sport</option>\n      <option value=\"tennis\">Tennis</option>\n      <option value=\"basketball\">Basketball</option>\n      <option value=\"football\">Football</option>\n      <option value=\"soccer\">Soccer</option>\n      <option value=\"pickleball\">Pickleball</option>\n      <option value=\"volleyball\">Volleyball</option>\n      <option value=\"other\">Other</option>\n      <option value=\"\">All</option>\n    </select>\n  </div>\n  <div id=\"areaSearch\">\n    <input type=\"text\" id=\"areaInput\" placeholder=\"Zip Code\">\n    <button type=\"submit\" id=\"submitArea\"> Search </button>\n    <button type=\"submit\" id=\"area\"> Use Location </button>\n    </br>\n    <div id=\"locating\"></div>\n  </div>\n  <h2>Open Matches</h2> {{#data}} {{#is_open}}\n  <ul>\n    <li id=\"sportImage\">\n      <a href=\"/match/{{id}}\"><img src=\"{{img_url}}\">\n      </a>\n      </br>\n    </li>\n    <li class=\"description\"> <a href=\"/match/{{id}}\">{{date}}</a> {{time}}\n      </br>\n      {{distance}} Miles </br>\n      <a id=\"parkAnchor\" href=\"/parksDetail/{{park}}\">{{park_name}}</a>\n    </li>\n    <li id=\"skillProgress\"> Skill level\n      <progress class=\"skill\" value=\"{{skill_level}}\" max=\"100\">\n      </progress>\n    </li>\n    <li class=\"players\">{{#players}}\n      <a href=\"/profile/{{id}}\"><img src=\"{{small_img}}\">\n      </a><a href=\"/profile/{{id}}\" class=\"name\">{{username}}</a>{{/players}} <img class=\"empty\" src=\"http://res.cloudinary.com/skill-match/image/upload/c_scale,w_50/v1451856777/Man_cqggt4.png\">\n    </li>\n    <li id=\"matchSubmit\"><a type=\"sumbit\" href=\"/match/{{id}}\"> Join </a>\n    </li>\n  </ul>\n  {{/is_open}} {{/data}}\n  <div id=\"pagination\">\n    <button id=\"prev\">Prev</button>\n    <button id=\"next\">Next</button>\n  </div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"matchDetailContainer\">");t.b("\n" + i);if(t.s(t.f("data",c,p,1),c,p,0,43,1033,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <img id=\"sportImage\"src=\"");t.b(t.v(t.f("img_url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  <ul id=\"matchJoin\">");t.b("\n" + i);t.b("    <li id=\"matchSkill\"> Skill:<progress class=\"skill\" value=\"");t.b(t.v(t.f("skill_level",c,p,0)));t.b("\" max=\"100\"></progress></li>");t.b("\n" + i);t.b("    <li> ");t.b(t.v(t.f("date",c,p,0)));t.b("</li>");t.b("\n" + i);t.b("    <li> ");t.b(t.v(t.f("time",c,p,0)));t.b("</li>");t.b("\n" + i);t.b("    <li> ");t.b(t.v(t.f("sport",c,p,0)));t.b(" </li>");t.b("\n" + i);t.b("    <li><a href=\"/parksDetail/");t.b(t.v(t.f("park",c,p,0)));t.b("\" id=\"parkLink\"> ");t.b(t.v(t.f("park_name",c,p,0)));t.b(" </a></li>");t.b("\n" + i);t.b("    <li id=\"matchDescription\"> ");t.b(t.v(t.f("description",c,p,0)));t.b("</li>");t.b("\n" + i);t.b("    <li>Created By: <a class=\"createdName\" href=\"/profile/");t.b(t.v(t.f("creator",c,p,0)));t.b("\">");t.b(t.v(t.f("creator_name",c,p,0)));t.b("</a></li>");t.b("\n" + i);t.b("    </ul>");t.b("\n" + i);t.b("    ");if(t.s(t.f("players",c,p,1),c,p,0,538,623,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<a href=\"/profile/");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"name\"><img id=\"playerImage\" src=\"");t.b(t.v(t.f("small_img",c,p,0)));t.b("\"></a>");});c.pop();}t.b("\n" + i);t.b("    <button id=\"join\"> Join </button>");t.b("\n" + i);t.b("    <a id=\"confirm\" href=\"/\"> Confirm Match </a>");t.b("\n" + i);t.b("    <a id=\"decline\" href=\"/\"> Decline Match </a>");t.b("\n" + i);t.b("    <div id=\"cancelEdit\">");t.b("\n" + i);t.b("    <a id=\"cancel\" href=\"/\"> Cancel Match </a>");t.b("\n" + i);t.b("    <a id=\"update\" href=\"/updatematch/");t.b(t.v(t.f("id",c,p,0)));t.b("\">Edit Match</a>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <a id=\"leaveMatch\" href=\"/\"> Leave Match </a>");t.b("\n" + i);t.b("   <a id=\"feedBackMatch\" href=\"/feedback/");t.b(t.v(t.f("id",c,p,0)));t.b("\">FeedBack</a>");t.b("\n" + i);});c.pop();}t.b("   </div>");t.b("\n");t.b("\n" + i);t.b("   <!-- <button id=\"findMatch\">Find This Match</button>");t.b("\n" + i);t.b("   <iframe id=\"directions\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"\"></iframe>");t.b("\n" + i);t.b("   <input id=\"parkName\" type=\"hidden\" value=\"");t.b(t.v(t.f("park_name",c,p,0)));t.b("\"> -->");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"matchDetailContainer\">\n  {{#data}}\n  <img id=\"sportImage\"src=\"{{img_url}}\">\n  <ul id=\"matchJoin\">\n    <li id=\"matchSkill\"> Skill:<progress class=\"skill\" value=\"{{skill_level}}\" max=\"100\"></progress></li>\n    <li> {{date}}</li>\n    <li> {{time}}</li>\n    <li> {{sport}} </li>\n    <li><a href=\"/parksDetail/{{park}}\" id=\"parkLink\"> {{park_name}} </a></li>\n    <li id=\"matchDescription\"> {{description}}</li>\n    <li>Created By: <a class=\"createdName\" href=\"/profile/{{creator}}\">{{creator_name}}</a></li>\n    </ul>\n    {{#players}}<a href=\"/profile/{{id}}\" class=\"name\"><img id=\"playerImage\" src=\"{{small_img}}\"></a>{{/players}}\n    <button id=\"join\"> Join </button>\n    <a id=\"confirm\" href=\"/\"> Confirm Match </a>\n    <a id=\"decline\" href=\"/\"> Decline Match </a>\n    <div id=\"cancelEdit\">\n    <a id=\"cancel\" href=\"/\"> Cancel Match </a>\n    <a id=\"update\" href=\"/updatematch/{{id}}\">Edit Match</a>\n    </div>\n    <a id=\"leaveMatch\" href=\"/\"> Leave Match </a>\n   <a id=\"feedBackMatch\" href=\"/feedback/{{id}}\">FeedBack</a>\n    {{/data}}\n   </div>\n\n   <!-- <button id=\"findMatch\">Find This Match</button>\n   <iframe id=\"directions\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"\"></iframe>\n   <input id=\"parkName\" type=\"hidden\" value=\"{{park_name}}\"> -->", H);return T.render.apply(T, arguments); };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"UpMatchPage\">");t.b("\n" + i);if(t.s(t.f("data",c,p,1),c,p,0,32,1029,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <ul id=\"update\">");t.b("\n" + i);t.b("    <li> Sport:</li>");t.b("\n" + i);t.b("    <select id=\"addSport\" name=\"Sport\" value \"");t.b(t.v(t.f("sport",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <option value=\"Tennis\">Tennis</option>");t.b("\n" + i);t.b("      <option value=\"Basketball\">Basketball</option>");t.b("\n" + i);t.b("      <option value=\"Football\">Football</option>");t.b("\n" + i);t.b("      <option value=\"Soccer\">Soccer</option>");t.b("\n" + i);t.b("      <option value=\"Other\">Other</option>");t.b("\n" + i);t.b("    </select>");t.b("\n" + i);t.b("    <li> Description:</li>");t.b("\n" + i);t.b("    <textarea id=\"addDescription\" cols=\"30\" placeholder=\"What kind of match you are looking for?\">");t.b(t.v(t.f("description",c,p,0)));t.b("</textarea>");t.b("\n" + i);t.b("    <li> Date:</li>");t.b("\n" + i);t.b("    <input id=\"addDate\" type=\"date\" value=\"");t.b(t.v(t.f("date",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    <li> Time:</li>");t.b("\n" + i);t.b("    <input id=\"addTime\" type=\"time\" value=\"");t.b(t.v(t.f("time",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    <li> Skill: 1-100</li>");t.b("\n" + i);t.b("    <li><input id=\"addSkill\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" value='");t.b(t.v(t.f("skill_level",c,p,0)));t.b("'></li>");t.b("\n" + i);t.b("    <li> Park:</br>");t.b("\n" + i);t.b("      <select id=\"addPark\" name=\"park\">");t.b("\n" + i);t.b("        <option value=\"");t.b(t.v(t.f("park",c,p,0)));t.b("\">");t.b(t.v(t.f("park_name",c,p,0)));t.b("</option>");t.b("\n" + i);t.b("      </select>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li><a id=\"updateMatch\" href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\">Update Match</a></li>");t.b("\n" + i);t.b("  </ul>");t.b("\n" + i);});c.pop();}t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"UpMatchPage\">\n{{#data}}\n  <ul id=\"update\">\n    <li> Sport:</li>\n    <select id=\"addSport\" name=\"Sport\" value \"{{sport}}\">\n      <option value=\"Tennis\">Tennis</option>\n      <option value=\"Basketball\">Basketball</option>\n      <option value=\"Football\">Football</option>\n      <option value=\"Soccer\">Soccer</option>\n      <option value=\"Other\">Other</option>\n    </select>\n    <li> Description:</li>\n    <textarea id=\"addDescription\" cols=\"30\" placeholder=\"What kind of match you are looking for?\">{{description}}</textarea>\n    <li> Date:</li>\n    <input id=\"addDate\" type=\"date\" value=\"{{date}}\">\n    <li> Time:</li>\n    <input id=\"addTime\" type=\"time\" value=\"{{time}}\">\n    <li> Skill: 1-100</li>\n    <li><input id=\"addSkill\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" value='{{skill_level}}'></li>\n    <li> Park:</br>\n      <select id=\"addPark\" name=\"park\">\n        <option value=\"{{park}}\">{{park_name}}</option>\n      </select>\n    </li>\n    <li><a id=\"updateMatch\" href=\"/match/{{id}}\">Update Match</a></li>\n  </ul>\n  {{/data}}\n</div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"updatePage\">");t.b("\n" + i);t.b("  <div id=\"signupHeader\">");t.b("\n" + i);t.b("    <h2>Update Profile</h2>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);if(t.s(t.f("update",c,p,1),c,p,0,98,1663,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <form id=\"signupForm\">");t.b("\n" + i);t.b("    <label>USERNAME:</label>");t.b("\n" + i);t.b("    <input id=\"ruser\" type=\"text\" placeholder=\"Username\" value=\"");t.b(t.v(t.f("username",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label>EMAIL:</label>");t.b("\n" + i);t.b("    <input id=\"remail\" type=\"email\" placeholder=\"Email\" value=\"");t.b(t.v(t.f("email",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label>PASSWORD:</label>");t.b("\n" + i);t.b("    <input id=\"rpass\" type=\"password\" placeholder=\"Password\">");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label>Re-Enter PASSWORD:</label>");t.b("\n" + i);t.b("    <input id=\"rerpass\" type=\"password\" placeholder=\"Password\">");t.b("\n" + i);t.b("    <span id=\"reenterMessage\"></span>");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label>PHONE:</label>");t.b("\n" + i);t.b("    <input id=\"rnumber\" type=\"text\" placeholder=\"Phone Number\" value=\"");t.b(t.v(t.f("phone_number",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label>Text Alerts:</label>");t.b("\n" + i);t.b("    <input id=\"rtxt\" type=\"checkbox\" checked=\"checked\">");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label id=\"gender\">GENDER:</label>");t.b("\n" + i);t.b("    Male");t.b("\n" + i);t.b("    <input class=\"rgen\" type=\"radio\" name=\"Gender\" value=\"Male\"> Female");t.b("\n" + i);t.b("    <input class=\"rgen\" type=\"radio\" name=\"Gender\" value=\"Female\"> Other");t.b("\n" + i);t.b("    <input class=\"rgen\" type=\"radio\" name=\"Gender\" value=\"Other\">");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label>Age:</label>");t.b("\n" + i);t.b("    <select id=\"rage\" name=\"age\">");t.b("\n" + i);t.b("      <option value=\"Under 16\">Under 16</option>");t.b("\n" + i);t.b("      <option value=\"16-19\">16-19</option>");t.b("\n" + i);t.b("      <option value=\"20's\">20's</option>");t.b("\n" + i);t.b("      <option value=\"30's\">30's</option>");t.b("\n" + i);t.b("      <option value=\"40's\">40's</option>");t.b("\n" + i);t.b("      <option value=\"50's\">50's</option>");t.b("\n" + i);t.b("      <option value=\"60+\">60 +</option>");t.b("\n" + i);t.b("    </select>");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <label id=\"imageUpload\">Upload an Image:</label>");t.b("\n" + i);t.b("    <input id=\"user\" type=\"file\" placeholder=\"upload\">");t.b("\n" + i);t.b("    <button class=\"register\" type=\"submit\">Submit</button>");t.b("\n" + i);t.b("  </form>");t.b("\n" + i);});c.pop();}t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"updatePage\">\n  <div id=\"signupHeader\">\n    <h2>Update Profile</h2>\n  </div>\n  {{#update}}\n  <form id=\"signupForm\">\n    <label>USERNAME:</label>\n    <input id=\"ruser\" type=\"text\" placeholder=\"Username\" value=\"{{username}}\">\n    </br>\n    <label>EMAIL:</label>\n    <input id=\"remail\" type=\"email\" placeholder=\"Email\" value=\"{{email}}\">\n    </br>\n    <label>PASSWORD:</label>\n    <input id=\"rpass\" type=\"password\" placeholder=\"Password\">\n    </br>\n    <label>Re-Enter PASSWORD:</label>\n    <input id=\"rerpass\" type=\"password\" placeholder=\"Password\">\n    <span id=\"reenterMessage\"></span>\n    </br>\n    <label>PHONE:</label>\n    <input id=\"rnumber\" type=\"text\" placeholder=\"Phone Number\" value=\"{{phone_number}}\">\n    </br>\n    <label>Text Alerts:</label>\n    <input id=\"rtxt\" type=\"checkbox\" checked=\"checked\">\n    </br>\n    <label id=\"gender\">GENDER:</label>\n    Male\n    <input class=\"rgen\" type=\"radio\" name=\"Gender\" value=\"Male\"> Female\n    <input class=\"rgen\" type=\"radio\" name=\"Gender\" value=\"Female\"> Other\n    <input class=\"rgen\" type=\"radio\" name=\"Gender\" value=\"Other\">\n    </br>\n    <label>Age:</label>\n    <select id=\"rage\" name=\"age\">\n      <option value=\"Under 16\">Under 16</option>\n      <option value=\"16-19\">16-19</option>\n      <option value=\"20's\">20's</option>\n      <option value=\"30's\">30's</option>\n      <option value=\"40's\">40's</option>\n      <option value=\"50's\">50's</option>\n      <option value=\"60+\">60 +</option>\n    </select>\n    </br>\n    </br>\n    <label id=\"imageUpload\">Upload an Image:</label>\n    <input id=\"user\" type=\"file\" placeholder=\"upload\">\n    <button class=\"register\" type=\"submit\">Submit</button>\n  </form>\n  {{/update}}\n</div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"historyContainer\">");t.b("\n" + i);t.b("  <h2>Match History:</h2>");t.b("\n" + i);if(t.s(t.f("history",c,p,1),c,p,0,68,384,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("is_completed",c,p,1),c,p,0,90,364,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <img id=\"sportImage\"src=\"");t.b(t.v(t.f("img_url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("     	<ul id =\"test\">");t.b("\n" + i);t.b("        <li>This match was completed on, ");t.b(t.v(t.f("date",c,p,0)));t.b("</li>");t.b("\n" + i);t.b("        <li>");t.b(t.v(t.f("sport",c,p,0)));t.b("</li>");t.b("\n" + i);t.b("        <li>");t.b(t.v(t.f("park_name",c,p,0)));t.b("</li>");t.b("\n" + i);t.b("        <li><a id=\"goToFeedback\" href=\"/feedback/");t.b(t.v(t.f("id",c,p,0)));t.b("\"> Feedback </a></li>");t.b("\n" + i);t.b("      </ul>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"historyContainer\">\n  <h2>Match History:</h2>\n  {{#history}}\n    {{#is_completed}}\n      <img id=\"sportImage\"src=\"{{img_url}}\">\n     \t<ul id =\"test\">\n        <li>This match was completed on, {{date}}</li>\n        <li>{{sport}}</li>\n        <li>{{park_name}}</li>\n        <li><a id=\"goToFeedback\" href=\"/feedback/{{id}}\"> Feedback </a></li>\n      </ul>\n    {{/is_completed}}\n  {{/history}}\n</div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"profileContainer\">");t.b("\n" + i);if(t.s(t.f("data",c,p,1),c,p,0,39,682,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <button id=\"challenge\">challenge</button>");t.b("\n" + i);t.b("  <ul>");t.b("\n" + i);t.b("    <li><img id=\"userProfileImg\" src=\"");t.b(t.v(t.d("profile.pic_url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li class=\"profileDescription\"> Username: ");t.b(t.v(t.f("username",c,p,0)));t.b(" </li>");t.b("\n" + i);t.b("    <li class=\"profileDescription\"> Age: ");t.b(t.v(t.d("profile.age",c,p,0)));t.b(" </li>");t.b("\n" + i);t.b("    <li class=\"profileDescription\"> Gender: ");t.b(t.v(t.d("profile.gender",c,p,0)));t.b("</li>");t.b("\n" + i);t.b("    <li class=\"profileDescription\"> Sportsmanship:");t.b("\n" + i);t.b("      <progress class=\"skill\" value=\"");t.b(t.v(t.d("profile.sportsmanship",c,p,0)));t.b("\" max=\"100\"></progress>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li class=\"profileDescription\">");if(t.s(t.f("skill_set",c,p,1),c,p,0,553,647,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.f("sport",c,p,0)));t.b(" Skill:");t.b("\n" + i);t.b("      <progress class=\"skill\" value=\"");t.b(t.v(t.f("skill",c,p,0)));t.b("\" max=\"100\"></progress>");t.b("\n" + i);});c.pop();}t.b("    </li>");t.b("\n" + i);t.b("  </ul>");t.b("\n" + i);});c.pop();}t.b("</div>");t.b("\n");t.b("\n" + i);t.b("<div id=\"historyContainer\">");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"profileContainer\">\n  {{#data}}\n  <button id=\"challenge\">challenge</button>\n  <ul>\n    <li><img id=\"userProfileImg\" src=\"{{profile.pic_url}}\">\n    </li>\n    <li class=\"profileDescription\"> Username: {{username}} </li>\n    <li class=\"profileDescription\"> Age: {{profile.age}} </li>\n    <li class=\"profileDescription\"> Gender: {{profile.gender}}</li>\n    <li class=\"profileDescription\"> Sportsmanship:\n      <progress class=\"skill\" value=\"{{profile.sportsmanship}}\" max=\"100\"></progress>\n    </li>\n    <li class=\"profileDescription\">{{#skill_set}} {{sport}} Skill:\n      <progress class=\"skill\" value=\"{{skill}}\" max=\"100\"></progress>\n      {{/skill_set}}\n    </li>\n  </ul>\n  {{/data}}\n</div>\n\n<div id=\"historyContainer\">\n</div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"createMatchPage\">");t.b("\n" + i);t.b("  <h2> Create Game you would like to play </h2>");t.b("\n" + i);t.b("  <ul id=\"create\">");t.b("\n" + i);t.b("    <li> Sport:");t.b("\n" + i);t.b("      <select id=\"addSport\" name=\"Sport\">");t.b("\n" + i);t.b("        <option value=\"Tennis\">Tennis</option>");t.b("\n" + i);t.b("        <option value=\"Basketball\">Basketball</option>");t.b("\n" + i);t.b("        <option value=\"Football\">Football</option>");t.b("\n" + i);t.b("        <option value=\"Soccer\">Soccer</option>");t.b("\n" + i);t.b("        <option value=\"Pickleball\">Pickleball</option>");t.b("\n" + i);t.b("        <option value=\"Volleyball\">Volleyball</option>");t.b("\n" + i);t.b("        <option value=\"Other\">Other</option>");t.b("\n" + i);t.b("      </select>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li> Date: <input id=\"addDate\" type=\"date\"></li>");t.b("\n" + i);t.b("    <li> Time:<input id=\"addTime\" type=\"time\"></li>");t.b("\n" + i);t.b("    <li><textarea id=\"addDescription\" cols=\"30\" placeholder=\"What kind of match you are looking for?\"></textarea></li>");t.b("\n" + i);t.b("    <li> Park:<select id=\"addPark\" name=\"park\">");t.b("\n" + i);if(t.s(t.f("park",c,p,1),c,p,0,818,870,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <option value=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("name",c,p,0)));t.b("</option>");t.b("\n" + i);});c.pop();}t.b("    </select>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li> <label>Skill:</label><input id=\"addSkill\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" value=\"0\"></li>");t.b("\n" + i);t.b("  </ul>");t.b("\n" + i);t.b("  <button id=\"createMatch\" type=\"submit\">Submit</button>");t.b("\n" + i);t.b("</div>");t.b("\n");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"createMatchPage\">\n  <h2> Create Game you would like to play </h2>\n  <ul id=\"create\">\n    <li> Sport:\n      <select id=\"addSport\" name=\"Sport\">\n        <option value=\"Tennis\">Tennis</option>\n        <option value=\"Basketball\">Basketball</option>\n        <option value=\"Football\">Football</option>\n        <option value=\"Soccer\">Soccer</option>\n        <option value=\"Pickleball\">Pickleball</option>\n        <option value=\"Volleyball\">Volleyball</option>\n        <option value=\"Other\">Other</option>\n      </select>\n    </li>\n    <li> Date: <input id=\"addDate\" type=\"date\"></li>\n    <li> Time:<input id=\"addTime\" type=\"time\"></li>\n    <li><textarea id=\"addDescription\" cols=\"30\" placeholder=\"What kind of match you are looking for?\"></textarea></li>\n    <li> Park:<select id=\"addPark\" name=\"park\">\n    {{#park}}\n      <option value=\"{{id}}\">{{name}}</option>\n    {{/park}}\n    </select>\n    </li>\n    <li> <label>Skill:</label><input id=\"addSkill\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" value=\"0\"></li>\n  </ul>\n  <button id=\"createMatch\" type=\"submit\">Submit</button>\n</div>\n\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"feedbackContainer\">");t.b("\n" + i);t.b("  <form id=\"feedbackForm\">");t.b("\n" + i);t.b("    <h3>Skill level of player <span id=\"skillLevel\" class=\"info\"><img class=\"infoIcon\" src=\"http://res.cloudinary.com/skill-match/image/upload/v1452121841/info_skdfxy.png\"></span> </h3>");t.b("\n" + i);t.b("    <span id=\"skillLevelinfo\" class=\"hidden\">On a scale from 1 - 100 Please rate the players skill</span>");t.b("\n" + i);t.b("    <input id=\"addSkillFeedback\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" value=\"0\">");t.b("\n" + i);t.b("    <h3>Sportsmanship <span id='Sportsmanship'class=\"info\"><img class=\"infoIcon\" src=\"http://res.cloudinary.com/skill-match/image/upload/v1452121841/info_skdfxy.png\"></span></h3>");t.b("\n" + i);t.b("    <span id='Sportsmanshipinfo' class=\"hidden\">On a scale from 1 - 100 Please rate the players sportmanship</span>");t.b("\n" + i);t.b("    <input id=\"addFunFeedback\"  type=\"range\" min=\"0\" max=\"100\" step=\"1\" value=\"0\">");t.b("\n" + i);t.b("    <h3>Crowd level <span id=\"crowd\"class=\"info\"><img class=\"infoIcon\" src=\"http://res.cloudinary.com/skill-match/image/upload/v1452121841/info_skdfxy.png\"></span></h3>");t.b("\n" + i);t.b("    <span id=\"crowdinfo\" class=\"hidden\">On a scale from 1 - 5 Please tell us how crowded the park was</span>");t.b("\n" + i);t.b("    <input id=\"addCrowdFeedback\"  type=\"range\" min=\"0\" max=\"5\" step=\"1\" value=\"0\">");t.b("\n" + i);t.b("    </br>");t.b("\n" + i);t.b("    <select id=\"addPunctualityFeedback\" name=\"Punctuality\">");t.b("\n" + i);t.b("      <option value=\"On Time\">On Time</option>");t.b("\n" + i);t.b("      <option value=\"No Show\">No Show</option>");t.b("\n" + i);t.b("      <option value=\"Little bit late\">Little Late</option>");t.b("\n" + i);t.b("      <option value=\"Over 10 min late\">Over 10 mins late</option>");t.b("\n" + i);t.b("    </select>");t.b("\n" + i);t.b("  </form>");t.b("\n" + i);t.b("  <button id=\"submitFeedback\" type=\"sumbit\"> Feedback </button>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"feedbackContainer\">\n  <form id=\"feedbackForm\">\n    <h3>Skill level of player <span id=\"skillLevel\" class=\"info\"><img class=\"infoIcon\" src=\"http://res.cloudinary.com/skill-match/image/upload/v1452121841/info_skdfxy.png\"></span> </h3>\n    <span id=\"skillLevelinfo\" class=\"hidden\">On a scale from 1 - 100 Please rate the players skill</span>\n    <input id=\"addSkillFeedback\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" value=\"0\">\n    <h3>Sportsmanship <span id='Sportsmanship'class=\"info\"><img class=\"infoIcon\" src=\"http://res.cloudinary.com/skill-match/image/upload/v1452121841/info_skdfxy.png\"></span></h3>\n    <span id='Sportsmanshipinfo' class=\"hidden\">On a scale from 1 - 100 Please rate the players sportmanship</span>\n    <input id=\"addFunFeedback\"  type=\"range\" min=\"0\" max=\"100\" step=\"1\" value=\"0\">\n    <h3>Crowd level <span id=\"crowd\"class=\"info\"><img class=\"infoIcon\" src=\"http://res.cloudinary.com/skill-match/image/upload/v1452121841/info_skdfxy.png\"></span></h3>\n    <span id=\"crowdinfo\" class=\"hidden\">On a scale from 1 - 5 Please tell us how crowded the park was</span>\n    <input id=\"addCrowdFeedback\"  type=\"range\" min=\"0\" max=\"5\" step=\"1\" value=\"0\">\n    </br>\n    <select id=\"addPunctualityFeedback\" name=\"Punctuality\">\n      <option value=\"On Time\">On Time</option>\n      <option value=\"No Show\">No Show</option>\n      <option value=\"Little bit late\">Little Late</option>\n      <option value=\"Over 10 min late\">Over 10 mins late</option>\n    </select>\n  </form>\n  <button id=\"submitFeedback\" type=\"sumbit\"> Feedback </button>\n</div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>");t.b("\n");t.b("\n" + i);t.b("<div id=\"userprofile\">");t.b("\n" + i);if(t.s(t.f("user",c,p,1),c,p,0,129,657,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <ul>");t.b("\n" + i);t.b("    <li class=\"homeProfileImg\"><img src=\"");t.b(t.v(t.d("profile.pic_url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li class=\"userDes\"> Username: ");t.b(t.v(t.f("username",c,p,0)));t.b("\n" + i);t.b("      <br> Age: ");t.b(t.v(t.d("profile.age",c,p,0)));t.b("\n" + i);t.b("      <br> Gender: ");t.b(t.v(t.d("profile.gender",c,p,0)));t.b("\n" + i);t.b("      <br> Sportsmanship:");t.b("\n" + i);t.b("      <progress class=\"skill\" value=\"");t.b(t.v(t.d("profile.sportsmanship",c,p,0)));t.b("\" max=\"100\"></progress>");t.b("\n" + i);t.b("      <br> ");if(t.s(t.f("skill_set",c,p,1),c,p,0,465,559,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");t.b(t.v(t.f("sport",c,p,0)));t.b(" Skill:");t.b("\n" + i);t.b("      <progress class=\"skill\" value=\"");t.b(t.v(t.f("skill",c,p,0)));t.b("\" max=\"100\"></progress>");t.b("\n" + i);});c.pop();}t.b("    </li>");t.b("\n" + i);t.b("  </ul>");t.b("\n" + i);t.b("  <button id=\"createMatch\" type=\"submit\">Create Match</button>");t.b("\n" + i);});c.pop();}t.b("</div>");t.b("\n" + i);t.b("<div id=\"youMatches\">");t.b("\n" + i);t.b("<div id=\"upcoming\">");t.b("\n" + i);if(t.s(t.f("data",c,p,1),c,p,0,729,1590,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("is_confirmed",c,p,1),c,p,0,747,1572,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <h2>Upcoming</h2>");t.b("\n" + i);t.b("    <ul>");t.b("\n" + i);t.b("      <li>");t.b("\n" + i);t.b("        <a href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\"><img id=\"sportImage\" src=\"");t.b(t.v(t.f("img_url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("      <a href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\" id=\"dateHome\">");t.b("\n" + i);t.b("        <li> ");t.b(t.v(t.f("date",c,p,0)));t.b("</li>");t.b("\n" + i);t.b("      </a>");t.b("\n" + i);t.b("      <li> ");t.b(t.v(t.f("time",c,p,0)));t.b("</br>");t.b("\n" + i);t.b("        ");t.b(t.v(t.f("sport",c,p,0)));t.b("</br>");t.b("\n" + i);t.b("        <a class=\"parkslink\" href=\"/parksDetail/");t.b(t.v(t.f("park",c,p,0)));t.b("\">");t.b(t.v(t.f("park_name",c,p,0)));t.b("</a> </li>");t.b("\n" + i);t.b("      <li> Created By: <a id=\"profileName\" href=\"/profile/");t.b(t.v(t.f("creator",c,p,0)));t.b("\"> ");t.b(t.v(t.f("creator_name",c,p,0)));t.b(" </a> </li>");t.b("\n" + i);t.b("      <li> <a id=\"matchDetail\" type=\"sumbit\" href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\"> Details </a> </li>");t.b("\n" + i);t.b("      <li id=\"skillProgressHome\"> Skill Level");t.b("\n" + i);t.b("        <progress class=\"skill\" value=\"");t.b(t.v(t.f("skill_level",c,p,0)));t.b("\" max=\"100\"></progress>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("      <li class=\"playing\">");if(t.s(t.f("players",c,p,1),c,p,0,1460,1540,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<img src=\"");t.b(t.v(t.f("small_img",c,p,0)));t.b("\"><a href=\"/profile/");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"name\">");t.b(t.v(t.f("username",c,p,0)));t.b("</a>");});c.pop();}t.b("</li>");t.b("\n" + i);t.b("    </ul>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("  </div>");t.b("\n" + i);t.b("  <div id=\"pending\">");t.b("\n" + i);if(t.s(t.f("data",c,p,1),c,p,0,1643,2514,"{{ }}")){t.rs(c,p,function(c,p,t){if(!t.s(t.f("is_confirmed",c,p,1),c,p,1,0,0,"")){t.b("    <h2>Open Matches</h2>");t.b("\n" + i);t.b("    <ul>");t.b("\n" + i);t.b("      <li>");t.b("\n" + i);t.b("        <a href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\"><img id=\"sportImage\" src=\"");t.b(t.v(t.f("img_url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("      <a href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\" id=\"dateHome\">");t.b("\n" + i);t.b("        <li> ");t.b(t.v(t.f("date",c,p,0)));t.b("</li>");t.b("\n" + i);t.b("      </a>");t.b("\n" + i);t.b("      <li> ");t.b(t.v(t.f("time",c,p,0)));t.b("</br>");t.b("\n" + i);t.b("        ");t.b(t.v(t.f("sport",c,p,0)));t.b("</br>");t.b("\n" + i);t.b("        <a class=\"parkslink\" href=\"/parksDetail/");t.b(t.v(t.f("park",c,p,0)));t.b("\">");t.b(t.v(t.f("park_name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("      <li> Created By: <a id=\"profileName\" href=\"/profile/");t.b(t.v(t.f("creator",c,p,0)));t.b("\"> ");t.b(t.v(t.f("creator_name",c,p,0)));t.b(" </a> </li>");t.b("\n" + i);t.b("      <li> <a id=\"matchDetail\" type=\"sumbit\" href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\"> Details </a> </li>");t.b("\n" + i);t.b("      <li id=\"skillProgressHome\"> Skill Level");t.b("\n" + i);t.b("        <progress class=\"skill\" value=\"");t.b(t.v(t.f("skill_level",c,p,0)));t.b("\" max=\"100\"></progress>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("      <li class=\"playing\">");if(t.s(t.f("players",c,p,1),c,p,0,2384,2464,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<img src=\"");t.b(t.v(t.f("small_img",c,p,0)));t.b("\"><a href=\"/profile/");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"name\">");t.b(t.v(t.f("username",c,p,0)));t.b("</a>");});c.pop();}t.b("</li>");t.b("\n" + i);t.b("    </ul>");t.b("\n" + i);};});c.pop();}t.b("  </div>");t.b("\n" + i);t.b("  <div id=\"history\">");t.b("\n" + i);if(t.s(t.f("data",c,p,1),c,p,0,2567,3515,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("is_completed",c,p,1),c,p,0,2585,3497,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <h2>History</h2>");t.b("\n" + i);t.b("    <ul>");t.b("\n" + i);t.b("      <li>");t.b("\n" + i);t.b("        <a href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\"><img id=\"sportImage\" src=\"");t.b(t.v(t.f("img_url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("      <a href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\" id=\"dateHome\">");t.b("\n" + i);t.b("        <li> ");t.b(t.v(t.f("date",c,p,0)));t.b("</li>");t.b("\n" + i);t.b("      </a>");t.b("\n" + i);t.b("      <li> ");t.b(t.v(t.f("time",c,p,0)));t.b("</br>");t.b("\n" + i);t.b("        ");t.b(t.v(t.f("sport",c,p,0)));t.b("</br>");t.b("\n" + i);t.b("        <a class=\"parkslink\" href=\"/parksDetail/");t.b(t.v(t.f("park",c,p,0)));t.b("\">");t.b(t.v(t.f("park_name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("      <li> Created By: <a id=\"profileName\" href=\"/profile/");t.b(t.v(t.f("creator",c,p,0)));t.b("\"> ");t.b(t.v(t.f("creator_name",c,p,0)));t.b(" </a> </li>");t.b("\n" + i);t.b("      <li> <a id=\"matchDetail\" type=\"sumbit\" href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\"> Details </a> </li>");t.b("\n" + i);t.b("      <li id=\"skillProgressHome\"> Skill Level");t.b("\n" + i);t.b("        <progress class=\"skill\" value=\"");t.b(t.v(t.f("skill_level",c,p,0)));t.b("\" max=\"100\"></progress>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("      <li class=\"playing\">");if(t.s(t.f("players",c,p,1),c,p,0,3303,3383,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<img src=\"");t.b(t.v(t.f("small_img",c,p,0)));t.b("\"><a href=\"/profile/");t.b(t.v(t.f("id",c,p,0)));t.b("\" class=\"name\">");t.b(t.v(t.f("username",c,p,0)));t.b("</a>");});c.pop();}t.b("</li>");t.b("\n" + i);t.b("      <li><a id=\"goToFeedback\" href=\"/feedback/");t.b(t.v(t.f("id",c,p,0)));t.b("\"> Feedback </a>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("    </ul>");t.b("\n" + i);});c.pop();}});c.pop();}t.b("  </div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>\n\n<div id=\"userprofile\">\n  {{#user}}\n  <ul>\n    <li class=\"homeProfileImg\"><img src=\"{{profile.pic_url}}\">\n    </li>\n    <li class=\"userDes\"> Username: {{username}}\n      <br> Age: {{profile.age}}\n      <br> Gender: {{profile.gender}}\n      <br> Sportsmanship:\n      <progress class=\"skill\" value=\"{{profile.sportsmanship}}\" max=\"100\"></progress>\n      <br> {{#skill_set}} {{sport}} Skill:\n      <progress class=\"skill\" value=\"{{skill}}\" max=\"100\"></progress>\n      {{/skill_set}}\n    </li>\n  </ul>\n  <button id=\"createMatch\" type=\"submit\">Create Match</button>\n  {{/user}}\n</div>\n<div id=\"youMatches\">\n<div id=\"upcoming\">\n    {{#data}} {{#is_confirmed}}\n    <h2>Upcoming</h2>\n    <ul>\n      <li>\n        <a href=\"/match/{{id}}\"><img id=\"sportImage\" src=\"{{img_url}}\">\n        </a>\n      </li>\n      <a href=\"/match/{{id}}\" id=\"dateHome\">\n        <li> {{date}}</li>\n      </a>\n      <li> {{time}}</br>\n        {{sport}}</br>\n        <a class=\"parkslink\" href=\"/parksDetail/{{park}}\">{{park_name}}</a> </li>\n      <li> Created By: <a id=\"profileName\" href=\"/profile/{{creator}}\"> {{creator_name}} </a> </li>\n      <li> <a id=\"matchDetail\" type=\"sumbit\" href=\"/match/{{id}}\"> Details </a> </li>\n      <li id=\"skillProgressHome\"> Skill Level\n        <progress class=\"skill\" value=\"{{skill_level}}\" max=\"100\"></progress>\n      </li>\n      <li class=\"playing\">{{#players}}<img src=\"{{small_img}}\"><a href=\"/profile/{{id}}\" class=\"name\">{{username}}</a>{{/players}}</li>\n    </ul>\n    {{/is_confirmed}} {{/data}}\n  </div>\n  <div id=\"pending\">\n    {{#data}} {{^is_confirmed}}\n    <h2>Open Matches</h2>\n    <ul>\n      <li>\n        <a href=\"/match/{{id}}\"><img id=\"sportImage\" src=\"{{img_url}}\">\n        </a>\n      </li>\n      <a href=\"/match/{{id}}\" id=\"dateHome\">\n        <li> {{date}}</li>\n      </a>\n      <li> {{time}}</br>\n        {{sport}}</br>\n        <a class=\"parkslink\" href=\"/parksDetail/{{park}}\">{{park_name}}</a>\n      </li>\n      <li> Created By: <a id=\"profileName\" href=\"/profile/{{creator}}\"> {{creator_name}} </a> </li>\n      <li> <a id=\"matchDetail\" type=\"sumbit\" href=\"/match/{{id}}\"> Details </a> </li>\n      <li id=\"skillProgressHome\"> Skill Level\n        <progress class=\"skill\" value=\"{{skill_level}}\" max=\"100\"></progress>\n      </li>\n      <li class=\"playing\">{{#players}}<img src=\"{{small_img}}\"><a href=\"/profile/{{id}}\" class=\"name\">{{username}}</a>{{/players}}</li>\n    </ul>\n    {{/is_confirmed}} {{/data}}\n  </div>\n  <div id=\"history\">\n    {{#data}} {{#is_completed}}\n    <h2>History</h2>\n    <ul>\n      <li>\n        <a href=\"/match/{{id}}\"><img id=\"sportImage\" src=\"{{img_url}}\">\n        </a>\n      </li>\n      <a href=\"/match/{{id}}\" id=\"dateHome\">\n        <li> {{date}}</li>\n      </a>\n      <li> {{time}}</br>\n        {{sport}}</br>\n        <a class=\"parkslink\" href=\"/parksDetail/{{park}}\">{{park_name}}</a>\n      </li>\n      <li> Created By: <a id=\"profileName\" href=\"/profile/{{creator}}\"> {{creator_name}} </a> </li>\n      <li> <a id=\"matchDetail\" type=\"sumbit\" href=\"/match/{{id}}\"> Details </a> </li>\n      <li id=\"skillProgressHome\"> Skill Level\n        <progress class=\"skill\" value=\"{{skill_level}}\" max=\"100\"></progress>\n      </li>\n      <li class=\"playing\">{{#players}}<img src=\"{{small_img}}\"><a href=\"/profile/{{id}}\" class=\"name\">{{username}}</a>{{/players}}</li>\n      <li><a id=\"goToFeedback\" href=\"/feedback/{{id}}\"> Feedback </a>\n      </li>\n    </ul>\n    {{/is_completed}} {{/data}}\n  </div>\n</div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"parksContainer\">");t.b("\n" + i);t.b("  <button id=\"locate\">Use my location</button>");t.b("\n" + i);t.b("  <form id=\"searchForm\">");t.b("\n" + i);t.b("    <input id=\"parkSearch\" type=\"search\" placeholder=\"Search by zip code or park\">");t.b("\n" + i);t.b("    <button id=\"searchPark\" type=\"submit\">Search</button>");t.b("\n" + i);t.b("  </form>");t.b("\n" + i);if(t.s(t.f("data",c,p,1),c,p,0,260,1216,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <ul class=\"parks\">");t.b("\n" + i);t.b("    <li class=\"googleMaps\">");t.b("\n" + i);t.b("      <iframe  width=\"300\" height=\"300\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDUAqVfbZzmCDb_JkQiXhGJ0wrIZJoaxfQ");t.b("\n" + i);t.b("        &q=");t.b(t.v(t.f("name",c,p,0)));t.b("+");t.b(t.v(t.f("display_address3",c,p,0)));t.b("&zoom=12\">");t.b("\n" + i);t.b("      </iframe>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li class=\"parkPic\"><img class=\"parksImage\" src=\"");t.b(t.v(t.f("image_url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      </br>");t.b(t.v(t.f("display_address1",c,p,0)));t.b("</br> ");t.b(t.v(t.f("display_address3",c,p,0)));t.b("</br>");t.b(t.v(t.f("distance",c,p,0)));t.b(" Miles</li>");t.b("\n" + i);t.b("    <li class=\"parkMatch\"><a type=\"submit\" href=\"/parkCreateMatch/");t.b(t.v(t.f("id",c,p,0)));t.b("\">Create Match</a>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li class=\"parkDet\">");t.b("\n" + i);t.b("      <div class=\"parkName\"><a href=\"/parksDetail/");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      </br><img src=\"");t.b(t.v(t.f("rating_img_url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      </br><a class=\"yelpReview external\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\"> Yelp Park Review</a>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li class=\"availableSports\">");t.b("\n" + i);t.b("    <p>Available </br>Sports</p>");t.b("\n" + i);if(t.s(t.f("court_set",c,p,1),c,p,0,1132,1181,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <img class=\"sportPic\"src=\"");t.b(t.v(t.f("img_url",c,p,0)));t.b("\">");t.b("\n" + i);});c.pop();}t.b("    </li>");t.b("\n" + i);t.b("  </ul>");t.b("\n" + i);});c.pop();}t.b("</div>");t.b("\n" + i);t.b("<button id=\"backPark\"> Back </button>");t.b("\n" + i);t.b("<button id=\"nextPark\"> Next </button>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"parksContainer\">\n  <button id=\"locate\">Use my location</button>\n  <form id=\"searchForm\">\n    <input id=\"parkSearch\" type=\"search\" placeholder=\"Search by zip code or park\">\n    <button id=\"searchPark\" type=\"submit\">Search</button>\n  </form>\n  {{#data}}\n  <ul class=\"parks\">\n    <li class=\"googleMaps\">\n      <iframe  width=\"300\" height=\"300\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDUAqVfbZzmCDb_JkQiXhGJ0wrIZJoaxfQ\n        &q={{name}}+{{display_address3}}&zoom=12\">\n      </iframe>\n    </li>\n    <li class=\"parkPic\"><img class=\"parksImage\" src=\"{{image_url}}\">\n      </br>{{display_address1}}</br> {{display_address3}}</br>{{distance}} Miles</li>\n    <li class=\"parkMatch\"><a type=\"submit\" href=\"/parkCreateMatch/{{id}}\">Create Match</a>\n    </li>\n    <li class=\"parkDet\">\n      <div class=\"parkName\"><a href=\"/parksDetail/{{id}}\">{{name}}</a>\n      </div>\n      </br><img src=\"{{rating_img_url}}\">\n      </br><a class=\"yelpReview external\" href=\"{{url}}\"> Yelp Park Review</a>\n    </li>\n    <li class=\"availableSports\">\n    <p>Available </br>Sports</p>\n    {{#court_set}}\n    <img class=\"sportPic\"src=\"{{img_url}}\">\n    {{/court_set}}\n    </li>\n  </ul>\n  {{/data}}\n</div>\n<button id=\"backPark\"> Back </button>\n<button id=\"nextPark\"> Next </button>", H);return T.render.apply(T, arguments); };

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"parksPage\">");t.b("\n" + i);if(t.s(t.f("data",c,p,1),c,p,0,32,2615,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div id=\"parksDetail\">");t.b("\n" + i);t.b("    <ul id=\"parksProfile\">");t.b("\n" + i);t.b("      <li>");t.b("\n" + i);t.b("        <iframe id=\"googleMaps2\" width=\"225\" height=\"225\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDUAqVfbZzmCDb_JkQiXhGJ0wrIZJoaxfQ");t.b("\n" + i);t.b("          &q=");t.b(t.v(t.f("name",c,p,0)));t.b("+");t.b(t.v(t.f("display_address3",c,p,0)));t.b("&zoom=12\">");t.b("\n" + i);t.b("        </iframe>");t.b("\n" + i);t.b("         <li class=\"details\">");t.b("\n" + i);t.b("        <h3 class=\"parkName\">");t.b(t.v(t.f("name",c,p,0)));t.b("</h3>");t.b("\n" + i);t.b("        <p class=\"parkAddress\">");t.b(t.v(t.f("display_address1",c,p,0)));t.b(" </br> ");t.b(t.v(t.f("display_address2",c,p,0)));t.b(" </br> ");t.b(t.v(t.f("display_address3",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("        </br>");t.b("\n" + i);t.b("        <p class=\"yelp\"><img id=\"rateStars\"src=\"");t.b(t.v(t.f("rating_img_url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("        </p>");t.b("\n" + i);t.b("        </br>");t.b("\n" + i);t.b("        <a class=\"yelp external\" id=\"yelpReview\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\"> Yelp Park Review</a>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("      <li class=\"available\">");t.b("\n" + i);t.b("      <p>Available</br>Sports</p>");t.b("\n" + i);if(t.s(t.f("court_set",c,p,1),c,p,0,836,903,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <img class=\"sportIcon\" src=\"");t.b(t.v(t.f("small_sport_img",c,p,0)));t.b("\" />");t.b("\n" + i);});c.pop();}t.b("      </li>");t.b("\n" + i);t.b("      <li>");t.b("\n" + i);t.b("        <dialog open class='hidden'>");t.b("\n" + i);t.b("          <form class=\"addSport\">");t.b("\n" + i);t.b("            <select class=\"addNewParkSport\" placeholder=\"Add New Sport\">");t.b("\n" + i);t.b("              <option value=\"Tennis\">Tennis</option>");t.b("\n" + i);t.b("              <option value=\"Football\">Footballl</option>");t.b("\n" + i);t.b("              <option value=\"Soccer\">Soccer</option>");t.b("\n" + i);t.b("              <option value=\"Basketball\">Basketball</option>");t.b("\n" + i);t.b("              <option value=\"Pickleball\">Pickleball</option>");t.b("\n" + i);t.b("            </select>");t.b("\n" + i);t.b("            <label>Optional</label>");t.b("\n" + i);t.b("            <input type=\"text\" class=\"addOtherParkSport\" placeholder=\"Add other sport\">");t.b("\n" + i);t.b("            <input type=\"text\" class=\"addNumCourts\" placeholder=\"Number of courts\">");t.b("\n" + i);t.b("          </form>");t.b("\n" + i);t.b("          <button type=\"submit\" class=\"createCourtButton\">Add Sport</button>");t.b("\n" + i);t.b("          <button class=\"close\">x</button>");t.b("\n" + i);t.b("        </dialog>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("    </ul>");t.b("\n" + i);t.b("    <button id=\"createCourt\">Add Sport</button>");t.b("\n" + i);t.b("    <a id=\"parkMatch\" type=\"submit\" href=\"/parkCreateMatch/");t.b(t.v(t.f("id",c,p,0)));t.b("\">Create Match</a>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <h2> Open Matches </h2> ");if(t.s(t.f("match_set",c,p,1),c,p,0,1960,2600,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");if(t.s(t.f("is_open",c,p,1),c,p,0,1973,2587,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("\n" + i);t.b("  <ul class=\"parkMatches\">");t.b("\n" + i);t.b("    <li id=\"sportImage\">");t.b("\n" + i);t.b("      <a href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\"><img src=\"");t.b(t.v(t.f("img_url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      </a>");t.b("\n" + i);t.b("      </br>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li class=\"description\"> <a href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("date",c,p,0)));t.b("</a> ");t.b(t.v(t.f("time",c,p,0)));t.b("\n" + i);t.b("      </br>");t.b("\n" + i);t.b("      <li id=\"skillProgress\"> Skill level");t.b("\n" + i);t.b("        <progress class=\"skill\" value=\"");t.b(t.v(t.f("skill_level",c,p,0)));t.b("\" max=\"100\">");t.b("\n" + i);t.b("        </progress>");t.b("\n" + i);t.b("      </li>");t.b("\n" + i);t.b("      <li class=\"players\">");if(t.s(t.f("players",c,p,1),c,p,0,2379,2469,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("\n" + i);t.b("        <a href=\"/profile/");t.b(t.v(t.f("id",c,p,0)));t.b("\"><img class=\"smallImg\" src=\"");t.b(t.v(t.f("small_img",c,p,0)));t.b("\">");t.b("\n" + i);t.b("        </a>");});c.pop();}t.b("\n" + i);t.b("        <li class=\"matchSubmit\"><a type=\"sumbit\" href=\"/match/");t.b(t.v(t.f("id",c,p,0)));t.b("\"> Join </a>");t.b("\n" + i);t.b("        </li>");t.b("\n" + i);t.b("  </ul>");t.b("\n" + i);});c.pop();}});c.pop();}});c.pop();}t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"parksPage\">\n  {{#data}}\n  <div id=\"parksDetail\">\n    <ul id=\"parksProfile\">\n      <li>\n        <iframe id=\"googleMaps2\" width=\"225\" height=\"225\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDUAqVfbZzmCDb_JkQiXhGJ0wrIZJoaxfQ\n          &q={{name}}+{{display_address3}}&zoom=12\">\n        </iframe>\n         <li class=\"details\">\n        <h3 class=\"parkName\">{{name}}</h3>\n        <p class=\"parkAddress\">{{display_address1}} </br> {{display_address2}} </br> {{display_address3}}</p>\n        </br>\n        <p class=\"yelp\"><img id=\"rateStars\"src=\"{{rating_img_url}}\">\n        </p>\n        </br>\n        <a class=\"yelp external\" id=\"yelpReview\" href=\"{{url}}\"> Yelp Park Review</a>\n      </li>\n      </li>\n      <li class=\"available\">\n      <p>Available</br>Sports</p>\n      {{#court_set}}\n        <img class=\"sportIcon\" src=\"{{small_sport_img}}\" />\n      {{/court_set}}\n      </li>\n      <li>\n        <dialog open class='hidden'>\n          <form class=\"addSport\">\n            <select class=\"addNewParkSport\" placeholder=\"Add New Sport\">\n              <option value=\"Tennis\">Tennis</option>\n              <option value=\"Football\">Footballl</option>\n              <option value=\"Soccer\">Soccer</option>\n              <option value=\"Basketball\">Basketball</option>\n              <option value=\"Pickleball\">Pickleball</option>\n            </select>\n            <label>Optional</label>\n            <input type=\"text\" class=\"addOtherParkSport\" placeholder=\"Add other sport\">\n            <input type=\"text\" class=\"addNumCourts\" placeholder=\"Number of courts\">\n          </form>\n          <button type=\"submit\" class=\"createCourtButton\">Add Sport</button>\n          <button class=\"close\">x</button>\n        </dialog>\n      </li>\n    </ul>\n    <button id=\"createCourt\">Add Sport</button>\n    <a id=\"parkMatch\" type=\"submit\" href=\"/parkCreateMatch/{{id}}\">Create Match</a>\n  </div>\n  <h2> Open Matches </h2> {{#match_set}} {{#is_open}}\n  <ul class=\"parkMatches\">\n    <li id=\"sportImage\">\n      <a href=\"/match/{{id}}\"><img src=\"{{img_url}}\">\n      </a>\n      </br>\n    </li>\n    <li class=\"description\"> <a href=\"/match/{{id}}\">{{date}}</a> {{time}}\n      </br>\n      <li id=\"skillProgress\"> Skill level\n        <progress class=\"skill\" value=\"{{skill_level}}\" max=\"100\">\n        </progress>\n      </li>\n      <li class=\"players\">{{#players}}\n        <a href=\"/profile/{{id}}\"><img class=\"smallImg\" src=\"{{small_img}}\">\n        </a>{{/players}}\n        <li class=\"matchSubmit\"><a type=\"sumbit\" href=\"/match/{{id}}\"> Join </a>\n        </li>\n  </ul>\n  {{/is_open}} {{/match_set}} {{/data}}\n</div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"parkMatchPage\">");t.b("\n" + i);t.b("  <h2> Create Game you would like to play </h2>");t.b("\n" + i);t.b("  <ul id=\"parkCreate\">");t.b("\n" + i);t.b("    <li> Sport:");t.b("\n" + i);t.b("      <select id=\"addParkSport\" name=\"Sport\">");t.b("\n" + i);t.b("        <option value=\"Tennis\">Tennis</option>");t.b("\n" + i);t.b("        <option value=\"Basketball\">Basketball</option>");t.b("\n" + i);t.b("        <option value=\"Football\">Football</option>");t.b("\n" + i);t.b("        <option value=\"Soccer\">Soccer</option>");t.b("\n" + i);t.b("        <option value=\"Pickleball\">Pickleball</option>");t.b("\n" + i);t.b("        <option value=\"Volleyball\">Volleyball</option>");t.b("\n" + i);t.b("        <option value=\"Other\">Other</option>");t.b("\n" + i);t.b("      </select>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li> Date:");t.b("\n" + i);t.b("      <input id=\"addParkDate\" type=\"date\">");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li> Time:");t.b("\n" + i);t.b("      <input id=\"addParkTime\" type=\"time\">");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li>");t.b("\n" + i);t.b("      <textarea id=\"addParkDescription\" cols=\"30\" placeholder=\"What kind of match are you looking for?\"></textarea>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li>");t.b("\n" + i);t.b("      <dialog open id=\"hiddenMessage\" class=\"hidden\">");t.b("\n" + i);t.b("        <p>Approximate desired skill-level</br> Fun / Semi-Tough / Tough</p>");t.b("\n" + i);t.b("      </dialog>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li> Park:");t.b("\n" + i);t.b("      <select id=\"addParkCreate\" name=\"park\">");t.b("\n" + i);if(t.s(t.f("park",c,p,1),c,p,0,1054,1112,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <option value=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("name",c,p,0)));t.b("</option>");t.b("\n" + i);});c.pop();}t.b("      </select>");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("    <li>");t.b("\n" + i);t.b("      <label id=\"skillInfo\"> <img id=\"infoIcon\" src=\"http://res.cloudinary.com/skill-match/image/upload/v1452121841/info_skdfxy.png\"> Skill:</label>");t.b("\n" + i);t.b("      <input id=\"addParkSkill\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" value=\"0\">");t.b("\n" + i);t.b("    </li>");t.b("\n" + i);t.b("  </ul>");t.b("\n" + i);t.b("  <button id=\"createParkMatches\" type=\"submit\">Submit</button>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"parkMatchPage\">\n  <h2> Create Game you would like to play </h2>\n  <ul id=\"parkCreate\">\n    <li> Sport:\n      <select id=\"addParkSport\" name=\"Sport\">\n        <option value=\"Tennis\">Tennis</option>\n        <option value=\"Basketball\">Basketball</option>\n        <option value=\"Football\">Football</option>\n        <option value=\"Soccer\">Soccer</option>\n        <option value=\"Pickleball\">Pickleball</option>\n        <option value=\"Volleyball\">Volleyball</option>\n        <option value=\"Other\">Other</option>\n      </select>\n    </li>\n    <li> Date:\n      <input id=\"addParkDate\" type=\"date\">\n    </li>\n    <li> Time:\n      <input id=\"addParkTime\" type=\"time\">\n    </li>\n    <li>\n      <textarea id=\"addParkDescription\" cols=\"30\" placeholder=\"What kind of match are you looking for?\"></textarea>\n    </li>\n    <li>\n      <dialog open id=\"hiddenMessage\" class=\"hidden\">\n        <p>Approximate desired skill-level</br> Fun / Semi-Tough / Tough</p>\n      </dialog>\n    </li>\n    <li> Park:\n      <select id=\"addParkCreate\" name=\"park\">\n        {{#park}}\n        <option value=\"{{id}}\">{{name}}</option>\n        {{/park}}\n      </select>\n    </li>\n    <li>\n      <label id=\"skillInfo\"> <img id=\"infoIcon\" src=\"http://res.cloudinary.com/skill-match/image/upload/v1452121841/info_skdfxy.png\"> Skill:</label>\n      <input id=\"addParkSkill\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" value=\"0\">\n    </li>\n  </ul>\n  <button id=\"createParkMatches\" type=\"submit\">Submit</button>\n</div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(41);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"createCourt\">");t.b("\n" + i);t.b("  <form>");t.b("\n" + i);t.b("    <select id=\"addNewParkSport\" placeholder=\"Add New Sport\">");t.b("\n" + i);t.b("      <option value=\"Tennis\">Tennis</option>");t.b("\n" + i);t.b("      <option value=\"Football\">Footballl</option>");t.b("\n" + i);t.b("      <option value=\"Soccer\">Soccer</option>");t.b("\n" + i);t.b("      <option value=\"Basketball\">Basketball</option>");t.b("\n" + i);t.b("      <option value=\"Pickleball\">Pickleball</option>");t.b("\n" + i);t.b("    </select>");t.b("\n" + i);t.b("    <label>Optional</label>");t.b("\n" + i);t.b("    <input type=\"text\" id=\"addOtherParkSport\" placeholder=\"Add other sport\">");t.b("\n" + i);t.b("    <input type=\"text\" id=\"addNumCourts\" placeholder=\"Add number of courts\">");t.b("\n" + i);t.b("  </form>");t.b("\n" + i);t.b("  <button type=\"submit\" id=\"createCourtButton\">Create Court</button>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"createCourt\">\n  <form>\n    <select id=\"addNewParkSport\" placeholder=\"Add New Sport\">\n      <option value=\"Tennis\">Tennis</option>\n      <option value=\"Football\">Footballl</option>\n      <option value=\"Soccer\">Soccer</option>\n      <option value=\"Basketball\">Basketball</option>\n      <option value=\"Pickleball\">Pickleball</option>\n    </select>\n    <label>Optional</label>\n    <input type=\"text\" id=\"addOtherParkSport\" placeholder=\"Add other sport\">\n    <input type=\"text\" id=\"addNumCourts\" placeholder=\"Add number of courts\">\n  </form>\n  <button type=\"submit\" id=\"createCourtButton\">Create Court</button>\n</div>", H);return T.render.apply(T, arguments); };

/***/ }
/******/ ]);