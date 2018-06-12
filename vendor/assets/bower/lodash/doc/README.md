# <a href="https://lodash.com/">lodash</a> <span>v4.2.1</span>

<!-- div class="toc-container" -->

<!-- div -->

## `Array`
* <a href="#_chunkarray-size0">`_.chunk`</a>
* <a href="#_compactarray">`_.compact`</a>
* <a href="#_concatarray-values">`_.concat`</a>
* <a href="#_differencearray-values">`_.difference`</a>
* <a href="#_differencebyarray-values-iteratee_identity">`_.differenceBy`</a>
* <a href="#_differencewitharray-values-comparator">`_.differenceWith`</a>
* <a href="#_droparray-n1">`_.drop`</a>
* <a href="#_droprightarray-n1">`_.dropRight`</a>
* <a href="#_droprightwhilearray-predicate_identity">`_.dropRightWhile`</a>
* <a href="#_dropwhilearray-predicate_identity">`_.dropWhile`</a>
* <a href="#_fillarray-value-start0-endarraylength">`_.fill`</a>
* <a href="#_findindexarray-predicate_identity">`_.findIndex`</a>
* <a href="#_findlastindexarray-predicate_identity">`_.findLastIndex`</a>
* <a href="#_headarray" class="alias">`_.first` -> `head`</a>
* <a href="#_flattenarray">`_.flatten`</a>
* <a href="#_flattendeeparray">`_.flattenDeep`</a>
* <a href="#_frompairspairs">`_.fromPairs`</a>
* <a href="#_headarray">`_.head`</a>
* <a href="#_indexofarray-value-fromindex0">`_.indexOf`</a>
* <a href="#_initialarray">`_.initial`</a>
* <a href="#_intersectionarrays">`_.intersection`</a>
* <a href="#_intersectionbyarrays-iteratee_identity">`_.intersectionBy`</a>
* <a href="#_intersectionwitharrays-comparator">`_.intersectionWith`</a>
* <a href="#_joinarray-separator-">`_.join`</a>
* <a href="#_lastarray">`_.last`</a>
* <a href="#_lastindexofarray-value-fromindexarraylength-1">`_.lastIndexOf`</a>
* <a href="#_pullarray-values">`_.pull`</a>
* <a href="#_pullallarray-values">`_.pullAll`</a>
* <a href="#_pullallbyarray-values-iteratee_identity">`_.pullAllBy`</a>
* <a href="#_pullatarray-indexes">`_.pullAt`</a>
* <a href="#_removearray-predicate_identity">`_.remove`</a>
* <a href="#_reverse">`_.reverse`</a>
* <a href="#_slicearray-start0-endarraylength">`_.slice`</a>
* <a href="#_sortedindexarray-value">`_.sortedIndex`</a>
* <a href="#_sortedindexbyarray-value-iteratee_identity">`_.sortedIndexBy`</a>
* <a href="#_sortedindexofarray-value">`_.sortedIndexOf`</a>
* <a href="#_sortedlastindexarray-value">`_.sortedLastIndex`</a>
* <a href="#_sortedlastindexbyarray-value-iteratee_identity">`_.sortedLastIndexBy`</a>
* <a href="#_sortedlastindexofarray-value">`_.sortedLastIndexOf`</a>
* <a href="#_sorteduniqarray">`_.sortedUniq`</a>
* <a href="#_sorteduniqbyarray-iteratee">`_.sortedUniqBy`</a>
* <a href="#_tailarray">`_.tail`</a>
* <a href="#_takearray-n1">`_.take`</a>
* <a href="#_takerightarray-n1">`_.takeRight`</a>
* <a href="#_takerightwhilearray-predicate_identity">`_.takeRightWhile`</a>
* <a href="#_takewhilearray-predicate_identity">`_.takeWhile`</a>
* <a href="#_unionarrays">`_.union`</a>
* <a href="#_unionbyarrays-iteratee_identity">`_.unionBy`</a>
* <a href="#_unionwitharrays-comparator">`_.unionWith`</a>
* <a href="#_uniqarray">`_.uniq`</a>
* <a href="#_uniqbyarray-iteratee_identity">`_.uniqBy`</a>
* <a href="#_uniqwitharray-comparator">`_.uniqWith`</a>
* <a href="#_unziparray">`_.unzip`</a>
* <a href="#_unzipwitharray-iteratee_identity">`_.unzipWith`</a>
* <a href="#_withoutarray-values">`_.without`</a>
* <a href="#_xorarrays">`_.xor`</a>
* <a href="#_xorbyarrays-iteratee_identity">`_.xorBy`</a>
* <a href="#_xorwitharrays-comparator">`_.xorWith`</a>
* <a href="#_ziparrays">`_.zip`</a>
* <a href="#_zipobjectprops-values">`_.zipObject`</a>
* <a href="#_zipobjectdeepprops-values">`_.zipObjectDeep`</a>
* <a href="#_zipwitharrays-iteratee_identity">`_.zipWith`</a>

<!-- /div -->

<!-- div -->

## `Collection`
* <a href="#_countbycollection-iteratee_identity">`_.countBy`</a>
* <a href="#_foreachcollection-iteratee_identity" class="alias">`_.each` -> `forEach`</a>
* <a href="#_foreachrightcollection-iteratee_identity" class="alias">`_.eachRight` -> `forEachRight`</a>
* <a href="#_everycollection-predicate_identity">`_.every`</a>
* <a href="#_filtercollection-predicate_identity">`_.filter`</a>
* <a href="#_findcollection-predicate_identity">`_.find`</a>
* <a href="#_findlastcollection-predicate_identity">`_.findLast`</a>
* <a href="#_flatmapcollection-iteratee_identity">`_.flatMap`</a>
* <a href="#_foreachcollection-iteratee_identity">`_.forEach`</a>
* <a href="#_foreachrightcollection-iteratee_identity">`_.forEachRight`</a>
* <a href="#_groupbycollection-iteratee_identity">`_.groupBy`</a>
* <a href="#_includescollection-value-fromindex0">`_.includes`</a>
* <a href="#_invokemapcollection-path-args">`_.invokeMap`</a>
* <a href="#_keybycollection-iteratee_identity">`_.keyBy`</a>
* <a href="#_mapcollection-iteratee_identity">`_.map`</a>
* <a href="#_orderbycollection-iteratees-_identity-orders">`_.orderBy`</a>
* <a href="#_partitioncollection-predicate_identity">`_.partition`</a>
* <a href="#_reducecollection-iteratee_identity-accumulator">`_.reduce`</a>
* <a href="#_reducerightcollection-iteratee_identity-accumulator">`_.reduceRight`</a>
* <a href="#_rejectcollection-predicate_identity">`_.reject`</a>
* <a href="#_samplecollection">`_.sample`</a>
* <a href="#_samplesizecollection-n0">`_.sampleSize`</a>
* <a href="#_shufflecollection">`_.shuffle`</a>
* <a href="#_sizecollection">`_.size`</a>
* <a href="#_somecollection-predicate_identity">`_.some`</a>
* <a href="#_sortbycollection-iteratees-_identity">`_.sortBy`</a>

<!-- /div -->

<!-- div -->

## `Date`
* <a href="#_now">`_.now`</a>

<!-- /div -->

<!-- div -->

## `Function`
* <a href="#_aftern-func">`_.after`</a>
* <a href="#_aryfunc-nfunclength">`_.ary`</a>
* <a href="#_beforen-func">`_.before`</a>
* <a href="#_bindfunc-thisarg-partials">`_.bind`</a>
* <a href="#_bindkeyobject-key-partials">`_.bindKey`</a>
* <a href="#_curryfunc-arityfunclength">`_.curry`</a>
* <a href="#_curryrightfunc-arityfunclength">`_.curryRight`</a>
* <a href="#_debouncefunc-wait0-options">`_.debounce`</a>
* <a href="#_deferfunc-args">`_.defer`</a>
* <a href="#_delayfunc-wait-args">`_.delay`</a>
* <a href="#_flipfunc">`_.flip`</a>
* <a href="#_memoizefunc-resolver">`_.memoize`</a>
* <a href="#_negatepredicate">`_.negate`</a>
* <a href="#_oncefunc">`_.once`</a>
* <a href="#_overargsfunc-transforms">`_.overArgs`</a>
* <a href="#_partialfunc-partials">`_.partial`</a>
* <a href="#_partialrightfunc-partials">`_.partialRight`</a>
* <a href="#_reargfunc-indexes">`_.rearg`</a>
* <a href="#_restfunc-startfunclength-1">`_.rest`</a>
* <a href="#_spreadfunc-start0">`_.spread`</a>
* <a href="#_throttlefunc-wait0-options">`_.throttle`</a>
* <a href="#_unaryfunc">`_.unary`</a>
* <a href="#_wrapvalue-wrapper">`_.wrap`</a>

<!-- /div -->

<!-- div -->

## `Lang`
* <a href="#_clonevalue">`_.clone`</a>
* <a href="#_clonedeepvalue">`_.cloneDeep`</a>
* <a href="#_clonedeepwithvalue-customizer">`_.cloneDeepWith`</a>
* <a href="#_clonewithvalue-customizer">`_.cloneWith`</a>
* <a href="#_eqvalue-other">`_.eq`</a>
* <a href="#_gtvalue-other">`_.gt`</a>
* <a href="#_gtevalue-other">`_.gte`</a>
* <a href="#_isargumentsvalue">`_.isArguments`</a>
* <a href="#_isarrayvalue">`_.isArray`</a>
* <a href="#_isarraylikevalue">`_.isArrayLike`</a>
* <a href="#_isarraylikeobjectvalue">`_.isArrayLikeObject`</a>
* <a href="#_isbooleanvalue">`_.isBoolean`</a>
* <a href="#_isdatevalue">`_.isDate`</a>
* <a href="#_iselementvalue">`_.isElement`</a>
* <a href="#_isemptyvalue">`_.isEmpty`</a>
* <a href="#_isequalvalue-other">`_.isEqual`</a>
* <a href="#_isequalwithvalue-other-customizer">`_.isEqualWith`</a>
* <a href="#_iserrorvalue">`_.isError`</a>
* <a href="#_isfinitevalue">`_.isFinite`</a>
* <a href="#_isfunctionvalue">`_.isFunction`</a>
* <a href="#_isintegervalue">`_.isInteger`</a>
* <a href="#_islengthvalue">`_.isLength`</a>
* <a href="#_ismatchobject-source">`_.isMatch`</a>
* <a href="#_ismatchwithobject-source-customizer">`_.isMatchWith`</a>
* <a href="#_isnanvalue">`_.isNaN`</a>
* <a href="#_isnativevalue">`_.isNative`</a>
* <a href="#_isnilvalue">`_.isNil`</a>
* <a href="#_isnullvalue">`_.isNull`</a>
* <a href="#_isnumbervalue">`_.isNumber`</a>
* <a href="#_isobjectvalue">`_.isObject`</a>
* <a href="#_isobjectlikevalue">`_.isObjectLike`</a>
* <a href="#_isplainobjectvalue">`_.isPlainObject`</a>
* <a href="#_isregexpvalue">`_.isRegExp`</a>
* <a href="#_issafeintegervalue">`_.isSafeInteger`</a>
* <a href="#_isstringvalue">`_.isString`</a>
* <a href="#_issymbolvalue">`_.isSymbol`</a>
* <a href="#_istypedarrayvalue">`_.isTypedArray`</a>
* <a href="#_isundefinedvalue">`_.isUndefined`</a>
* <a href="#_ltvalue-other">`_.lt`</a>
* <a href="#_ltevalue-other">`_.lte`</a>
* <a href="#_toarrayvalue">`_.toArray`</a>
* <a href="#_tointegervalue">`_.toInteger`</a>
* <a href="#_tolengthvalue">`_.toLength`</a>
* <a href="#_tonumbervalue">`_.toNumber`</a>
* <a href="#_toplainobjectvalue">`_.toPlainObject`</a>
* <a href="#_tosafeintegervalue">`_.toSafeInteger`</a>
* <a href="#_tostringvalue">`_.toString`</a>

<!-- /div -->

<!-- div -->

## `Math`
* <a href="#_addaugend-addend">`_.add`</a>
* <a href="#_ceilnumber-precision0">`_.ceil`</a>
* <a href="#_floornumber-precision0">`_.floor`</a>
* <a href="#_maxarray">`_.max`</a>
* <a href="#_maxbyarray-iteratee_identity">`_.maxBy`</a>
* <a href="#_meanarray">`_.mean`</a>
* <a href="#_minarray">`_.min`</a>
* <a href="#_minbyarray-iteratee_identity">`_.minBy`</a>
* <a href="#_roundnumber-precision0">`_.round`</a>
* <a href="#_subtractminuend-subtrahend">`_.subtract`</a>
* <a href="#_sumarray">`_.sum`</a>
* <a href="#_sumbyarray-iteratee_identity">`_.sumBy`</a>

<!-- /div -->

<!-- div -->

## `Number`
* <a href="#_clampnumber-lower-upper">`_.clamp`</a>
* <a href="#_inrangenumber-start0-end">`_.inRange`</a>
* <a href="#_randomlower0-upper1-floating">`_.random`</a>

<!-- /div -->

<!-- div -->

## `Object`
* <a href="#_assignobject-sources">`_.assign`</a>
* <a href="#_assigninobject-sources">`_.assignIn`</a>
* <a href="#_assigninwithobject-sources-customizer">`_.assignInWith`</a>
* <a href="#_assignwithobject-sources-customizer">`_.assignWith`</a>
* <a href="#_atobject-paths">`_.at`</a>
* <a href="#_createprototype-properties">`_.create`</a>
* <a href="#_defaultsobject-sources">`_.defaults`</a>
* <a href="#_defaultsdeepobject-sources">`_.defaultsDeep`</a>
* <a href="#_assigninobject-sources" class="alias">`_.extend` -> `assignIn`</a>
* <a href="#_assigninwithobject-sources-customizer" class="alias">`_.extendWith` -> `assignInWith`</a>
* <a href="#_findkeyobject-predicate_identity">`_.findKey`</a>
* <a href="#_findlastkeyobject-predicate_identity">`_.findLastKey`</a>
* <a href="#_forinobject-iteratee_identity">`_.forIn`</a>
* <a href="#_forinrightobject-iteratee_identity">`_.forInRight`</a>
* <a href="#_forownobject-iteratee_identity">`_.forOwn`</a>
* <a href="#_forownrightobject-iteratee_identity">`_.forOwnRight`</a>
* <a href="#_functionsobject">`_.functions`</a>
* <a href="#_functionsinobject">`_.functionsIn`</a>
* <a href="#_getobject-path-defaultvalue">`_.get`</a>
* <a href="#_hasobject-path">`_.has`</a>
* <a href="#_hasinobject-path">`_.hasIn`</a>
* <a href="#_invertobject">`_.invert`</a>
* <a href="#_invertbyobject-iteratee_identity">`_.invertBy`</a>
* <a href="#_invokeobject-path-args">`_.invoke`</a>
* <a href="#_keysobject">`_.keys`</a>
* <a href="#_keysinobject">`_.keysIn`</a>
* <a href="#_mapkeysobject-iteratee_identity">`_.mapKeys`</a>
* <a href="#_mapvaluesobject-iteratee_identity">`_.mapValues`</a>
* <a href="#_mergeobject-sources">`_.merge`</a>
* <a href="#_mergewithobject-sources-customizer">`_.mergeWith`</a>
* <a href="#_omitobject-props">`_.omit`</a>
* <a href="#_omitbyobject-predicate_identity">`_.omitBy`</a>
* <a href="#_pickobject-props">`_.pick`</a>
* <a href="#_pickbyobject-predicate_identity">`_.pickBy`</a>
* <a href="#_resultobject-path-defaultvalue">`_.result`</a>
* <a href="#_setobject-path-value">`_.set`</a>
* <a href="#_setwithobject-path-value-customizer">`_.setWith`</a>
* <a href="#_topairsobject">`_.toPairs`</a>
* <a href="#_topairsinobject">`_.toPairsIn`</a>
* <a href="#_transformobject-iteratee_identity-accumulator">`_.transform`</a>
* <a href="#_unsetobject-path">`_.unset`</a>
* <a href="#_valuesobject">`_.values`</a>
* <a href="#_valuesinobject">`_.valuesIn`</a>

<!-- /div -->

<!-- div -->

## `Seq`
* <a href="#_value">`_`</a>
* <a href="#_chainvalue">`_.chain`</a>
* <a href="#_tapvalue-interceptor">`_.tap`</a>
* <a href="#_thruvalue-interceptor">`_.thru`</a>
* <a href="#_prototypesymboliterator">`_.prototype[Symbol.iterator]`</a>
* <a href="#_prototypeatpaths">`_.prototype.at`</a>
* <a href="#_prototypechain">`_.prototype.chain`</a>
* <a href="#_prototypecommit">`_.prototype.commit`</a>
* <a href="#_prototypeflatmapiteratee_identity">`_.prototype.flatMap`</a>
* <a href="#_prototypenext">`_.prototype.next`</a>
* <a href="#_prototypeplantvalue">`_.prototype.plant`</a>
* <a href="#_prototypereverse">`_.prototype.reverse`</a>
* <a href="#_prototypevalue" class="alias">`_.prototype.toJSON` -> `value`</a>
* <a href="#_prototypevalue">`_.prototype.value`</a>
* <a href="#_prototypevalue" class="alias">`_.prototype.valueOf` -> `value`</a>

<!-- /div -->

<!-- div -->

## `String`
* <a href="#_camelcasestring">`_.camelCase`</a>
* <a href="#_capitalizestring">`_.capitalize`</a>
* <a href="#_deburrstring">`_.deburr`</a>
* <a href="#_endswithstring-target-positionstringlength">`_.endsWith`</a>
* <a href="#_escapestring">`_.escape`</a>
* <a href="#_escaperegexpstring">`_.escapeRegExp`</a>
* <a href="#_kebabcasestring">`_.kebabCase`</a>
* <a href="#_lowercasestring">`_.lowerCase`</a>
* <a href="#_lowerfirststring">`_.lowerFirst`</a>
* <a href="#_padstring-length0-chars">`_.pad`</a>
* <a href="#_padendstring-length0-chars">`_.padEnd`</a>
* <a href="#_padstartstring-length0-chars">`_.padStart`</a>
* <a href="#_parseintstring-radix">`_.parseInt`</a>
* <a href="#_repeatstring-n0">`_.repeat`</a>
* <a href="#_replacestring-pattern-replacement">`_.replace`</a>
* <a href="#_snakecasestring">`_.snakeCase`</a>
* <a href="#_splitstring-separator-limit">`_.split`</a>
* <a href="#_startcasestring">`_.startCase`</a>
* <a href="#_startswithstring-target-position0">`_.startsWith`</a>
* <a href="#_templatestring-options">`_.template`</a>
* <a href="#_tolowerstring">`_.toLower`</a>
* <a href="#_toupperstring">`_.toUpper`</a>
* <a href="#_trimstring-charswhitespace">`_.trim`</a>
* <a href="#_trimendstring-charswhitespace">`_.trimEnd`</a>
* <a href="#_trimstartstring-charswhitespace">`_.trimStart`</a>
* <a href="#_truncatestring-options">`_.truncate`</a>
* <a href="#_unescapestring">`_.unescape`</a>
* <a href="#_uppercasestring">`_.upperCase`</a>
* <a href="#_upperfirststring">`_.upperFirst`</a>
* <a href="#_wordsstring-pattern">`_.words`</a>

<!-- /div -->

<!-- div -->

## `Util`
* <a href="#_attemptfunc">`_.attempt`</a>
* <a href="#_bindallobject-methodnames">`_.bindAll`</a>
* <a href="#_condpairs">`_.cond`</a>
* <a href="#_conformssource">`_.conforms`</a>
* <a href="#_constantvalue">`_.constant`</a>
* <a href="#_flowfuncs">`_.flow`</a>
* <a href="#_flowrightfuncs">`_.flowRight`</a>
* <a href="#_identityvalue">`_.identity`</a>
* <a href="#_iterateefunc_identity">`_.iteratee`</a>
* <a href="#_matchessource">`_.matches`</a>
* <a href="#_matchespropertypath-srcvalue">`_.matchesProperty`</a>
* <a href="#_methodpath-args">`_.method`</a>
* <a href="#_methodofobject-args">`_.methodOf`</a>
* <a href="#_mixinobjectlodash-source-options">`_.mixin`</a>
* <a href="#_noconflict">`_.noConflict`</a>
* <a href="#_noop">`_.noop`</a>
* <a href="#_nthargn0">`_.nthArg`</a>
* <a href="#_overiteratees">`_.over`</a>
* <a href="#_overeverypredicates">`_.overEvery`</a>
* <a href="#_oversomepredicates">`_.overSome`</a>
* <a href="#_propertypath">`_.property`</a>
* <a href="#_propertyofobject">`_.propertyOf`</a>
* <a href="#_rangestart0-end-step1">`_.range`</a>
* <a href="#_rangerightstart0-end-step1">`_.rangeRight`</a>
* <a href="#_runincontextcontextroot">`_.runInContext`</a>
* <a href="#_timesn-iteratee_identity">`_.times`</a>
* <a href="#_topathvalue">`_.toPath`</a>
* <a href="#_uniqueidprefix">`_.uniqueId`</a>

<!-- /div -->

<!-- div -->

## `Properties`
* <a href="#_version">`_.VERSION`</a>
* <a href="#_templatesettings">`_.templateSettings`</a>
* <a href="#_templatesettingsescape">`_.templateSettings.escape`</a>
* <a href="#_templatesettingsevaluate">`_.templateSettings.evaluate`</a>
* <a href="#_templatesettingsimports">`_.templateSettings.imports`</a>
* <a href="#_templatesettingsinterpolate">`_.templateSettings.interpolate`</a>
* <a href="#_templatesettingsvariable">`_.templateSettings.variable`</a>

<!-- /div -->

<!-- div -->

## `Methods`
* <a href="#_templatesettingsimports_">`_.templateSettings.imports._`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `“Array” Methods`

<!-- div -->

### <a id="_chunkarray-size0"></a>`_.chunk(array, [size=0])`
<a href="#_chunkarray-size0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5359 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.chunk "See the npm package")

Creates an array of elements split into groups the length of `size`.
If `array` can't be split evenly, the final chunk will be the remaining
elements.

#### Arguments
1. `array` *(Array)*: The array to process.
2. `[size=0]` *(number)*: The length of each chunk.

#### Returns
*(Array)*:  Returns the new array containing chunks.

#### Example
```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_compactarray"></a>`_.compact(array)`
<a href="#_compactarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5390 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.compact "See the npm package")

Creates an array with all falsey values removed. The values `false`, `null`,
`0`, `""`, `undefined`, and `NaN` are falsey.

#### Arguments
1. `array` *(Array)*: The array to compact.

#### Returns
*(Array)*:  Returns the new array of filtered values.

#### Example
```js
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_concatarray-values"></a>`_.concat(array, [values])`
<a href="#_concatarray-values">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5426 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.concat "See the npm package")

Creates a new array concatenating `array` with any additional arrays
and/or values.

#### Arguments
1. `array` *(Array)*: The array to concatenate.
2. `[values]` *(...&#42;)*: The values to concatenate.

#### Returns
*(Array)*:  Returns the new concatenated array.

#### Example
```js
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_differencearray-values"></a>`_.difference(array, [values])`
<a href="#_differencearray-values">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5450 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.difference "See the npm package")

Creates an array of unique `array` values not included in the other
provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
for equality comparisons.

#### Arguments
1. `array` *(Array)*: The array to inspect.
2. `[values]` *(...Array)*: The values to exclude.

#### Returns
*(Array)*:  Returns the new array of filtered values.

#### Example
```js
_.difference([3, 2, 1], [4, 2]);
// => [3, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_differencebyarray-values-iteratee_identity"></a>`_.differenceBy(array, [values], [iteratee=_.identity])`
<a href="#_differencebyarray-values-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5477 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.differenceby "See the npm package")

This method is like `_.difference` except that it accepts `iteratee` which
is invoked for each element of `array` and `values` to generate the criterion
by which uniqueness is computed. The iteratee is invoked with one argument: (value).

#### Arguments
1. `array` *(Array)*: The array to inspect.
2. `[values]` *(...Array)*: The values to exclude.
3. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee invoked per element.

#### Returns
*(Array)*:  Returns the new array of filtered values.

#### Example
```js
_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
// => [3.1, 1.3]

// The `_.property` iteratee shorthand.
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_differencewitharray-values-comparator"></a>`_.differenceWith(array, [values], [comparator])`
<a href="#_differencewitharray-values-comparator">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5506 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.differencewith "See the npm package")

This method is like `_.difference` except that it accepts `comparator`
which is invoked to compare elements of `array` to `values`. The comparator
is invoked with two arguments: (arrVal, othVal).

#### Arguments
1. `array` *(Array)*: The array to inspect.
2. `[values]` *(...Array)*: The values to exclude.
3. `[comparator]` *(Function)*: The comparator invoked per element.

#### Returns
*(Array)*:  Returns the new array of filtered values.

#### Example
```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_droparray-n1"></a>`_.drop(array, [n=1])`
<a href="#_droparray-n1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5540 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.drop "See the npm package")

Creates a slice of `array` with `n` elements dropped from the beginning.

#### Arguments
1. `array` *(Array)*: The array to query.
2. `[n=1]` *(number)*: The number of elements to drop.

#### Returns
*(Array)*:  Returns the slice of `array`.

#### Example
```js
_.drop([1, 2, 3]);
// => [2, 3]

_.drop([1, 2, 3], 2);
// => [3]

_.drop([1, 2, 3], 5);
// => []

_.drop([1, 2, 3], 0);
// => [1, 2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_droprightarray-n1"></a>`_.dropRight(array, [n=1])`
<a href="#_droprightarray-n1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5573 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.dropright "See the npm package")

Creates a slice of `array` with `n` elements dropped from the end.

#### Arguments
1. `array` *(Array)*: The array to query.
2. `[n=1]` *(number)*: The number of elements to drop.

#### Returns
*(Array)*:  Returns the slice of `array`.

#### Example
```js
_.dropRight([1, 2, 3]);
// => [1, 2]

_.dropRight([1, 2, 3], 2);
// => [1]

_.dropRight([1, 2, 3], 5);
// => []

_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_droprightwhilearray-predicate_identity"></a>`_.dropRightWhile(array, [predicate=_.identity])`
<a href="#_droprightwhilearray-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5617 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.droprightwhile "See the npm package")

Creates a slice of `array` excluding elements dropped from the end.
Elements are dropped until `predicate` returns falsey. The predicate is
invoked with three arguments: (value, index, array).

#### Arguments
1. `array` *(Array)*: The array to query.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(Array)*:  Returns the slice of `array`.

#### Example
```js
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

_.dropRightWhile(users, function(o) { return !o.active; });
// => objects for ['barney']

// The `_.matches` iteratee shorthand.
_.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// => objects for ['barney', 'fred']

// The `_.matchesProperty` iteratee shorthand.
_.dropRightWhile(users, ['active', false]);
// => objects for ['barney']

// The `_.property` iteratee shorthand.
_.dropRightWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_dropwhilearray-predicate_identity"></a>`_.dropWhile(array, [predicate=_.identity])`
<a href="#_dropwhilearray-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5657 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.dropwhile "See the npm package")

Creates a slice of `array` excluding elements dropped from the beginning.
Elements are dropped until `predicate` returns falsey. The predicate is
invoked with three arguments: (value, index, array).

#### Arguments
1. `array` *(Array)*: The array to query.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(Array)*:  Returns the slice of `array`.

#### Example
```js
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

_.dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']

// The `_.matches` iteratee shorthand.
_.dropWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['fred', 'pebbles']

// The `_.matchesProperty` iteratee shorthand.
_.dropWhile(users, ['active', false]);
// => objects for ['pebbles']

// The `_.property` iteratee shorthand.
_.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_fillarray-value-start0-endarraylength"></a>`_.fill(array, value, [start=0], [end=array.length])`
<a href="#_fillarray-value-start0-endarraylength">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5691 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.fill "See the npm package")

Fills elements of `array` with `value` from `start` up to, but not
including, `end`.
<br>
<br>
**Note:** This method mutates `array`.

#### Arguments
1. `array` *(Array)*: The array to fill.
2. `value` *(&#42;)*: The value to fill `array` with.
3. `[start=0]` *(number)*: The start position.
4. `[end=array.length]` *(number)*: The end position.

#### Returns
*(Array)*:  Returns `array`.

#### Example
```js
var array = [1, 2, 3];

_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

_.fill(Array(3), 2);
// => [2, 2, 2]

_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_findindexarray-predicate_identity"></a>`_.findIndex(array, [predicate=_.identity])`
<a href="#_findindexarray-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5736 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.findindex "See the npm package")

This method is like `_.find` except that it returns the index of the first
element `predicate` returns truthy for instead of the element itself.

#### Arguments
1. `array` *(Array)*: The array to search.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(number)*:  Returns the index of the found element, else `-1`.

#### Example
```js
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

_.findIndex(users, function(o) { return o.user == 'barney'; });
// => 0

// The `_.matches` iteratee shorthand.
_.findIndex(users, { 'user': 'fred', 'active': false });
// => 1

// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0

// The `_.property` iteratee shorthand.
_.findIndex(users, 'active');
// => 2
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_findlastindexarray-predicate_identity"></a>`_.findLastIndex(array, [predicate=_.identity])`
<a href="#_findlastindexarray-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5775 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.findlastindex "See the npm package")

This method is like `_.findIndex` except that it iterates over elements
of `collection` from right to left.

#### Arguments
1. `array` *(Array)*: The array to search.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(number)*:  Returns the index of the found element, else `-1`.

#### Example
```js
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

_.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
// => 2

// The `_.matches` iteratee shorthand.
_.findLastIndex(users, { 'user': 'barney', 'active': true });
// => 0

// The `_.matchesProperty` iteratee shorthand.
_.findLastIndex(users, ['active', false]);
// => 2

// The `_.property` iteratee shorthand.
_.findLastIndex(users, 'active');
// => 0
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_flattenarray"></a>`_.flatten(array)`
<a href="#_flattenarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5794 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.flatten "See the npm package")

Flattens `array` a single level.

#### Arguments
1. `array` *(Array)*: The array to flatten.

#### Returns
*(Array)*:  Returns the new flattened array.

#### Example
```js
_.flatten([1, [2, 3, [4]]]);
// => [1, 2, 3, [4]]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_flattendeeparray"></a>`_.flattenDeep(array)`
<a href="#_flattendeeparray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5812 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.flattendeep "See the npm package")

This method is like `_.flatten` except that it recursively flattens `array`.

#### Arguments
1. `array` *(Array)*: The array to recursively flatten.

#### Returns
*(Array)*:  Returns the new flattened array.

#### Example
```js
_.flattenDeep([1, [2, 3, [4]]]);
// => [1, 2, 3, 4]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_frompairspairs"></a>`_.fromPairs(pairs)`
<a href="#_frompairspairs">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5831 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.frompairs "See the npm package")

The inverse of `_.toPairs`; this method returns an object composed
from key-value `pairs`.

#### Arguments
1. `pairs` *(Array)*: The key-value pairs.

#### Returns
*(Object)*:  Returns the new object.

#### Example
```js
_.fromPairs([['fred', 30], ['barney', 40]]);
// => { 'fred': 30, 'barney': 40 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_headarray"></a>`_.head(array)`
<a href="#_headarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5860 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.head "See the npm package")

Gets the first element of `array`.

#### Aliases
*_.first*

#### Arguments
1. `array` *(Array)*: The array to query.

#### Returns
*(&#42;)*:  Returns the first element of `array`.

#### Example
```js
_.head([1, 2, 3]);
// => 1

_.head([]);
// => undefined
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_indexofarray-value-fromindex0"></a>`_.indexOf(array, value, [fromIndex=0])`
<a href="#_indexofarray-value-fromindex0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5886 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.indexof "See the npm package")

Gets the index at which the first occurrence of `value` is found in `array`
using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
for equality comparisons. If `fromIndex` is negative, it's used as the offset
from the end of `array`.

#### Arguments
1. `array` *(Array)*: The array to search.
2. `value` *(&#42;)*: The value to search for.
3. `[fromIndex=0]` *(number)*: The index to search from.

#### Returns
*(number)*:  Returns the index of the matched value, else `-1`.

#### Example
```js
_.indexOf([1, 2, 1, 2], 2);
// => 1

// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_initialarray"></a>`_.initial(array)`
<a href="#_initialarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5911 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.initial "See the npm package")

Gets all but the last element of `array`.

#### Arguments
1. `array` *(Array)*: The array to query.

#### Returns
*(Array)*:  Returns the slice of `array`.

#### Example
```js
_.initial([1, 2, 3]);
// => [1, 2]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_intersectionarrays"></a>`_.intersection([arrays])`
<a href="#_intersectionarrays">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5930 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.intersection "See the npm package")

Creates an array of unique values that are included in all of the provided
arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
for equality comparisons.

#### Arguments
1. `[arrays]` *(...Array)*: The arrays to inspect.

#### Returns
*(Array)*:  Returns the new array of shared values.

#### Example
```js
_.intersection([2, 1], [4, 2], [1, 2]);
// => [2]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_intersectionbyarrays-iteratee_identity"></a>`_.intersectionBy([arrays], [iteratee=_.identity])`
<a href="#_intersectionbyarrays-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5957 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.intersectionby "See the npm package")

This method is like `_.intersection` except that it accepts `iteratee`
which is invoked for each element of each `arrays` to generate the criterion
by which uniqueness is computed. The iteratee is invoked with one argument: (value).

#### Arguments
1. `[arrays]` *(...Array)*: The arrays to inspect.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee invoked per element.

#### Returns
*(Array)*:  Returns the new array of shared values.

#### Example
```js
_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1]

// The `_.property` iteratee shorthand.
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_intersectionwitharrays-comparator"></a>`_.intersectionWith([arrays], [comparator])`
<a href="#_intersectionwitharrays-comparator">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L5990 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.intersectionwith "See the npm package")

This method is like `_.intersection` except that it accepts `comparator`
which is invoked to compare elements of `arrays`. The comparator is invoked
with two arguments: (arrVal, othVal).

#### Arguments
1. `[arrays]` *(...Array)*: The arrays to inspect.
2. `[comparator]` *(Function)*: The comparator invoked per element.

#### Returns
*(Array)*:  Returns the new array of shared values.

#### Example
```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.intersectionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_joinarray-separator-"></a>`_.join(array, [separator=','])`
<a href="#_joinarray-separator-">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6018 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.join "See the npm package")

Converts all elements in `array` into a string separated by `separator`.

#### Arguments
1. `array` *(Array)*: The array to convert.
2. `[separator=',']` *(string)*: The element separator.

#### Returns
*(string)*:  Returns the joined string.

#### Example
```js
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_lastarray"></a>`_.last(array)`
<a href="#_lastarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6035 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.last "See the npm package")

Gets the last element of `array`.

#### Arguments
1. `array` *(Array)*: The array to query.

#### Returns
*(&#42;)*:  Returns the last element of `array`.

#### Example
```js
_.last([1, 2, 3]);
// => 3
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_lastindexofarray-value-fromindexarraylength-1"></a>`_.lastIndexOf(array, value, [fromIndex=array.length-1])`
<a href="#_lastindexofarray-value-fromindexarraylength-1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6060 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.lastindexof "See the npm package")

This method is like `_.indexOf` except that it iterates over elements of
`array` from right to left.

#### Arguments
1. `array` *(Array)*: The array to search.
2. `value` *(&#42;)*: The value to search for.
3. `[fromIndex=array.length-1]` *(number)*: The index to search from.

#### Returns
*(number)*:  Returns the index of the matched value, else `-1`.

#### Example
```js
_.lastIndexOf([1, 2, 1, 2], 2);
// => 3

// Search from the `fromIndex`.
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_pullarray-values"></a>`_.pull(array, [values])`
<a href="#_pullarray-values">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6102 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.pull "See the npm package")

Removes all provided values from `array` using
[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
for equality comparisons.
<br>
<br>
**Note:** Unlike `_.without`, this method mutates `array`.

#### Arguments
1. `array` *(Array)*: The array to modify.
2. `[values]` *(...&#42;)*: The values to remove.

#### Returns
*(Array)*:  Returns `array`.

#### Example
```js
var array = [1, 2, 3, 1, 2, 3];

_.pull(array, 2, 3);
console.log(array);
// => [1, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_pullallarray-values"></a>`_.pullAll(array, values)`
<a href="#_pullallarray-values">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6123 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.pullall "See the npm package")

This method is like `_.pull` except that it accepts an array of values to remove.
<br>
<br>
**Note:** Unlike `_.difference`, this method mutates `array`.

#### Arguments
1. `array` *(Array)*: The array to modify.
2. `values` *(Array)*: The values to remove.

#### Returns
*(Array)*:  Returns `array`.

#### Example
```js
var array = [1, 2, 3, 1, 2, 3];

_.pullAll(array, [2, 3]);
console.log(array);
// => [1, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_pullallbyarray-values-iteratee_identity"></a>`_.pullAllBy(array, values, [iteratee=_.identity])`
<a href="#_pullallbyarray-values-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6151 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.pullallby "See the npm package")

This method is like `_.pullAll` except that it accepts `iteratee` which is
invoked for each element of `array` and `values` to generate the criterion
by which uniqueness is computed. The iteratee is invoked with one argument: (value).
<br>
<br>
**Note:** Unlike `_.differenceBy`, this method mutates `array`.

#### Arguments
1. `array` *(Array)*: The array to modify.
2. `values` *(Array)*: The values to remove.
3. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee invoked per element.

#### Returns
*(Array)*:  Returns `array`.

#### Example
```js
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_pullatarray-indexes"></a>`_.pullAt(array, [indexes])`
<a href="#_pullatarray-indexes">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6181 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.pullat "See the npm package")

Removes elements from `array` corresponding to `indexes` and returns an
array of removed elements.
<br>
<br>
**Note:** Unlike `_.at`, this method mutates `array`.

#### Arguments
1. `array` *(Array)*: The array to modify.
2. `[indexes]` *(...(number|number&#91;&#93;)*: The indexes of elements to remove, specified individually or in arrays.

#### Returns
*(Array)*:  Returns the new array of removed elements.

#### Example
```js
var array = [5, 10, 15, 20];
var evens = _.pullAt(array, 1, 3);

console.log(array);
// => [5, 15]

console.log(evens);
// => [10, 20]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_removearray-predicate_identity"></a>`_.remove(array, [predicate=_.identity])`
<a href="#_removearray-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6215 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.remove "See the npm package")

Removes all elements from `array` that `predicate` returns truthy for
and returns an array of the removed elements. The predicate is invoked with
three arguments: (value, index, array).
<br>
<br>
**Note:** Unlike `_.filter`, this method mutates `array`.

#### Arguments
1. `array` *(Array)*: The array to modify.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(Array)*:  Returns the new array of removed elements.

#### Example
```js
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_reverse"></a>`_.reverse()`
<a href="#_reverse">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6257 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.reverse "See the npm package")

Reverses `array` so that the first element becomes the last, the second
element becomes the second to last, and so on.
<br>
<br>
**Note:** This method mutates `array` and is based on
[`Array#reverse`](https://mdn.io/Array/reverse).

#### Returns
*(Array)*:  Returns `array`.

#### Example
```js
var array = [1, 2, 3];

_.reverse(array);
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_slicearray-start0-endarraylength"></a>`_.slice(array, [start=0], [end=array.length])`
<a href="#_slicearray-start0-endarraylength">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6275 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.slice "See the npm package")

Creates a slice of `array` from `start` up to, but not including, `end`.
<br>
<br>
**Note:** This method is used instead of [`Array#slice`](https://mdn.io/Array/slice)
to ensure dense arrays are returned.

#### Arguments
1. `array` *(Array)*: The array to slice.
2. `[start=0]` *(number)*: The start position.
3. `[end=array.length]` *(number)*: The end position.

#### Returns
*(Array)*:  Returns the slice of `array`.

* * *

<!-- /div -->

<!-- div -->

### <a id="_sortedindexarray-value"></a>`_.sortedIndex(array, value)`
<a href="#_sortedindexarray-value">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6309 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sortedindex "See the npm package")

Uses a binary search to determine the lowest index at which `value` should
be inserted into `array` in order to maintain its sort order.

#### Arguments
1. `array` *(Array)*: The sorted array to inspect.
2. `value` *(&#42;)*: The value to evaluate.

#### Returns
*(number)*:  Returns the index at which `value` should be inserted into `array`.

#### Example
```js
_.sortedIndex([30, 50], 40);
// => 1

_.sortedIndex([4, 5], 4);
// => 0
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sortedindexbyarray-value-iteratee_identity"></a>`_.sortedIndexBy(array, value, [iteratee=_.identity])`
<a href="#_sortedindexbyarray-value-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6336 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sortedindexby "See the npm package")

This method is like `_.sortedIndex` except that it accepts `iteratee`
which is invoked for `value` and each element of `array` to compute their
sort ranking. The iteratee is invoked with one argument: (value).

#### Arguments
1. `array` *(Array)*: The sorted array to inspect.
2. `value` *(&#42;)*: The value to evaluate.
3. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee invoked per element.

#### Returns
*(number)*:  Returns the index at which `value` should be inserted into `array`.

#### Example
```js
var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };

_.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
// => 1

// The `_.property` iteratee shorthand.
_.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
// => 0
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sortedindexofarray-value"></a>`_.sortedIndexOf(array, value)`
<a href="#_sortedindexofarray-value">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6355 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sortedindexof "See the npm package")

This method is like `_.indexOf` except that it performs a binary
search on a sorted `array`.

#### Arguments
1. `array` *(Array)*: The array to search.
2. `value` *(&#42;)*: The value to search for.

#### Returns
*(number)*:  Returns the index of the matched value, else `-1`.

#### Example
```js
_.sortedIndexOf([1, 1, 2, 2], 2);
// => 2
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sortedlastindexarray-value"></a>`_.sortedLastIndex(array, value)`
<a href="#_sortedlastindexarray-value">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6382 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sortedlastindex "See the npm package")

This method is like `_.sortedIndex` except that it returns the highest
index at which `value` should be inserted into `array` in order to
maintain its sort order.

#### Arguments
1. `array` *(Array)*: The sorted array to inspect.
2. `value` *(&#42;)*: The value to evaluate.

#### Returns
*(number)*:  Returns the index at which `value` should be inserted into `array`.

#### Example
```js
_.sortedLastIndex([4, 5], 4);
// => 1
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sortedlastindexbyarray-value-iteratee_identity"></a>`_.sortedLastIndexBy(array, value, [iteratee=_.identity])`
<a href="#_sortedlastindexbyarray-value-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6404 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sortedlastindexby "See the npm package")

This method is like `_.sortedLastIndex` except that it accepts `iteratee`
which is invoked for `value` and each element of `array` to compute their
sort ranking. The iteratee is invoked with one argument: (value).

#### Arguments
1. `array` *(Array)*: The sorted array to inspect.
2. `value` *(&#42;)*: The value to evaluate.
3. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee invoked per element.

#### Returns
*(number)*:  Returns the index at which `value` should be inserted into `array`.

#### Example
```js
// The `_.property` iteratee shorthand.
_.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
// => 1
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sortedlastindexofarray-value"></a>`_.sortedLastIndexOf(array, value)`
<a href="#_sortedlastindexofarray-value">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6423 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sortedlastindexof "See the npm package")

This method is like `_.lastIndexOf` except that it performs a binary
search on a sorted `array`.

#### Arguments
1. `array` *(Array)*: The array to search.
2. `value` *(&#42;)*: The value to search for.

#### Returns
*(number)*:  Returns the index of the matched value, else `-1`.

#### Example
```js
_.sortedLastIndexOf([1, 1, 2, 2], 2);
// => 3
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sorteduniqarray"></a>`_.sortedUniq(array)`
<a href="#_sorteduniqarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6448 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sorteduniq "See the npm package")

This method is like `_.uniq` except that it's designed and optimized
for sorted arrays.

#### Arguments
1. `array` *(Array)*: The array to inspect.

#### Returns
*(Array)*:  Returns the new duplicate free array.

#### Example
```js
_.sortedUniq([1, 1, 2]);
// => [1, 2]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sorteduniqbyarray-iteratee"></a>`_.sortedUniqBy(array, [iteratee])`
<a href="#_sorteduniqbyarray-iteratee">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6469 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sorteduniqby "See the npm package")

This method is like `_.uniqBy` except that it's designed and optimized
for sorted arrays.

#### Arguments
1. `array` *(Array)*: The array to inspect.
2. `[iteratee]` *(Function)*: The iteratee invoked per element.

#### Returns
*(Array)*:  Returns the new duplicate free array.

#### Example
```js
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_tailarray"></a>`_.tail(array)`
<a href="#_tailarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6488 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.tail "See the npm package")

Gets all but the first element of `array`.

#### Arguments
1. `array` *(Array)*: The array to query.

#### Returns
*(Array)*:  Returns the slice of `array`.

#### Example
```js
_.tail([1, 2, 3]);
// => [2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_takearray-n1"></a>`_.take(array, [n=1])`
<a href="#_takearray-n1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6516 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.take "See the npm package")

Creates a slice of `array` with `n` elements taken from the beginning.

#### Arguments
1. `array` *(Array)*: The array to query.
2. `[n=1]` *(number)*: The number of elements to take.

#### Returns
*(Array)*:  Returns the slice of `array`.

#### Example
```js
_.take([1, 2, 3]);
// => [1]

_.take([1, 2, 3], 2);
// => [1, 2]

_.take([1, 2, 3], 5);
// => [1, 2, 3]

_.take([1, 2, 3], 0);
// => []
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_takerightarray-n1"></a>`_.takeRight(array, [n=1])`
<a href="#_takerightarray-n1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6548 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.takeright "See the npm package")

Creates a slice of `array` with `n` elements taken from the end.

#### Arguments
1. `array` *(Array)*: The array to query.
2. `[n=1]` *(number)*: The number of elements to take.

#### Returns
*(Array)*:  Returns the slice of `array`.

#### Example
```js
_.takeRight([1, 2, 3]);
// => [3]

_.takeRight([1, 2, 3], 2);
// => [2, 3]

_.takeRight([1, 2, 3], 5);
// => [1, 2, 3]

_.takeRight([1, 2, 3], 0);
// => []
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_takerightwhilearray-predicate_identity"></a>`_.takeRightWhile(array, [predicate=_.identity])`
<a href="#_takerightwhilearray-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6592 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.takerightwhile "See the npm package")

Creates a slice of `array` with elements taken from the end. Elements are
taken until `predicate` returns falsey. The predicate is invoked with three
arguments: (value, index, array).

#### Arguments
1. `array` *(Array)*: The array to query.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(Array)*:  Returns the slice of `array`.

#### Example
```js
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

_.takeRightWhile(users, function(o) { return !o.active; });
// => objects for ['fred', 'pebbles']

// The `_.matches` iteratee shorthand.
_.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
// => objects for ['pebbles']

// The `_.matchesProperty` iteratee shorthand.
_.takeRightWhile(users, ['active', false]);
// => objects for ['fred', 'pebbles']

// The `_.property` iteratee shorthand.
_.takeRightWhile(users, 'active');
// => []
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_takewhilearray-predicate_identity"></a>`_.takeWhile(array, [predicate=_.identity])`
<a href="#_takewhilearray-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6632 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.takewhile "See the npm package")

Creates a slice of `array` with elements taken from the beginning. Elements
are taken until `predicate` returns falsey. The predicate is invoked with
three arguments: (value, index, array).

#### Arguments
1. `array` *(Array)*: The array to query.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(Array)*:  Returns the slice of `array`.

#### Example
```js
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false},
  { 'user': 'pebbles', 'active': true }
];

_.takeWhile(users, function(o) { return !o.active; });
// => objects for ['barney', 'fred']

// The `_.matches` iteratee shorthand.
_.takeWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
_.takeWhile(users, ['active', false]);
// => objects for ['barney', 'fred']

// The `_.property` iteratee shorthand.
_.takeWhile(users, 'active');
// => []
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_unionarrays"></a>`_.union([arrays])`
<a href="#_unionarrays">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6653 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.union "See the npm package")

Creates an array of unique values, in order, from all of the provided arrays
using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
for equality comparisons.

#### Arguments
1. `[arrays]` *(...Array)*: The arrays to inspect.

#### Returns
*(Array)*:  Returns the new array of combined values.

#### Example
```js
_.union([2, 1], [4, 2], [1, 2]);
// => [2, 1, 4]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_unionbyarrays-iteratee_identity"></a>`_.unionBy([arrays], [iteratee=_.identity])`
<a href="#_unionbyarrays-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6677 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.unionby "See the npm package")

This method is like `_.union` except that it accepts `iteratee` which is
invoked for each element of each `arrays` to generate the criterion by which
uniqueness is computed. The iteratee is invoked with one argument: (value).

#### Arguments
1. `[arrays]` *(...Array)*: The arrays to inspect.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee invoked per element.

#### Returns
*(Array)*:  Returns the new array of combined values.

#### Example
```js
_.unionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1, 1.2, 4.3]

// The `_.property` iteratee shorthand.
_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_unionwitharrays-comparator"></a>`_.unionWith([arrays], [comparator])`
<a href="#_unionwitharrays-comparator">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6704 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.unionwith "See the npm package")

This method is like `_.union` except that it accepts `comparator` which
is invoked to compare elements of `arrays`. The comparator is invoked
with two arguments: (arrVal, othVal).

#### Arguments
1. `[arrays]` *(...Array)*: The arrays to inspect.
2. `[comparator]` *(Function)*: The comparator invoked per element.

#### Returns
*(Array)*:  Returns the new array of combined values.

#### Example
```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.unionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_uniqarray"></a>`_.uniq(array)`
<a href="#_uniqarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6728 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.uniq "See the npm package")

Creates a duplicate-free version of an array, using
[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
for equality comparisons, in which only the first occurrence of each element
is kept.

#### Arguments
1. `array` *(Array)*: The array to inspect.

#### Returns
*(Array)*:  Returns the new duplicate free array.

#### Example
```js
_.uniq([2, 1, 2]);
// => [2, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_uniqbyarray-iteratee_identity"></a>`_.uniqBy(array, [iteratee=_.identity])`
<a href="#_uniqbyarray-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6754 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.uniqby "See the npm package")

This method is like `_.uniq` except that it accepts `iteratee` which is
invoked for each element in `array` to generate the criterion by which
uniqueness is computed. The iteratee is invoked with one argument: (value).

#### Arguments
1. `array` *(Array)*: The array to inspect.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee invoked per element.

#### Returns
*(Array)*:  Returns the new duplicate free array.

#### Example
```js
_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// The `_.property` iteratee shorthand.
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_uniqwitharray-comparator"></a>`_.uniqWith(array, [comparator])`
<a href="#_uniqwitharray-comparator">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6778 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.uniqwith "See the npm package")

This method is like `_.uniq` except that it accepts `comparator` which
is invoked to compare elements of `array`. The comparator is invoked with
two arguments: (arrVal, othVal).

#### Arguments
1. `array` *(Array)*: The array to inspect.
2. `[comparator]` *(Function)*: The comparator invoked per element.

#### Returns
*(Array)*:  Returns the new duplicate free array.

#### Example
```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 },  { 'x': 1, 'y': 2 }];

_.uniqWith(objects, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_unziparray"></a>`_.unzip(array)`
<a href="#_unziparray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6802 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.unzip "See the npm package")

This method is like `_.zip` except that it accepts an array of grouped
elements and creates an array regrouping the elements to their pre-zip
configuration.

#### Arguments
1. `array` *(Array)*: The array of grouped elements to process.

#### Returns
*(Array)*:  Returns the new array of regrouped elements.

#### Example
```js
var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]

_.unzip(zipped);
// => [['fred', 'barney'], [30, 40], [true, false]]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_unzipwitharray-iteratee_identity"></a>`_.unzipWith(array, [iteratee=_.identity])`
<a href="#_unzipwitharray-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6837 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.unzipwith "See the npm package")

This method is like `_.unzip` except that it accepts `iteratee` to specify
how regrouped values should be combined. The iteratee is invoked with the
elements of each group: (...group).

#### Arguments
1. `array` *(Array)*: The array of grouped elements to process.
2. `[iteratee=_.identity]` *(Function)*: The function to combine regrouped values.

#### Returns
*(Array)*:  Returns the new array of regrouped elements.

#### Example
```js
var zipped = _.zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]

_.unzipWith(zipped, _.add);
// => [3, 30, 300]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_withoutarray-values"></a>`_.without(array, [values])`
<a href="#_withoutarray-values">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6866 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.without "See the npm package")

Creates an array excluding all provided values using
[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
for equality comparisons.

#### Arguments
1. `array` *(Array)*: The array to filter.
2. `[values]` *(...&#42;)*: The values to exclude.

#### Returns
*(Array)*:  Returns the new array of filtered values.

#### Example
```js
_.without([1, 2, 1, 3], 1, 2);
// => [3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_xorarrays"></a>`_.xor([arrays])`
<a href="#_xorarrays">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6886 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.xor "See the npm package")

Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
of the provided arrays.

#### Arguments
1. `[arrays]` *(...Array)*: The arrays to inspect.

#### Returns
*(Array)*:  Returns the new array of values.

#### Example
```js
_.xor([2, 1], [4, 2]);
// => [1, 4]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_xorbyarrays-iteratee_identity"></a>`_.xorBy([arrays], [iteratee=_.identity])`
<a href="#_xorbyarrays-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6910 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.xorby "See the npm package")

This method is like `_.xor` except that it accepts `iteratee` which is
invoked for each element of each `arrays` to generate the criterion by which
uniqueness is computed. The iteratee is invoked with one argument: (value).

#### Arguments
1. `[arrays]` *(...Array)*: The arrays to inspect.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee invoked per element.

#### Returns
*(Array)*:  Returns the new array of values.

#### Example
```js
_.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [1.2, 4.3]

// The `_.property` iteratee shorthand.
_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_xorwitharrays-comparator"></a>`_.xorWith([arrays], [comparator])`
<a href="#_xorwitharrays-comparator">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6937 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.xorwith "See the npm package")

This method is like `_.xor` except that it accepts `comparator` which is
invoked to compare elements of `arrays`. The comparator is invoked with
two arguments: (arrVal, othVal).

#### Arguments
1. `[arrays]` *(...Array)*: The arrays to inspect.
2. `[comparator]` *(Function)*: The comparator invoked per element.

#### Returns
*(Array)*:  Returns the new array of values.

#### Example
```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.xorWith(objects, others, _.isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_ziparrays"></a>`_.zip([arrays])`
<a href="#_ziparrays">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6960 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.zip "See the npm package")

Creates an array of grouped elements, the first of which contains the first
elements of the given arrays, the second of which contains the second elements
of the given arrays, and so on.

#### Arguments
1. `[arrays]` *(...Array)*: The arrays to process.

#### Returns
*(Array)*:  Returns the new array of grouped elements.

#### Example
```js
_.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_zipobjectprops-values"></a>`_.zipObject([props=[]], [values=[]])`
<a href="#_zipobjectprops-values">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6977 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.zipobject "See the npm package")

This method is like `_.fromPairs` except that it accepts two arrays,
one of property names and one of corresponding values.

#### Arguments
1. `[props=[]]` *(Array)*: The property names.
2. `[values=[]]` *(Array)*: The property values.

#### Returns
*(Object)*:  Returns the new object.

#### Example
```js
_.zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_zipobjectdeepprops-values"></a>`_.zipObjectDeep([props=[]], [values=[]])`
<a href="#_zipobjectdeepprops-values">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L6995 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.zipobjectdeep "See the npm package")

This method is like `_.zipObject` except that it supports property paths.

#### Arguments
1. `[props=[]]` *(Array)*: The property names.
2. `[values=[]]` *(Array)*: The property values.

#### Returns
*(Object)*:  Returns the new object.

#### Example
```js
_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_zipwitharrays-iteratee_identity"></a>`_.zipWith([arrays], [iteratee=_.identity])`
<a href="#_zipwitharrays-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7017 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.zipwith "See the npm package")

This method is like `_.zip` except that it accepts `iteratee` to specify
how grouped values should be combined. The iteratee is invoked with the
elements of each group: (...group).

#### Arguments
1. `[arrays]` *(...Array)*: The arrays to process.
2. `[iteratee=_.identity]` *(Function)*: The function to combine grouped values.

#### Returns
*(Array)*:  Returns the new array of grouped elements.

#### Example
```js
_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c;
});
// => [111, 222]
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Collection” Methods`

<!-- div -->

### <a id="_countbycollection-iteratee_identity"></a>`_.countBy(collection, [iteratee=_.identity])`
<a href="#_countbycollection-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7399 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.countby "See the npm package")

Creates an object composed of keys generated from the results of running
each element of `collection` through `iteratee`. The corresponding value
of each key is the number of times the key was returned by `iteratee`.
The iteratee is invoked with one argument: (value).

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee to transform keys.

#### Returns
*(Object)*:  Returns the composed aggregate object.

#### Example
```js
_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_everycollection-predicate_identity"></a>`_.every(collection, [predicate=_.identity])`
<a href="#_everycollection-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7437 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.every "See the npm package")

Checks if `predicate` returns truthy for **all** elements of `collection`.
Iteration is stopped once `predicate` returns falsey. The predicate is
invoked with three arguments: (value, index|key, collection).

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(boolean)*:  Returns `true` if all elements pass the predicate check, else `false`.

#### Example
```js
_.every([true, 1, null, 'yes'], Boolean);
// => false

var users = [
  { 'user': 'barney', 'active': false },
  { 'user': 'fred',   'active': false }
];

// The `_.matches` iteratee shorthand.
_.every(users, { 'user': 'barney', 'active': false });
// => false

// The `_.matchesProperty` iteratee shorthand.
_.every(users, ['active', false]);
// => true

// The `_.property` iteratee shorthand.
_.every(users, 'active');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_filtercollection-predicate_identity"></a>`_.filter(collection, [predicate=_.identity])`
<a href="#_filtercollection-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7478 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.filter "See the npm package")

Iterates over elements of `collection`, returning an array of all elements
`predicate` returns truthy for. The predicate is invoked with three arguments:<br>
(value, index|key, collection).

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(Array)*:  Returns the new filtered array.

#### Example
```js
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

_.filter(users, function(o) { return !o.active; });
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
_.filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
_.filter(users, ['active', false]);
// => objects for ['fred']

// The `_.property` iteratee shorthand.
_.filter(users, 'active');
// => objects for ['barney']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_findcollection-predicate_identity"></a>`_.find(collection, [predicate=_.identity])`
<a href="#_findcollection-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7517 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.find "See the npm package")

Iterates over elements of `collection`, returning the first element
`predicate` returns truthy for. The predicate is invoked with three arguments:<br>
(value, index|key, collection).

#### Arguments
1. `collection` *(Array|Object)*: The collection to search.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(&#42;)*:  Returns the matched element, else `undefined`.

#### Example
```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

_.find(users, function(o) { return o.age < 40; });
// => object for 'barney'

// The `_.matches` iteratee shorthand.
_.find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'

// The `_.matchesProperty` iteratee shorthand.
_.find(users, ['active', false]);
// => object for 'fred'

// The `_.property` iteratee shorthand.
_.find(users, 'active');
// => object for 'barney'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_findlastcollection-predicate_identity"></a>`_.findLast(collection, [predicate=_.identity])`
<a href="#_findlastcollection-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7543 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.findlast "See the npm package")

This method is like `_.find` except that it iterates over elements of
`collection` from right to left.

#### Arguments
1. `collection` *(Array|Object)*: The collection to search.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(&#42;)*:  Returns the matched element, else `undefined`.

#### Example
```js
_.findLast([1, 2, 3, 4], function(n) {
  return n % 2 == 1;
});
// => 3
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_flatmapcollection-iteratee_identity"></a>`_.flatMap(collection, [iteratee=_.identity])`
<a href="#_flatmapcollection-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7572 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.flatmap "See the npm package")

Creates an array of flattened values by running each element in `collection`
through `iteratee` and concating its result to the other mapped values.
The iteratee is invoked with three arguments: (value, index|key, collection).

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(Array)*:  Returns the new flattened array.

#### Example
```js
function duplicate(n) {
  return [n, n];
}

_.flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_foreachcollection-iteratee_identity"></a>`_.forEach(collection, [iteratee=_.identity])`
<a href="#_foreachcollection-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7604 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.foreach "See the npm package")

Iterates over elements of `collection` invoking `iteratee` for each element.
The iteratee is invoked with three arguments: (value, index|key, collection).
Iteratee functions may exit iteration early by explicitly returning `false`.
<br>
<br>
**Note:** As with other "Collections" methods, objects with a "length" property
are iterated like arrays. To avoid this behavior use `_.forIn` or `_.forOwn`
for object iteration.

#### Aliases
*_.each*

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[iteratee=_.identity]` *(Function)*: The function invoked per iteration.

#### Returns
*(Array|Object)*:  Returns `collection`.

#### Example
```js
_([1, 2]).forEach(function(value) {
  console.log(value);
});
// => logs `1` then `2`

_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
// => logs 'a' then 'b' (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_foreachrightcollection-iteratee_identity"></a>`_.forEachRight(collection, [iteratee=_.identity])`
<a href="#_foreachrightcollection-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7628 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.foreachright "See the npm package")

This method is like `_.forEach` except that it iterates over elements of
`collection` from right to left.

#### Aliases
*_.eachRight*

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[iteratee=_.identity]` *(Function)*: The function invoked per iteration.

#### Returns
*(Array|Object)*:  Returns `collection`.

#### Example
```js
_.forEachRight([1, 2], function(value) {
  console.log(value);
});
// => logs `2` then `1`
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_groupbycollection-iteratee_identity"></a>`_.groupBy(collection, [iteratee=_.identity])`
<a href="#_groupbycollection-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7655 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.groupby "See the npm package")

Creates an object composed of keys generated from the results of running
each element of `collection` through `iteratee`. The corresponding value
of each key is an array of elements responsible for generating the key.
The iteratee is invoked with one argument: (value).

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee to transform keys.

#### Returns
*(Object)*:  Returns the composed aggregate object.

#### Example
```js
_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `_.property` iteratee shorthand.
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_includescollection-value-fromindex0"></a>`_.includes(collection, value, [fromIndex=0])`
<a href="#_includescollection-value-fromindex0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7691 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.includes "See the npm package")

Checks if `value` is in `collection`. If `collection` is a string it's checked
for a substring of `value`, otherwise [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
is used for equality comparisons. If `fromIndex` is negative, it's used as
the offset from the end of `collection`.

#### Arguments
1. `collection` *(Array|Object|string)*: The collection to search.
2. `value` *(&#42;)*: The value to search for.
3. `[fromIndex=0]` *(number)*: The index to search from.

#### Returns
*(boolean)*:  Returns `true` if `value` is found, else `false`.

#### Example
```js
_.includes([1, 2, 3], 1);
// => true

_.includes([1, 2, 3], 1, 2);
// => false

_.includes({ 'user': 'fred', 'age': 40 }, 'fred');
// => true

_.includes('pebbles', 'eb');
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_invokemapcollection-path-args"></a>`_.invokeMap(collection, path, [args])`
<a href="#_invokemapcollection-path-args">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7726 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.invokemap "See the npm package")

Invokes the method at `path` of each element in `collection`, returning
an array of the results of each invoked method. Any additional arguments
are provided to each invoked method. If `methodName` is a function it's
invoked for, and `this` bound to, each element in `collection`.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `path` *(Array|Function|string)*: The path of the method to invoke or the function invoked per iteration.
3. `[args]` *(...&#42;)*: The arguments to invoke each method with.

#### Returns
*(Array)*:  Returns the array of results.

#### Example
```js
_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
// => [[1, 5, 7], [1, 2, 3]]

_.invokeMap([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_keybycollection-iteratee_identity"></a>`_.keyBy(collection, [iteratee=_.identity])`
<a href="#_keybycollection-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7766 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.keyby "See the npm package")

Creates an object composed of keys generated from the results of running
each element of `collection` through `iteratee`. The corresponding value
of each key is the last element responsible for generating the key. The
iteratee is invoked with one argument: (value).

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee to transform keys.

#### Returns
*(Object)*:  Returns the composed aggregate object.

#### Example
```js
var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];

_.keyBy(array, function(o) {
  return String.fromCharCode(o.code);
});
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

_.keyBy(array, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_mapcollection-iteratee_identity"></a>`_.map(collection, [iteratee=_.identity])`
<a href="#_mapcollection-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7811 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.map "See the npm package")

Creates an array of values by running each element in `collection` through
`iteratee`. The iteratee is invoked with three arguments:<br>
(value, index|key, collection).
<br>
<br>
Many lodash methods are guarded to work as iteratees for methods like
`_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
<br>
<br>
The guarded methods are:<br>
`ary`, `curry`, `curryRight`, `drop`, `dropRight`, `every`, `fill`,
`invert`, `parseInt`, `random`, `range`, `rangeRight`, `slice`, `some`,
`sortBy`, `take`, `takeRight`, `template`, `trim`, `trimEnd`, `trimStart`,
and `words`

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(Array)*:  Returns the new mapped array.

#### Example
```js
function square(n) {
  return n * n;
}

_.map([4, 8], square);
// => [16, 64]

_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_orderbycollection-iteratees-_identity-orders"></a>`_.orderBy(collection, [iteratees=[_.identity]], [orders])`
<a href="#_orderbycollection-iteratees-_identity-orders">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7843 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.orderby "See the npm package")

This method is like `_.sortBy` except that it allows specifying the sort
orders of the iteratees to sort by. If `orders` is unspecified, all values
are sorted in ascending order. Otherwise, specify an order of "desc" for
descending or "asc" for ascending sort order of corresponding values.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[iteratees=[_.identity]]` *(Function&#91;&#93;|Object&#91;&#93;|string&#91;&#93;)*: The iteratees to sort by.
3. `[orders]` *(string&#91;&#93;)*: The sort orders of `iteratees`.

#### Returns
*(Array)*:  Returns the new sorted array.

#### Example
```js
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 36 }
];

// Sort by `user` in ascending order and by `age` in descending order.
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_partitioncollection-predicate_identity"></a>`_.partition(collection, [predicate=_.identity])`
<a href="#_partitioncollection-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7892 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.partition "See the npm package")

Creates an array of elements split into two groups, the first of which
contains elements `predicate` returns truthy for, the second of which
contains elements `predicate` returns falsey for. The predicate is
invoked with one argument: (value).

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(Array)*:  Returns the array of grouped elements.

#### Example
```js
var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

_.partition(users, function(o) { return o.active; });
// => objects for [['fred'], ['barney', 'pebbles']]

// The `_.matches` iteratee shorthand.
_.partition(users, { 'age': 1, 'active': false });
// => objects for [['pebbles'], ['barney', 'fred']]

// The `_.matchesProperty` iteratee shorthand.
_.partition(users, ['active', false]);
// => objects for [['barney', 'pebbles'], ['fred']]

// The `_.property` iteratee shorthand.
_.partition(users, 'active');
// => objects for [['fred'], ['barney', 'pebbles']]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_reducecollection-iteratee_identity-accumulator"></a>`_.reduce(collection, [iteratee=_.identity], [accumulator])`
<a href="#_reducecollection-iteratee_identity-accumulator">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7931 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.reduce "See the npm package")

Reduces `collection` to a value which is the accumulated result of running
each element in `collection` through `iteratee`, where each successive
invocation is supplied the return value of the previous. If `accumulator`
is not provided the first element of `collection` is used as the initial
value. The iteratee is invoked with four arguments:<br>
(accumulator, value, index|key, collection).
<br>
<br>
Many lodash methods are guarded to work as iteratees for methods like
`_.reduce`, `_.reduceRight`, and `_.transform`.
<br>
<br>
The guarded methods are:<br>
`assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
and `sortBy`

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[iteratee=_.identity]` *(Function)*: The function invoked per iteration.
3. `[accumulator]` *(&#42;)*: The initial value.

#### Returns
*(&#42;)*:  Returns the accumulated value.

#### Example
```js
_.reduce([1, 2], function(sum, n) {
  return sum + n;
}, 0);
// => 3

_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_reducerightcollection-iteratee_identity-accumulator"></a>`_.reduceRight(collection, [iteratee=_.identity], [accumulator])`
<a href="#_reducerightcollection-iteratee_identity-accumulator">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7958 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.reduceright "See the npm package")

This method is like `_.reduce` except that it iterates over elements of
`collection` from right to left.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[iteratee=_.identity]` *(Function)*: The function invoked per iteration.
3. `[accumulator]` *(&#42;)*: The initial value.

#### Returns
*(&#42;)*:  Returns the accumulated value.

#### Example
```js
var array = [[0, 1], [2, 3], [4, 5]];

_.reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
// => [4, 5, 2, 3, 0, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_rejectcollection-predicate_identity"></a>`_.reject(collection, [predicate=_.identity])`
<a href="#_rejectcollection-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7997 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.reject "See the npm package")

The opposite of `_.filter`; this method returns the elements of `collection`
that `predicate` does **not** return truthy for.

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(Array)*:  Returns the new filtered array.

#### Example
```js
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];

_.reject(users, function(o) { return !o.active; });
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
_.reject(users, { 'age': 40, 'active': true });
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
_.reject(users, ['active', false]);
// => objects for ['fred']

// The `_.property` iteratee shorthand.
_.reject(users, 'active');
// => objects for ['barney']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_samplecollection"></a>`_.sample(collection)`
<a href="#_samplecollection">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8018 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sample "See the npm package")

Gets a random element from `collection`.

#### Arguments
1. `collection` *(Array|Object)*: The collection to sample.

#### Returns
*(&#42;)*:  Returns the random element.

#### Example
```js
_.sample([1, 2, 3, 4]);
// => 2
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_samplesizecollection-n0"></a>`_.sampleSize(collection, [n=0])`
<a href="#_samplesizecollection-n0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8043 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.samplesize "See the npm package")

Gets `n` random elements at unique keys from `collection` up to the
size of `collection`.

#### Arguments
1. `collection` *(Array|Object)*: The collection to sample.
2. `[n=0]` *(number)*: The number of elements to sample.

#### Returns
*(Array)*:  Returns the random elements.

#### Example
```js
_.sampleSize([1, 2, 3], 2);
// => [3, 1]

_.sampleSize([1, 2, 3], 4);
// => [2, 3, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_shufflecollection"></a>`_.shuffle(collection)`
<a href="#_shufflecollection">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8075 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.shuffle "See the npm package")

Creates an array of shuffled values, using a version of the
[Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).

#### Arguments
1. `collection` *(Array|Object)*: The collection to shuffle.

#### Returns
*(Array)*:  Returns the new shuffled array.

#### Example
```js
_.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sizecollection"></a>`_.size(collection)`
<a href="#_sizecollection">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8099 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.size "See the npm package")

Gets the size of `collection` by returning its length for array-like
values or the number of own enumerable properties for objects.

#### Arguments
1. `collection` *(Array|Object)*: The collection to inspect.

#### Returns
*(number)*:  Returns the collection size.

#### Example
```js
_.size([1, 2, 3]);
// => 3

_.size({ 'a': 1, 'b': 2 });
// => 2

_.size('pebbles');
// => 7
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_somecollection-predicate_identity"></a>`_.some(collection, [predicate=_.identity])`
<a href="#_somecollection-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8144 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.some "See the npm package")

Checks if `predicate` returns truthy for **any** element of `collection`.
Iteration is stopped once `predicate` returns truthy. The predicate is
invoked with three arguments: (value, index|key, collection).

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(boolean)*:  Returns `true` if any element passes the predicate check, else `false`.

#### Example
```js
_.some([null, 0, 'yes', false], Boolean);
// => true

var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];

// The `_.matches` iteratee shorthand.
_.some(users, { 'user': 'barney', 'active': false });
// => false

// The `_.matchesProperty` iteratee shorthand.
_.some(users, ['active', false]);
// => true

// The `_.property` iteratee shorthand.
_.some(users, 'active');
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sortbycollection-iteratees-_identity"></a>`_.sortBy(collection, [iteratees=[_.identity]])`
<a href="#_sortbycollection-iteratees-_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8185 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sortby "See the npm package")

Creates an array of elements, sorted in ascending order by the results of
running each element in a collection through each iteratee. This method
performs a stable sort, that is, it preserves the original sort order of
equal elements. The iteratees are invoked with one argument: (value).

#### Arguments
1. `collection` *(Array|Object)*: The collection to iterate over.
2. `[iteratees=[_.identity]]` *(...(Function|Function&#91;&#93;|Object|Object&#91;&#93;|string|string&#91;&#93;)*:  The iteratees to sort by, specified individually or in arrays.

#### Returns
*(Array)*:  Returns the new sorted array.

#### Example
```js
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 34 }
];

_.sortBy(users, function(o) { return o.user; });
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]

_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]

_.sortBy(users, 'user', function(o) {
  return Math.floor(o.age / 10);
});
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Date” Methods`

<!-- div -->

### <a id="_now"></a>`_.now()`
<a href="#_now">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8216 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.now "See the npm package")

Gets the timestamp of the number of milliseconds that have elapsed since
the Unix epoch (1 January 1970 00:00:00 UTC).

#### Returns
*(number)*:  Returns the timestamp.

#### Example
```js
_.defer(function(stamp) {
  console.log(_.now() - stamp);
}, _.now());
// => logs the number of milliseconds it took for the deferred function to be invoked
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Function” Methods`

<!-- div -->

### <a id="_aftern-func"></a>`_.after(n, func)`
<a href="#_aftern-func">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8243 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.after "See the npm package")

The opposite of `_.before`; this method creates a function that invokes
`func` once it's called `n` or more times.

#### Arguments
1. `n` *(number)*: The number of calls before `func` is invoked.
2. `func` *(Function)*: The function to restrict.

#### Returns
*(Function)*:  Returns the new restricted function.

#### Example
```js
var saves = ['profile', 'settings'];

var done = _.after(saves.length, function() {
  console.log('done saving!');
});

_.forEach(saves, function(type) {
  asyncSave({ 'type': type, 'complete': done });
});
// => logs 'done saving!' after the two async saves have completed
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_aryfunc-nfunclength"></a>`_.ary(func, [n=func.length])`
<a href="#_aryfunc-nfunclength">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8271 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.ary "See the npm package")

Creates a function that accepts up to `n` arguments, ignoring any
additional arguments.

#### Arguments
1. `func` *(Function)*: The function to cap arguments for.
2. `[n=func.length]` *(number)*: The arity cap.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
_.map(['6', '8', '10'], _.ary(parseInt, 1));
// => [6, 8, 10]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_beforen-func"></a>`_.before(n, func)`
<a href="#_beforen-func">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8293 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.before "See the npm package")

Creates a function that invokes `func`, with the `this` binding and arguments
of the created function, while it's called less than `n` times. Subsequent
calls to the created function return the result of the last `func` invocation.

#### Arguments
1. `n` *(number)*: The number of calls at which `func` is no longer invoked.
2. `func` *(Function)*: The function to restrict.

#### Returns
*(Function)*:  Returns the new restricted function.

#### Example
```js
jQuery(element).on('click', _.before(5, addContactToList));
// => allows adding up to 4 contacts to the list
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_bindfunc-thisarg-partials"></a>`_.bind(func, thisArg, [partials])`
<a href="#_bindfunc-thisarg-partials">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8345 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.bind "See the npm package")

Creates a function that invokes `func` with the `this` binding of `thisArg`
and prepends any additional `_.bind` arguments to those provided to the
bound function.
<br>
<br>
The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
may be used as a placeholder for partially applied arguments.
<br>
<br>
**Note:** Unlike native `Function#bind` this method doesn't set the "length"
property of bound functions.

#### Arguments
1. `func` *(Function)*: The function to bind.
2. `thisArg` *(&#42;)*: The `this` binding of `func`.
3. `[partials]` *(...&#42;)*: The arguments to be partially applied.

#### Returns
*(Function)*:  Returns the new bound function.

#### Example
```js
var greet = function(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
};

var object = { 'user': 'fred' };

var bound = _.bind(greet, object, 'hi');
bound('!');
// => 'hi fred!'

// Bound with placeholders.
var bound = _.bind(greet, object, _, '!');
bound('hi');
// => 'hi fred!'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_bindkeyobject-key-partials"></a>`_.bindKey(object, key, [partials])`
<a href="#_bindkeyobject-key-partials">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8400 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.bindkey "See the npm package")

Creates a function that invokes the method at `object[key]` and prepends
any additional `_.bindKey` arguments to those provided to the bound function.
<br>
<br>
This method differs from `_.bind` by allowing bound functions to reference
methods that may be redefined or don't yet exist.
See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
for more details.
<br>
<br>
The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
builds, may be used as a placeholder for partially applied arguments.

#### Arguments
1. `object` *(Object)*: The object to invoke the method on.
2. `key` *(string)*: The key of the method.
3. `[partials]` *(...&#42;)*: The arguments to be partially applied.

#### Returns
*(Function)*:  Returns the new bound function.

#### Example
```js
var object = {
  'user': 'fred',
  'greet': function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};

var bound = _.bindKey(object, 'greet', 'hi');
bound('!');
// => 'hi fred!'

object.greet = function(greeting, punctuation) {
  return greeting + 'ya ' + this.user + punctuation;
};

bound('!');
// => 'hiya fred!'

// Bound with placeholders.
var bound = _.bindKey(object, 'greet', _, '!');
bound('hi');
// => 'hiya fred!'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_curryfunc-arityfunclength"></a>`_.curry(func, [arity=func.length])`
<a href="#_curryfunc-arityfunclength">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8451 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.curry "See the npm package")

Creates a function that accepts arguments of `func` and either invokes
`func` returning its result, if at least `arity` number of arguments have
been provided, or returns a function that accepts the remaining `func`
arguments, and so on. The arity of `func` may be specified if `func.length`
is not sufficient.
<br>
<br>
The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
may be used as a placeholder for provided arguments.
<br>
<br>
**Note:** This method doesn't set the "length" property of curried functions.

#### Arguments
1. `func` *(Function)*: The function to curry.
2. `[arity=func.length]` *(number)*: The arity of `func`.

#### Returns
*(Function)*:  Returns the new curried function.

#### Example
```js
var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = _.curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_curryrightfunc-arityfunclength"></a>`_.curryRight(func, [arity=func.length])`
<a href="#_curryrightfunc-arityfunclength">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8495 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.curryright "See the npm package")

This method is like `_.curry` except that arguments are applied to `func`
in the manner of `_.partialRight` instead of `_.partial`.
<br>
<br>
The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
builds, may be used as a placeholder for provided arguments.
<br>
<br>
**Note:** This method doesn't set the "length" property of curried functions.

#### Arguments
1. `func` *(Function)*: The function to curry.
2. `[arity=func.length]` *(number)*: The arity of `func`.

#### Returns
*(Function)*:  Returns the new curried function.

#### Example
```js
var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = _.curryRight(abc);

curried(3)(2)(1);
// => [1, 2, 3]

curried(2, 3)(1);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
curried(3)(1, _)(2);
// => [1, 2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_debouncefunc-wait0-options"></a>`_.debounce(func, [wait=0], [options])`
<a href="#_debouncefunc-wait0-options">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8551 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.debounce "See the npm package")

Creates a debounced function that delays invoking `func` until after `wait`
milliseconds have elapsed since the last time the debounced function was
invoked. The debounced function comes with a `cancel` method to cancel
delayed `func` invocations and a `flush` method to immediately invoke them.
Provide an options object to indicate whether `func` should be invoked on
the leading and/or trailing edge of the `wait` timeout. The `func` is invoked
with the last arguments provided to the debounced function. Subsequent calls
to the debounced function return the result of the last `func` invocation.
<br>
<br>
**Note:** If `leading` and `trailing` options are `true`, `func` is invoked
on the trailing edge of the timeout only if the debounced function is
invoked more than once during the `wait` timeout.
<br>
<br>
See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
for details over the differences between `_.debounce` and `_.throttle`.

#### Arguments
1. `func` *(Function)*: The function to debounce.
2. `[wait=0]` *(number)*: The number of milliseconds to delay.
3. `[options]` *(Object)*: The options object.
4. `[options.leading=false]` *(boolean)*: Specify invoking on the leading edge of the timeout.
5. `[options.maxWait]` *(number)*: The maximum time `func` is allowed to be delayed before it's invoked.
6. `[options.trailing=true]` *(boolean)*: Specify invoking on the trailing edge of the timeout.

#### Returns
*(Function)*:  Returns the new debounced function.

#### Example
```js
// Avoid costly calculations while the window size is in flux.
jQuery(window).on('resize', _.debounce(calculateLayout, 150));

// Invoke `sendMail` when clicked, debouncing subsequent calls.
jQuery(element).on('click', _.debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}));

// Ensure `batchLog` is invoked once after 1 second of debounced calls.
var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
var source = new EventSource('/stream');
jQuery(source).on('message', debounced);

// Cancel the trailing debounced invocation.
jQuery(window).on('popstate', debounced.cancel);
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_deferfunc-args"></a>`_.defer(func, [args])`
<a href="#_deferfunc-args">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8683 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.defer "See the npm package")

Defers invoking the `func` until the current call stack has cleared. Any
additional arguments are provided to `func` when it's invoked.

#### Arguments
1. `func` *(Function)*: The function to defer.
2. `[args]` *(...&#42;)*: The arguments to invoke `func` with.

#### Returns
*(number)*:  Returns the timer id.

#### Example
```js
_.defer(function(text) {
  console.log(text);
}, 'deferred');
// => logs 'deferred' after one or more milliseconds
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_delayfunc-wait-args"></a>`_.delay(func, wait, [args])`
<a href="#_delayfunc-wait-args">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8705 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.delay "See the npm package")

Invokes `func` after `wait` milliseconds. Any additional arguments are
provided to `func` when it's invoked.

#### Arguments
1. `func` *(Function)*: The function to delay.
2. `wait` *(number)*: The number of milliseconds to delay invocation.
3. `[args]` *(...&#42;)*: The arguments to invoke `func` with.

#### Returns
*(number)*:  Returns the timer id.

#### Example
```js
_.delay(function(text) {
  console.log(text);
}, 1000, 'later');
// => logs 'later' after one second
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_flipfunc"></a>`_.flip(func)`
<a href="#_flipfunc">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8726 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.flip "See the npm package")

Creates a function that invokes `func` with arguments reversed.

#### Arguments
1. `func` *(Function)*: The function to flip arguments for.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var flipped = _.flip(function() {
  return _.toArray(arguments);
});

flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_memoizefunc-resolver"></a>`_.memoize(func, [resolver])`
<a href="#_memoizefunc-resolver">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8772 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.memoize "See the npm package")

Creates a function that memoizes the result of `func`. If `resolver` is
provided it determines the cache key for storing the result based on the
arguments provided to the memoized function. By default, the first argument
provided to the memoized function is used as the map cache key. The `func`
is invoked with the `this` binding of the memoized function.
<br>
<br>
**Note:** The cache is exposed as the `cache` property on the memoized
function. Its creation may be customized by replacing the `_.memoize.Cache`
constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
method interface of `delete`, `get`, `has`, and `set`.

#### Arguments
1. `func` *(Function)*: The function to have its output memoized.
2. `[resolver]` *(Function)*: The function to resolve the cache key.

#### Returns
*(Function)*:  Returns the new memoizing function.

#### Example
```js
var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };

var values = _.memoize(_.values);
values(object);
// => [1, 2]

values(other);
// => [3, 4]

object.a = 2;
values(object);
// => [1, 2]

// Modify the result cache.
values.cache.set(object, ['a', 'b']);
values(object);
// => ['a', 'b']

// Replace `_.memoize.Cache`.
_.memoize.Cache = WeakMap;
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_negatepredicate"></a>`_.negate(predicate)`
<a href="#_negatepredicate">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8811 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.negate "See the npm package")

Creates a function that negates the result of the predicate `func`. The
`func` predicate is invoked with the `this` binding and arguments of the
created function.

#### Arguments
1. `predicate` *(Function)*: The predicate to negate.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
function isEven(n) {
  return n % 2 == 0;
}

_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
// => [1, 3, 5]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_oncefunc"></a>`_.once(func)`
<a href="#_oncefunc">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8837 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.once "See the npm package")

Creates a function that is restricted to invoking `func` once. Repeat calls
to the function return the value of the first invocation. The `func` is
invoked with the `this` binding and arguments of the created function.

#### Arguments
1. `func` *(Function)*: The function to restrict.

#### Returns
*(Function)*:  Returns the new restricted function.

#### Example
```js
var initialize = _.once(createApplication);
initialize();
initialize();
// `initialize` invokes `createApplication` once
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_overargsfunc-transforms"></a>`_.overArgs(func, [transforms])`
<a href="#_overargsfunc-transforms">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8872 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.overargs "See the npm package")

Creates a function that invokes `func` with arguments transformed by
corresponding `transforms`.

#### Arguments
1. `func` *(Function)*: The function to wrap.
2. `[transforms]` *(...(Function|Function&#91;&#93;)*: The functions to transform arguments, specified individually or in arrays.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
function doubled(n) {
  return n * 2;
}

function square(n) {
  return n * n;
}

var func = _.overArgs(function(x, y) {
  return [x, y];
}, square, doubled);

func(9, 3);
// => [81, 6]

func(10, 5);
// => [100, 10]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_partialfunc-partials"></a>`_.partial(func, [partials])`
<a href="#_partialfunc-partials">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8919 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.partial "See the npm package")

Creates a function that invokes `func` with `partial` arguments prepended
to those provided to the new function. This method is like `_.bind` except
it does **not** alter the `this` binding.
<br>
<br>
The `_.partial.placeholder` value, which defaults to `_` in monolithic
builds, may be used as a placeholder for partially applied arguments.
<br>
<br>
**Note:** This method doesn't set the "length" property of partially
applied functions.

#### Arguments
1. `func` *(Function)*: The function to partially apply arguments to.
2. `[partials]` *(...&#42;)*: The arguments to be partially applied.

#### Returns
*(Function)*:  Returns the new partially applied function.

#### Example
```js
var greet = function(greeting, name) {
  return greeting + ' ' + name;
};

var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'

// Partially applied with placeholders.
var greetFred = _.partial(greet, _, 'fred');
greetFred('hi');
// => 'hi fred'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_partialrightfunc-partials"></a>`_.partialRight(func, [partials])`
<a href="#_partialrightfunc-partials">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8957 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.partialright "See the npm package")

This method is like `_.partial` except that partially applied arguments
are appended to those provided to the new function.
<br>
<br>
The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
builds, may be used as a placeholder for partially applied arguments.
<br>
<br>
**Note:** This method doesn't set the "length" property of partially
applied functions.

#### Arguments
1. `func` *(Function)*: The function to partially apply arguments to.
2. `[partials]` *(...&#42;)*: The arguments to be partially applied.

#### Returns
*(Function)*:  Returns the new partially applied function.

#### Example
```js
var greet = function(greeting, name) {
  return greeting + ' ' + name;
};

var greetFred = _.partialRight(greet, 'fred');
greetFred('hi');
// => 'hi fred'

// Partially applied with placeholders.
var sayHelloTo = _.partialRight(greet, 'hello', _);
sayHelloTo('fred');
// => 'hello fred'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_reargfunc-indexes"></a>`_.rearg(func, indexes)`
<a href="#_reargfunc-indexes">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L8986 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.rearg "See the npm package")

Creates a function that invokes `func` with arguments arranged according
to the specified indexes where the argument value at the first index is
provided as the first argument, the argument value at the second index is
provided as the second argument, and so on.

#### Arguments
1. `func` *(Function)*: The function to rearrange arguments for.
2. `indexes` *(...(number|number&#91;&#93;)*: The arranged argument indexes, specified individually or in arrays.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var rearged = _.rearg(function(a, b, c) {
  return [a, b, c];
}, 2, 0, 1);

rearged('b', 'c', 'a')
// => ['a', 'b', 'c']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_restfunc-startfunclength-1"></a>`_.rest(func, [start=func.length-1])`
<a href="#_restfunc-startfunclength-1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9012 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.rest "See the npm package")

Creates a function that invokes `func` with the `this` binding of the
created function and arguments from `start` and beyond provided as an array.
<br>
<br>
**Note:** This method is based on the [rest parameter](https://mdn.io/rest_parameters).

#### Arguments
1. `func` *(Function)*: The function to apply a rest parameter to.
2. `[start=func.length-1]` *(number)*: The start position of the rest parameter.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var say = _.rest(function(what, names) {
  return what + ' ' + _.initial(names).join(', ') +
    (_.size(names) > 1 ? ', & ' : '') + _.last(names);
});

say('hello', 'fred', 'barney', 'pebbles');
// => 'hello fred, barney, & pebbles'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_spreadfunc-start0"></a>`_.spread(func, [start=0])`
<a href="#_spreadfunc-start0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9072 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.spread "See the npm package")

Creates a function that invokes `func` with the `this` binding of the created
function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
<br>
<br>
**Note:** This method is based on the [spread operator](https://mdn.io/spread_operator).

#### Arguments
1. `func` *(Function)*: The function to spread arguments over.
2. `[start=0]` *(number)*: The start position of the spread.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var say = _.spread(function(who, what) {
  return who + ' says ' + what;
});

say(['fred', 'hello']);
// => 'fred says hello'

var numbers = Promise.all([
  Promise.resolve(40),
  Promise.resolve(36)
]);

numbers.then(_.spread(function(x, y) {
  return x + y;
}));
// => a Promise of 76
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_throttlefunc-wait0-options"></a>`_.throttle(func, [wait=0], [options])`
<a href="#_throttlefunc-wait0-options">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9128 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.throttle "See the npm package")

Creates a throttled function that only invokes `func` at most once per
every `wait` milliseconds. The throttled function comes with a `cancel`
method to cancel delayed `func` invocations and a `flush` method to
immediately invoke them. Provide an options object to indicate whether
`func` should be invoked on the leading and/or trailing edge of the `wait`
timeout. The `func` is invoked with the last arguments provided to the
throttled function. Subsequent calls to the throttled function return the
result of the last `func` invocation.
<br>
<br>
**Note:** If `leading` and `trailing` options are `true`, `func` is invoked
on the trailing edge of the timeout only if the throttled function is
invoked more than once during the `wait` timeout.
<br>
<br>
See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
for details over the differences between `_.throttle` and `_.debounce`.

#### Arguments
1. `func` *(Function)*: The function to throttle.
2. `[wait=0]` *(number)*: The number of milliseconds to throttle invocations to.
3. `[options]` *(Object)*: The options object.
4. `[options.leading=true]` *(boolean)*: Specify invoking on the leading edge of the timeout.
5. `[options.trailing=true]` *(boolean)*: Specify invoking on the trailing edge of the timeout.

#### Returns
*(Function)*:  Returns the new throttled function.

#### Example
```js
// Avoid excessively updating the position while scrolling.
jQuery(window).on('scroll', _.throttle(updatePosition, 100));

// Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
jQuery(element).on('click', throttled);

// Cancel the trailing throttled invocation.
jQuery(window).on('popstate', throttled.cancel);
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_unaryfunc"></a>`_.unary(func)`
<a href="#_unaryfunc">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9156 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.unary "See the npm package")

Creates a function that accepts up to one argument, ignoring any
additional arguments.

#### Arguments
1. `func` *(Function)*: The function to cap arguments for.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
_.map(['6', '8', '10'], _.unary(parseInt));
// => [6, 8, 10]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_wrapvalue-wrapper"></a>`_.wrap(value, wrapper)`
<a href="#_wrapvalue-wrapper">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9181 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.wrap "See the npm package")

Creates a function that provides `value` to the wrapper function as its
first argument. Any additional arguments provided to the function are
appended to those provided to the wrapper function. The wrapper is invoked
with the `this` binding of the created function.

#### Arguments
1. `value` *(&#42;)*: The value to wrap.
2. `wrapper` *(Function)*: The wrapper function.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var p = _.wrap(_.escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});

p('fred, barney, & pebbles');
// => '<p>fred, barney, &amp; pebbles</p>'
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Lang” Methods`

<!-- div -->

### <a id="_clonevalue"></a>`_.clone(value)`
<a href="#_clonevalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9212 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.clone "See the npm package")

Creates a shallow clone of `value`.
<br>
<br>
**Note:** This method is loosely based on the
[structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
and supports cloning arrays, array buffers, booleans, date objects, maps,
numbers, `Object` objects, regexes, sets, strings, symbols, and typed
arrays. The own enumerable properties of `arguments` objects are cloned
as plain objects. An empty object is returned for uncloneable values such
as error objects, functions, DOM nodes, and WeakMaps.

#### Arguments
1. `value` *(&#42;)*: The value to clone.

#### Returns
*(&#42;)*:  Returns the cloned value.

#### Example
```js
var objects = [{ 'a': 1 }, { 'b': 2 }];

var shallow = _.clone(objects);
console.log(shallow[0] === objects[0]);
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_clonedeepvalue"></a>`_.cloneDeep(value)`
<a href="#_clonedeepvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9265 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.clonedeep "See the npm package")

This method is like `_.clone` except that it recursively clones `value`.

#### Arguments
1. `value` *(&#42;)*: The value to recursively clone.

#### Returns
*(&#42;)*:  Returns the deep cloned value.

#### Example
```js
var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_clonedeepwithvalue-customizer"></a>`_.cloneDeepWith(value, [customizer])`
<a href="#_clonedeepwithvalue-customizer">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9295 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.clonedeepwith "See the npm package")

This method is like `_.cloneWith` except that it recursively clones `value`.

#### Arguments
1. `value` *(&#42;)*: The value to recursively clone.
2. `[customizer]` *(Function)*: The function to customize cloning.

#### Returns
*(&#42;)*:  Returns the deep cloned value.

#### Example
```js
function customizer(value) {
  if (_.isElement(value)) {
    return value.cloneNode(true);
  }
}

var el = _.cloneDeepWith(document.body, customizer);

console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 20
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_clonewithvalue-customizer"></a>`_.cloneWith(value, [customizer])`
<a href="#_clonewithvalue-customizer">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9245 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.clonewith "See the npm package")

This method is like `_.clone` except that it accepts `customizer` which
is invoked to produce the cloned value. If `customizer` returns `undefined`
cloning is handled by the method instead. The `customizer` is invoked with
up to four arguments; (value [, index|key, object, stack]).

#### Arguments
1. `value` *(&#42;)*: The value to clone.
2. `[customizer]` *(Function)*: The function to customize cloning.

#### Returns
*(&#42;)*:  Returns the cloned value.

#### Example
```js
function customizer(value) {
  if (_.isElement(value)) {
    return value.cloneNode(false);
  }
}

var el = _.cloneWith(document.body, customizer);

console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 0
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_eqvalue-other"></a>`_.eq(value, other)`
<a href="#_eqvalue-other">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9329 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.eq "See the npm package")

Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
comparison between two values to determine if they are equivalent.

#### Arguments
1. `value` *(&#42;)*: The value to compare.
2. `other` *(&#42;)*: The other value to compare.

#### Returns
*(boolean)*:  Returns `true` if the values are equivalent, else `false`.

#### Example
```js
var object = { 'user': 'fred' };
var other = { 'user': 'fred' };

_.eq(object, object);
// => true

_.eq(object, other);
// => false

_.eq('a', 'a');
// => true

_.eq('a', Object('a'));
// => false

_.eq(NaN, NaN);
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_gtvalue-other"></a>`_.gt(value, other)`
<a href="#_gtvalue-other">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9353 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.gt "See the npm package")

Checks if `value` is greater than `other`.

#### Arguments
1. `value` *(&#42;)*: The value to compare.
2. `other` *(&#42;)*: The other value to compare.

#### Returns
*(boolean)*:  Returns `true` if `value` is greater than `other`, else `false`.

#### Example
```js
_.gt(3, 1);
// => true

_.gt(3, 3);
// => false

_.gt(1, 3);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_gtevalue-other"></a>`_.gte(value, other)`
<a href="#_gtevalue-other">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9377 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.gte "See the npm package")

Checks if `value` is greater than or equal to `other`.

#### Arguments
1. `value` *(&#42;)*: The value to compare.
2. `other` *(&#42;)*: The other value to compare.

#### Returns
*(boolean)*:  Returns `true` if `value` is greater than or equal to `other`, else `false`.

#### Example
```js
_.gte(3, 1);
// => true

_.gte(3, 3);
// => true

_.gte(1, 3);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isargumentsvalue"></a>`_.isArguments(value)`
<a href="#_isargumentsvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9397 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isarguments "See the npm package")

Checks if `value` is likely an `arguments` object.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is correctly classified, else `false`.

#### Example
```js
_.isArguments(function() { return arguments; }());
// => true

_.isArguments([1, 2, 3]);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isarrayvalue"></a>`_.isArray(value)`
<a href="#_isarrayvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9426 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isarray "See the npm package")

Checks if `value` is classified as an `Array` object.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is correctly classified, else `false`.

#### Example
```js
_.isArray([1, 2, 3]);
// => true

_.isArray(document.body.children);
// => false

_.isArray('abc');
// => false

_.isArray(_.noop);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isarraylikevalue"></a>`_.isArrayLike(value)`
<a href="#_isarraylikevalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9453 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isarraylike "See the npm package")

Checks if `value` is array-like. A value is considered array-like if it's
not a function and has a `value.length` that's an integer greater than or
equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is array-like, else `false`.

#### Example
```js
_.isArrayLike([1, 2, 3]);
// => true

_.isArrayLike(document.body.children);
// => true

_.isArrayLike('abc');
// => true

_.isArrayLike(_.noop);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isarraylikeobjectvalue"></a>`_.isArrayLikeObject(value)`
<a href="#_isarraylikeobjectvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9482 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isarraylikeobject "See the npm package")

This method is like `_.isArrayLike` except that it also checks if `value`
is an object.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is an array-like object, else `false`.

#### Example
```js
_.isArrayLikeObject([1, 2, 3]);
// => true

_.isArrayLikeObject(document.body.children);
// => true

_.isArrayLikeObject('abc');
// => false

_.isArrayLikeObject(_.noop);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isbooleanvalue"></a>`_.isBoolean(value)`
<a href="#_isbooleanvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9502 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isboolean "See the npm package")

Checks if `value` is classified as a boolean primitive or object.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is correctly classified, else `false`.

#### Example
```js
_.isBoolean(false);
// => true

_.isBoolean(null);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isdatevalue"></a>`_.isDate(value)`
<a href="#_isdatevalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9523 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isdate "See the npm package")

Checks if `value` is classified as a `Date` object.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is correctly classified, else `false`.

#### Example
```js
_.isDate(new Date);
// => true

_.isDate('Mon April 23 2012');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_iselementvalue"></a>`_.isElement(value)`
<a href="#_iselementvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9543 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.iselement "See the npm package")

Checks if `value` is likely a DOM element.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is a DOM element, else `false`.

#### Example
```js
_.isElement(document.body);
// => true

_.isElement('<body>');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isemptyvalue"></a>`_.isEmpty(value)`
<a href="#_isemptyvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9574 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isempty "See the npm package")

Checks if `value` is empty. A value is considered empty unless it's an
`arguments` object, array, string, or jQuery-like collection with a length
greater than `0` or an object with own enumerable properties.

#### Arguments
1. `value` *(Array|Object|string)*: The value to inspect.

#### Returns
*(boolean)*:  Returns `true` if `value` is empty, else `false`.

#### Example
```js
_.isEmpty(null);
// => true

_.isEmpty(true);
// => true

_.isEmpty(1);
// => true

_.isEmpty([1, 2, 3]);
// => false

_.isEmpty({ 'a': 1 });
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isequalvalue-other"></a>`_.isEqual(value, other)`
<a href="#_isequalvalue-other">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9614 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isequal "See the npm package")

Performs a deep comparison between two values to determine if they are
equivalent.
<br>
<br>
**Note:** This method supports comparing arrays, array buffers, booleans,
date objects, error objects, maps, numbers, `Object` objects, regexes,
sets, strings, symbols, and typed arrays. `Object` objects are compared
by their own, not inherited, enumerable properties. Functions and DOM
nodes are **not** supported.

#### Arguments
1. `value` *(&#42;)*: The value to compare.
2. `other` *(&#42;)*: The other value to compare.

#### Returns
*(boolean)*:  Returns `true` if the values are equivalent, else `false`.

#### Example
```js
var object = { 'user': 'fred' };
var other = { 'user': 'fred' };

_.isEqual(object, other);
// => true

object === other;
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isequalwithvalue-other-customizer"></a>`_.isEqualWith(value, other, [customizer])`
<a href="#_isequalwithvalue-other-customizer">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9649 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isequalwith "See the npm package")

This method is like `_.isEqual` except that it accepts `customizer` which is
invoked to compare values. If `customizer` returns `undefined` comparisons are
handled by the method instead. The `customizer` is invoked with up to six arguments:<br>
(objValue, othValue [, index|key, object, other, stack]).

#### Arguments
1. `value` *(&#42;)*: The value to compare.
2. `other` *(&#42;)*: The other value to compare.
3. `[customizer]` *(Function)*: The function to customize comparisons.

#### Returns
*(boolean)*:  Returns `true` if the values are equivalent, else `false`.

#### Example
```js
function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, othValue) {
  if (isGreeting(objValue) && isGreeting(othValue)) {
    return true;
  }
}

var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];

_.isEqualWith(array, other, customizer);
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_iserrorvalue"></a>`_.isError(value)`
<a href="#_iserrorvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9672 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.iserror "See the npm package")

Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
`SyntaxError`, `TypeError`, or `URIError` object.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is an error object, else `false`.

#### Example
```js
_.isError(new Error);
// => true

_.isError(Error);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isfinitevalue"></a>`_.isFinite(value)`
<a href="#_isfinitevalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9701 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isfinite "See the npm package")

Checks if `value` is a finite primitive number.
<br>
<br>
**Note:** This method is based on [`Number.isFinite`](https://mdn.io/Number/isFinite).

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is a finite number, else `false`.

#### Example
```js
_.isFinite(3);
// => true

_.isFinite(Number.MAX_VALUE);
// => true

_.isFinite(3.14);
// => true

_.isFinite(Infinity);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isfunctionvalue"></a>`_.isFunction(value)`
<a href="#_isfunctionvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9721 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isfunction "See the npm package")

Checks if `value` is classified as a `Function` object.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is correctly classified, else `false`.

#### Example
```js
_.isFunction(_);
// => true

_.isFunction(/abc/);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isintegervalue"></a>`_.isInteger(value)`
<a href="#_isintegervalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9753 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isinteger "See the npm package")

Checks if `value` is an integer.
<br>
<br>
**Note:** This method is based on [`Number.isInteger`](https://mdn.io/Number/isInteger).

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is an integer, else `false`.

#### Example
```js
_.isInteger(3);
// => true

_.isInteger(Number.MIN_VALUE);
// => false

_.isInteger(Infinity);
// => false

_.isInteger('3');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_islengthvalue"></a>`_.isLength(value)`
<a href="#_islengthvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9781 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.islength "See the npm package")

Checks if `value` is a valid array-like length.
<br>
<br>
**Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is a valid length, else `false`.

#### Example
```js
_.isLength(3);
// => true

_.isLength(Number.MIN_VALUE);
// => false

_.isLength(Infinity);
// => false

_.isLength('3');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_ismatchobject-source"></a>`_.isMatch(object, source)`
<a href="#_ismatchobject-source">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9862 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.ismatch "See the npm package")

Performs a deep comparison between `object` and `source` to determine if
`object` contains equivalent property values.
<br>
<br>
**Note:** This method supports comparing the same values as `_.isEqual`.

#### Arguments
1. `object` *(Object)*: The object to inspect.
2. `source` *(Object)*: The object of property values to match.

#### Returns
*(boolean)*:  Returns `true` if `object` is a match, else `false`.

#### Example
```js
var object = { 'user': 'fred', 'age': 40 };

_.isMatch(object, { 'age': 40 });
// => true

_.isMatch(object, { 'age': 36 });
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_ismatchwithobject-source-customizer"></a>`_.isMatchWith(object, source, [customizer])`
<a href="#_ismatchwithobject-source-customizer">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9897 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.ismatchwith "See the npm package")

This method is like `_.isMatch` except that it accepts `customizer` which
is invoked to compare values. If `customizer` returns `undefined` comparisons
are handled by the method instead. The `customizer` is invoked with five
arguments: (objValue, srcValue, index|key, object, source).

#### Arguments
1. `object` *(Object)*: The object to inspect.
2. `source` *(Object)*: The object of property values to match.
3. `[customizer]` *(Function)*: The function to customize comparisons.

#### Returns
*(boolean)*:  Returns `true` if `object` is a match, else `false`.

#### Example
```js
function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, srcValue) {
  if (isGreeting(objValue) && isGreeting(srcValue)) {
    return true;
  }
}

var object = { 'greeting': 'hello' };
var source = { 'greeting': 'hi' };

_.isMatchWith(object, source, customizer);
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isnanvalue"></a>`_.isNaN(value)`
<a href="#_isnanvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9927 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isnan "See the npm package")

Checks if `value` is `NaN`.
<br>
<br>
**Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
which returns `true` for `undefined` and other non-numeric values.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is `NaN`, else `false`.

#### Example
```js
_.isNaN(NaN);
// => true

_.isNaN(new Number(NaN));
// => true

isNaN(undefined);
// => true

_.isNaN(undefined);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isnativevalue"></a>`_.isNative(value)`
<a href="#_isnativevalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9949 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isnative "See the npm package")

Checks if `value` is a native function.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is a native function, else `false`.

#### Example
```js
_.isNative(Array.prototype.push);
// => true

_.isNative(_);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isnilvalue"></a>`_.isNil(value)`
<a href="#_isnilvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9999 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isnil "See the npm package")

Checks if `value` is `null` or `undefined`.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is nullish, else `false`.

#### Example
```js
_.isNil(null);
// => true

_.isNil(void 0);
// => true

_.isNil(NaN);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isnullvalue"></a>`_.isNull(value)`
<a href="#_isnullvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9976 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isnull "See the npm package")

Checks if `value` is `null`.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is `null`, else `false`.

#### Example
```js
_.isNull(null);
// => true

_.isNull(void 0);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isnumbervalue"></a>`_.isNumber(value)`
<a href="#_isnumbervalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10028 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isnumber "See the npm package")

Checks if `value` is classified as a `Number` primitive or object.
<br>
<br>
**Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
as numbers, use the `_.isFinite` method.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is correctly classified, else `false`.

#### Example
```js
_.isNumber(3);
// => true

_.isNumber(Number.MIN_VALUE);
// => true

_.isNumber(Infinity);
// => true

_.isNumber('3');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isobjectvalue"></a>`_.isObject(value)`
<a href="#_isobjectvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9808 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isobject "See the npm package")

Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
(e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is an object, else `false`.

#### Example
```js
_.isObject({});
// => true

_.isObject([1, 2, 3]);
// => true

_.isObject(_.noop);
// => true

_.isObject(null);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isobjectlikevalue"></a>`_.isObjectLike(value)`
<a href="#_isobjectlikevalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L9836 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isobjectlike "See the npm package")

Checks if `value` is object-like. A value is object-like if it's not `null`
and has a `typeof` result of "object".

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is object-like, else `false`.

#### Example
```js
_.isObjectLike({});
// => true

_.isObjectLike([1, 2, 3]);
// => true

_.isObjectLike(_.noop);
// => false

_.isObjectLike(null);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isplainobjectvalue"></a>`_.isPlainObject(value)`
<a href="#_isplainobjectvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10060 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isplainobject "See the npm package")

Checks if `value` is a plain object, that is, an object created by the
`Object` constructor or one with a `[[Prototype]]` of `null`.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is a plain object, else `false`.

#### Example
```js
function Foo() {
  this.a = 1;
}

_.isPlainObject(new Foo);
// => false

_.isPlainObject([1, 2, 3]);
// => false

_.isPlainObject({ 'x': 0, 'y': 0 });
// => true

_.isPlainObject(Object.create(null));
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isregexpvalue"></a>`_.isRegExp(value)`
<a href="#_isregexpvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10092 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isregexp "See the npm package")

Checks if `value` is classified as a `RegExp` object.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is correctly classified, else `false`.

#### Example
```js
_.isRegExp(/abc/);
// => true

_.isRegExp('/abc/');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_issafeintegervalue"></a>`_.isSafeInteger(value)`
<a href="#_issafeintegervalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10121 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.issafeinteger "See the npm package")

Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
double precision number which isn't the result of a rounded unsafe integer.
<br>
<br>
**Note:** This method is based on [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is a safe integer, else `false`.

#### Example
```js
_.isSafeInteger(3);
// => true

_.isSafeInteger(Number.MIN_VALUE);
// => false

_.isSafeInteger(Infinity);
// => false

_.isSafeInteger('3');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isstringvalue"></a>`_.isString(value)`
<a href="#_isstringvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10141 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isstring "See the npm package")

Checks if `value` is classified as a `String` primitive or object.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is correctly classified, else `false`.

#### Example
```js
_.isString('abc');
// => true

_.isString(1);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_issymbolvalue"></a>`_.isSymbol(value)`
<a href="#_issymbolvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10162 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.issymbol "See the npm package")

Checks if `value` is classified as a `Symbol` primitive or object.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is correctly classified, else `false`.

#### Example
```js
_.isSymbol(Symbol.iterator);
// => true

_.isSymbol('abc');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_istypedarrayvalue"></a>`_.isTypedArray(value)`
<a href="#_istypedarrayvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10183 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.istypedarray "See the npm package")

Checks if `value` is classified as a typed array.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is correctly classified, else `false`.

#### Example
```js
_.isTypedArray(new Uint8Array);
// => true

_.isTypedArray([]);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_isundefinedvalue"></a>`_.isUndefined(value)`
<a href="#_isundefinedvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10203 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.isundefined "See the npm package")

Checks if `value` is `undefined`.

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*:  Returns `true` if `value` is `undefined`, else `false`.

#### Example
```js
_.isUndefined(void 0);
// => true

_.isUndefined(null);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_ltvalue-other"></a>`_.lt(value, other)`
<a href="#_ltvalue-other">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10227 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.lt "See the npm package")

Checks if `value` is less than `other`.

#### Arguments
1. `value` *(&#42;)*: The value to compare.
2. `other` *(&#42;)*: The other value to compare.

#### Returns
*(boolean)*:  Returns `true` if `value` is less than `other`, else `false`.

#### Example
```js
_.lt(1, 3);
// => true

_.lt(3, 3);
// => false

_.lt(3, 1);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_ltevalue-other"></a>`_.lte(value, other)`
<a href="#_ltevalue-other">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10251 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.lte "See the npm package")

Checks if `value` is less than or equal to `other`.

#### Arguments
1. `value` *(&#42;)*: The value to compare.
2. `other` *(&#42;)*: The other value to compare.

#### Returns
*(boolean)*:  Returns `true` if `value` is less than or equal to `other`, else `false`.

#### Example
```js
_.lte(1, 3);
// => true

_.lte(3, 3);
// => true

_.lte(3, 1);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_toarrayvalue"></a>`_.toArray(value)`
<a href="#_toarrayvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10277 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.toarray "See the npm package")

Converts `value` to an array.

#### Arguments
1. `value` *(&#42;)*: The value to convert.

#### Returns
*(Array)*:  Returns the converted array.

#### Example
```js
_.toArray({ 'a': 1, 'b': 2 });
// => [1, 2]

_.toArray('abc');
// => ['a', 'b', 'c']

_.toArray(1);
// => []

_.toArray(null);
// => []
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_tointegervalue"></a>`_.toInteger(value)`
<a href="#_tointegervalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10317 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.tointeger "See the npm package")

Converts `value` to an integer.
<br>
<br>
**Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).

#### Arguments
1. `value` *(&#42;)*: The value to convert.

#### Returns
*(number)*:  Returns the converted integer.

#### Example
```js
_.toInteger(3);
// => 3

_.toInteger(Number.MIN_VALUE);
// => 0

_.toInteger(Infinity);
// => 1.7976931348623157e+308

_.toInteger('3');
// => 3
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_tolengthvalue"></a>`_.toLength(value)`
<a href="#_tolengthvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10355 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.tolength "See the npm package")

Converts `value` to an integer suitable for use as the length of an
array-like object.
<br>
<br>
**Note:** This method is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

#### Arguments
1. `value` *(&#42;)*: The value to convert.

#### Returns
*(number)*:  Returns the converted integer.

#### Example
```js
_.toLength(3);
// => 3

_.toLength(Number.MIN_VALUE);
// => 0

_.toLength(Infinity);
// => 4294967295

_.toLength('3');
// => 3
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_tonumbervalue"></a>`_.toNumber(value)`
<a href="#_tonumbervalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10381 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.tonumber "See the npm package")

Converts `value` to a number.

#### Arguments
1. `value` *(&#42;)*: The value to process.

#### Returns
*(number)*:  Returns the number.

#### Example
```js
_.toNumber(3);
// => 3

_.toNumber(Number.MIN_VALUE);
// => 5e-324

_.toNumber(Infinity);
// => Infinity

_.toNumber('3');
// => 3
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_toplainobjectvalue"></a>`_.toPlainObject(value)`
<a href="#_toplainobjectvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10419 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.toplainobject "See the npm package")

Converts `value` to a plain object flattening inherited enumerable
properties of `value` to own properties of the plain object.

#### Arguments
1. `value` *(&#42;)*: The value to convert.

#### Returns
*(Object)*:  Returns the converted plain object.

#### Example
```js
function Foo() {
  this.b = 2;
}

Foo.prototype.c = 3;

_.assign({ 'a': 1 }, new Foo);
// => { 'a': 1, 'b': 2 }

_.assign({ 'a': 1 }, _.toPlainObject(new Foo));
// => { 'a': 1, 'b': 2, 'c': 3 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_tosafeintegervalue"></a>`_.toSafeInteger(value)`
<a href="#_tosafeintegervalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10446 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.tosafeinteger "See the npm package")

Converts `value` to a safe integer. A safe integer can be compared and
represented correctly.

#### Arguments
1. `value` *(&#42;)*: The value to convert.

#### Returns
*(number)*:  Returns the converted integer.

#### Example
```js
_.toSafeInteger(3);
// => 3

_.toSafeInteger(Number.MIN_VALUE);
// => 0

_.toSafeInteger(Infinity);
// => 9007199254740991

_.toSafeInteger('3');
// => 3
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_tostringvalue"></a>`_.toString(value)`
<a href="#_tostringvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10470 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.tostring "See the npm package")

Converts `value` to a string if it's not one. An empty string is returned
for `null` and `undefined` values. The sign of `-0` is preserved.

#### Arguments
1. `value` *(&#42;)*: The value to process.

#### Returns
*(string)*:  Returns the string.

#### Example
```js
_.toString(null);
// => ''

_.toString(-0);
// => '-0'

_.toString([1, 2, 3]);
// => '1,2,3'
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Math” Methods`

<!-- div -->

### <a id="_addaugend-addend"></a>`_.add(augend, addend)`
<a href="#_addaugend-addend">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13716 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.add "See the npm package")

Adds two numbers.

#### Arguments
1. `augend` *(number)*: The first number in an addition.
2. `addend` *(number)*: The second number in an addition.

#### Returns
*(number)*:  Returns the total.

#### Example
```js
_.add(6, 4);
// => 10
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_ceilnumber-precision0"></a>`_.ceil(number, [precision=0])`
<a href="#_ceilnumber-precision0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13747 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.ceil "See the npm package")

Computes `number` rounded up to `precision`.

#### Arguments
1. `number` *(number)*: The number to round up.
2. `[precision=0]` *(number)*: The precision to round up to.

#### Returns
*(number)*:  Returns the rounded up number.

#### Example
```js
_.ceil(4.006);
// => 5

_.ceil(6.004, 2);
// => 6.01

_.ceil(6040, -2);
// => 6100
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_floornumber-precision0"></a>`_.floor(number, [precision=0])`
<a href="#_floornumber-precision0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13769 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.floor "See the npm package")

Computes `number` rounded down to `precision`.

#### Arguments
1. `number` *(number)*: The number to round down.
2. `[precision=0]` *(number)*: The precision to round down to.

#### Returns
*(number)*:  Returns the rounded down number.

#### Example
```js
_.floor(4.006);
// => 4

_.floor(0.046, 2);
// => 0.04

_.floor(4060, -2);
// => 4000
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_maxarray"></a>`_.max(array)`
<a href="#_maxarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13788 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.max "See the npm package")

Computes the maximum value of `array`. If `array` is empty or falsey
`undefined` is returned.

#### Arguments
1. `array` *(Array)*: The array to iterate over.

#### Returns
*(&#42;)*:  Returns the maximum value.

#### Example
```js
_.max([4, 2, 8, 6]);
// => 8

_.max([]);
// => undefined
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_maxbyarray-iteratee_identity"></a>`_.maxBy(array, [iteratee=_.identity])`
<a href="#_maxbyarray-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13816 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.maxby "See the npm package")

This method is like `_.max` except that it accepts `iteratee` which is
invoked for each element in `array` to generate the criterion by which
the value is ranked. The iteratee is invoked with one argument: (value).

#### Arguments
1. `array` *(Array)*: The array to iterate over.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee invoked per element.

#### Returns
*(&#42;)*:  Returns the maximum value.

#### Example
```js
var objects = [{ 'n': 1 }, { 'n': 2 }];

_.maxBy(objects, function(o) { return o.n; });
// => { 'n': 2 }

// The `_.property` iteratee shorthand.
_.maxBy(objects, 'n');
// => { 'n': 2 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_meanarray"></a>`_.mean(array)`
<a href="#_meanarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13835 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.mean "See the npm package")

Computes the mean of the values in `array`.

#### Arguments
1. `array` *(Array)*: The array to iterate over.

#### Returns
*(number)*:  Returns the mean.

#### Example
```js
_.mean([4, 2, 8, 6]);
// => 5
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_minarray"></a>`_.min(array)`
<a href="#_minarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13856 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.min "See the npm package")

Computes the minimum value of `array`. If `array` is empty or falsey
`undefined` is returned.

#### Arguments
1. `array` *(Array)*: The array to iterate over.

#### Returns
*(&#42;)*:  Returns the minimum value.

#### Example
```js
_.min([4, 2, 8, 6]);
// => 2

_.min([]);
// => undefined
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_minbyarray-iteratee_identity"></a>`_.minBy(array, [iteratee=_.identity])`
<a href="#_minbyarray-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13884 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.minby "See the npm package")

This method is like `_.min` except that it accepts `iteratee` which is
invoked for each element in `array` to generate the criterion by which
the value is ranked. The iteratee is invoked with one argument: (value).

#### Arguments
1. `array` *(Array)*: The array to iterate over.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee invoked per element.

#### Returns
*(&#42;)*:  Returns the minimum value.

#### Example
```js
var objects = [{ 'n': 1 }, { 'n': 2 }];

_.minBy(objects, function(o) { return o.n; });
// => { 'n': 1 }

// The `_.property` iteratee shorthand.
_.minBy(objects, 'n');
// => { 'n': 1 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_roundnumber-precision0"></a>`_.round(number, [precision=0])`
<a href="#_roundnumber-precision0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13910 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.round "See the npm package")

Computes `number` rounded to `precision`.

#### Arguments
1. `number` *(number)*: The number to round.
2. `[precision=0]` *(number)*: The precision to round to.

#### Returns
*(number)*:  Returns the rounded number.

#### Example
```js
_.round(4.006);
// => 4

_.round(4.006, 2);
// => 4.01

_.round(4060, -2);
// => 4100
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_subtractminuend-subtrahend"></a>`_.subtract(minuend, subtrahend)`
<a href="#_subtractminuend-subtrahend">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13926 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.subtract "See the npm package")

Subtract two numbers.

#### Arguments
1. `minuend` *(number)*: The first number in a subtraction.
2. `subtrahend` *(number)*: The second number in a subtraction.

#### Returns
*(number)*:  Returns the difference.

#### Example
```js
_.subtract(6, 4);
// => 2
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sumarray"></a>`_.sum(array)`
<a href="#_sumarray">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13950 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sum "See the npm package")

Computes the sum of the values in `array`.

#### Arguments
1. `array` *(Array)*: The array to iterate over.

#### Returns
*(number)*:  Returns the sum.

#### Example
```js
_.sum([4, 2, 8, 6]);
// => 20
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_sumbyarray-iteratee_identity"></a>`_.sumBy(array, [iteratee=_.identity])`
<a href="#_sumbyarray-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13978 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.sumby "See the npm package")

This method is like `_.sum` except that it accepts `iteratee` which is
invoked for each element in `array` to generate the value to be summed.
The iteratee is invoked with one argument: (value).

#### Arguments
1. `array` *(Array)*: The array to iterate over.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee invoked per element.

#### Returns
*(number)*:  Returns the sum.

#### Example
```js
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

_.sumBy(objects, function(o) { return o.n; });
// => 20

// The `_.property` iteratee shorthand.
_.sumBy(objects, 'n');
// => 20
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Number” Methods`

<!-- div -->

### <a id="_clampnumber-lower-upper"></a>`_.clamp(number, [lower], upper)`
<a href="#_clampnumber-lower-upper">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11745 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.clamp "See the npm package")

Clamps `number` within the inclusive `lower` and `upper` bounds.

#### Arguments
1. `number` *(number)*: The number to clamp.
2. `[lower]` *(number)*: The lower bound.
3. `upper` *(number)*: The upper bound.

#### Returns
*(number)*:  Returns the clamped number.

#### Example
```js
_.clamp(-10, -5, 5);
// => -5

_.clamp(10, -5, 5);
// => 5
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_inrangenumber-start0-end"></a>`_.inRange(number, [start=0], end)`
<a href="#_inrangenumber-start0-end">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11797 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.inrange "See the npm package")

Checks if `n` is between `start` and up to but not including, `end`. If
`end` is not specified it's set to `start` with `start` then set to `0`.
If `start` is greater than `end` the params are swapped to support
negative ranges.

#### Arguments
1. `number` *(number)*: The number to check.
2. `[start=0]` *(number)*: The start of the range.
3. `end` *(number)*: The end of the range.

#### Returns
*(boolean)*:  Returns `true` if `number` is in the range, else `false`.

#### Example
```js
_.inRange(3, 2, 4);
// => true

_.inRange(4, 8);
// => true

_.inRange(4, 2);
// => false

_.inRange(2, 2);
// => false

_.inRange(1.2, 2);
// => true

_.inRange(5.2, 4);
// => false

_.inRange(-3, -2, -6);
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_randomlower0-upper1-floating"></a>`_.random([lower=0], [upper=1], [floating])`
<a href="#_randomlower0-upper1-floating">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11839 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.random "See the npm package")

Produces a random number between the inclusive `lower` and `upper` bounds.
If only one argument is provided a number between `0` and the given number
is returned. If `floating` is `true`, or either `lower` or `upper` are floats,
a floating-point number is returned instead of an integer.
<br>
<br>
**Note:** JavaScript follows the IEEE-754 standard for resolving
floating-point values which can produce unexpected results.

#### Arguments
1. `[lower=0]` *(number)*: The lower bound.
2. `[upper=1]` *(number)*: The upper bound.
3. `[floating]` *(boolean)*: Specify returning a floating-point number.

#### Returns
*(number)*:  Returns the random number.

#### Example
```js
_.random(0, 5);
// => an integer between 0 and 5

_.random(5);
// => also an integer between 0 and 5

_.random(5, true);
// => a floating-point number between 0 and 5

_.random(1.2, 5.2);
// => a floating-point number between 1.2 and 5.2
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Object” Methods`

<!-- div -->

### <a id="_assignobject-sources"></a>`_.assign(object, [sources])`
<a href="#_assignobject-sources">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10517 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.assign "See the npm package")

Assigns own enumerable properties of source objects to the destination
object. Source objects are applied from left to right. Subsequent sources
overwrite property assignments of previous sources.
<br>
<br>
**Note:** This method mutates `object` and is loosely based on
[`Object.assign`](https://mdn.io/Object/assign).

#### Arguments
1. `object` *(Object)*: The destination object.
2. `[sources]` *(...Object)*: The source objects.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
function Foo() {
  this.c = 3;
}

function Bar() {
  this.e = 5;
}

Foo.prototype.d = 4;
Bar.prototype.f = 6;

_.assign({ 'a': 1 }, new Foo, new Bar);
// => { 'a': 1, 'c': 3, 'e': 5 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_assigninobject-sources"></a>`_.assignIn(object, [sources])`
<a href="#_assigninobject-sources">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10550 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.assignin "See the npm package")

This method is like `_.assign` except that it iterates over own and
inherited source properties.
<br>
<br>
**Note:** This method mutates `object`.

#### Aliases
*_.extend*

#### Arguments
1. `object` *(Object)*: The destination object.
2. `[sources]` *(...Object)*: The source objects.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
function Foo() {
  this.b = 2;
}

function Bar() {
  this.d = 4;
}

Foo.prototype.c = 3;
Bar.prototype.e = 5;

_.assignIn({ 'a': 1 }, new Foo, new Bar);
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_assigninwithobject-sources-customizer"></a>`_.assignInWith(object, sources, [customizer])`
<a href="#_assigninwithobject-sources-customizer">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10581 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.assigninwith "See the npm package")

This method is like `_.assignIn` except that it accepts `customizer` which
is invoked to produce the assigned values. If `customizer` returns `undefined`
assignment is handled by the method instead. The `customizer` is invoked
with five arguments: (objValue, srcValue, key, object, source).
<br>
<br>
**Note:** This method mutates `object`.

#### Aliases
*_.extendWith*

#### Arguments
1. `object` *(Object)*: The destination object.
2. `sources` *(...Object)*: The source objects.
3. `[customizer]` *(Function)*: The function to customize assigned values.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = _.partialRight(_.assignInWith, customizer);

defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_assignwithobject-sources-customizer"></a>`_.assignWith(object, sources, [customizer])`
<a href="#_assignwithobject-sources-customizer">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10611 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.assignwith "See the npm package")

This method is like `_.assign` except that it accepts `customizer` which
is invoked to produce the assigned values. If `customizer` returns `undefined`
assignment is handled by the method instead. The `customizer` is invoked
with five arguments: (objValue, srcValue, key, object, source).
<br>
<br>
**Note:** This method mutates `object`.

#### Arguments
1. `object` *(Object)*: The destination object.
2. `sources` *(...Object)*: The source objects.
3. `[customizer]` *(Function)*: The function to customize assigned values.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = _.partialRight(_.assignWith, customizer);

defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_atobject-paths"></a>`_.at(object, [paths])`
<a href="#_atobject-paths">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10635 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.at "See the npm package")

Creates an array of values corresponding to `paths` of `object`.

#### Arguments
1. `object` *(Object)*: The object to iterate over.
2. `[paths]` *(...(string|string&#91;&#93;)*: The property paths of elements to pick, specified individually or in arrays.

#### Returns
*(Array)*:  Returns the new array of picked elements.

#### Example
```js
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

_.at(object, ['a[0].b.c', 'a[1]']);
// => [3, 4]

_.at(['a', 'b', 'c'], 0, 2);
// => ['a', 'c']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_createprototype-properties"></a>`_.create(prototype, [properties])`
<a href="#_createprototype-properties">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10671 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.create "See the npm package")

Creates an object that inherits from the `prototype` object. If a `properties`
object is provided its own enumerable properties are assigned to the created object.

#### Arguments
1. `prototype` *(Object)*: The object to inherit from.
2. `[properties]` *(Object)*: The properties to assign to the object.

#### Returns
*(Object)*:  Returns the new object.

#### Example
```js
function Shape() {
  this.x = 0;
  this.y = 0;
}

function Circle() {
  Shape.call(this);
}

Circle.prototype = _.create(Shape.prototype, {
  'constructor': Circle
});

var circle = new Circle;
circle instanceof Circle;
// => true

circle instanceof Shape;
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_defaultsobject-sources"></a>`_.defaults(object, [sources])`
<a href="#_defaultsobject-sources">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10695 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.defaults "See the npm package")

Assigns own and inherited enumerable properties of source objects to the
destination object for all destination properties that resolve to `undefined`.
Source objects are applied from left to right. Once a property is set,
additional values of the same property are ignored.
<br>
<br>
**Note:** This method mutates `object`.

#### Arguments
1. `object` *(Object)*: The destination object.
2. `[sources]` *(...Object)*: The source objects.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
_.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
// => { 'user': 'barney', 'age': 36 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_defaultsdeepobject-sources"></a>`_.defaultsDeep(object, [sources])`
<a href="#_defaultsdeepobject-sources">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10718 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.defaultsdeep "See the npm package")

This method is like `_.defaults` except that it recursively assigns
default properties.
<br>
<br>
**Note:** This method mutates `object`.

#### Arguments
1. `object` *(Object)*: The destination object.
2. `[sources]` *(...Object)*: The source objects.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
_.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
// => { 'user': { 'name': 'barney', 'age': 36 } }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_findkeyobject-predicate_identity"></a>`_.findKey(object, [predicate=_.identity])`
<a href="#_findkeyobject-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10756 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.findkey "See the npm package")

This method is like `_.find` except that it returns the key of the first
element `predicate` returns truthy for instead of the element itself.

#### Arguments
1. `object` *(Object)*: The object to search.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(string|undefined)*:  Returns the key of the matched element, else `undefined`.

#### Example
```js
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

_.findKey(users, function(o) { return o.age < 40; });
// => 'barney' (iteration order is not guaranteed)

// The `_.matches` iteratee shorthand.
_.findKey(users, { 'age': 1, 'active': true });
// => 'pebbles'

// The `_.matchesProperty` iteratee shorthand.
_.findKey(users, ['active', false]);
// => 'fred'

// The `_.property` iteratee shorthand.
_.findKey(users, 'active');
// => 'barney'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_findlastkeyobject-predicate_identity"></a>`_.findLastKey(object, [predicate=_.identity])`
<a href="#_findlastkeyobject-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10793 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.findlastkey "See the npm package")

This method is like `_.findKey` except that it iterates over elements of
a collection in the opposite order.

#### Arguments
1. `object` *(Object)*: The object to search.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(string|undefined)*:  Returns the key of the matched element, else `undefined`.

#### Example
```js
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

_.findLastKey(users, function(o) { return o.age < 40; });
// => returns 'pebbles' assuming `_.findKey` returns 'barney'

// The `_.matches` iteratee shorthand.
_.findLastKey(users, { 'age': 36, 'active': true });
// => 'barney'

// The `_.matchesProperty` iteratee shorthand.
_.findLastKey(users, ['active', false]);
// => 'fred'

// The `_.property` iteratee shorthand.
_.findLastKey(users, 'active');
// => 'pebbles'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_forinobject-iteratee_identity"></a>`_.forIn(object, [iteratee=_.identity])`
<a href="#_forinobject-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10823 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.forin "See the npm package")

Iterates over own and inherited enumerable properties of an object invoking
`iteratee` for each property. The iteratee is invoked with three arguments:<br>
(value, key, object). Iteratee functions may exit iteration early by explicitly
returning `false`.

#### Arguments
1. `object` *(Object)*: The object to iterate over.
2. `[iteratee=_.identity]` *(Function)*: The function invoked per iteration.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forIn(new Foo, function(value, key) {
  console.log(key);
});
// => logs 'a', 'b', then 'c' (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_forinrightobject-iteratee_identity"></a>`_.forInRight(object, [iteratee=_.identity])`
<a href="#_forinrightobject-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10851 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.forinright "See the npm package")

This method is like `_.forIn` except that it iterates over properties of
`object` in the opposite order.

#### Arguments
1. `object` *(Object)*: The object to iterate over.
2. `[iteratee=_.identity]` *(Function)*: The function invoked per iteration.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forInRight(new Foo, function(value, key) {
  console.log(key);
});
// => logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_forownobject-iteratee_identity"></a>`_.forOwn(object, [iteratee=_.identity])`
<a href="#_forownobject-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10881 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.forown "See the npm package")

Iterates over own enumerable properties of an object invoking `iteratee`
for each property. The iteratee is invoked with three arguments:<br>
(value, key, object). Iteratee functions may exit iteration early by
explicitly returning `false`.

#### Arguments
1. `object` *(Object)*: The object to iterate over.
2. `[iteratee=_.identity]` *(Function)*: The function invoked per iteration.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forOwn(new Foo, function(value, key) {
  console.log(key);
});
// => logs 'a' then 'b' (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_forownrightobject-iteratee_identity"></a>`_.forOwnRight(object, [iteratee=_.identity])`
<a href="#_forownrightobject-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10909 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.forownright "See the npm package")

This method is like `_.forOwn` except that it iterates over properties of
`object` in the opposite order.

#### Arguments
1. `object` *(Object)*: The object to iterate over.
2. `[iteratee=_.identity]` *(Function)*: The function invoked per iteration.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.forOwnRight(new Foo, function(value, key) {
  console.log(key);
});
// => logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_functionsobject"></a>`_.functions(object)`
<a href="#_functionsobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10934 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.functions "See the npm package")

Creates an array of function property names from own enumerable properties
of `object`.

#### Arguments
1. `object` *(Object)*: The object to inspect.

#### Returns
*(Array)*:  Returns the new array of property names.

#### Example
```js
function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

_.functions(new Foo);
// => ['a', 'b']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_functionsinobject"></a>`_.functionsIn(object)`
<a href="#_functionsinobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10959 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.functionsin "See the npm package")

Creates an array of function property names from own and inherited
enumerable properties of `object`.

#### Arguments
1. `object` *(Object)*: The object to inspect.

#### Returns
*(Array)*:  Returns the new array of property names.

#### Example
```js
function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

_.functionsIn(new Foo);
// => ['a', 'b', 'c']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_getobject-path-defaultvalue"></a>`_.get(object, path, [defaultValue])`
<a href="#_getobject-path-defaultvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L10987 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.get "See the npm package")

Gets the value at `path` of `object`. If the resolved value is
`undefined` the `defaultValue` is used in its place.

#### Arguments
1. `object` *(Object)*: The object to query.
2. `path` *(Array|string)*: The path of the property to get.
3. `[defaultValue]` *(&#42;)*: The value returned if the resolved value is `undefined`.

#### Returns
*(&#42;)*:  Returns the resolved value.

#### Example
```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };

_.get(object, 'a[0].b.c');
// => 3

_.get(object, ['a', '0', 'b', 'c']);
// => 3

_.get(object, 'a.b.c', 'default');
// => 'default'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_hasobject-path"></a>`_.has(object, path)`
<a href="#_hasobject-path">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11018 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.has "See the npm package")

Checks if `path` is a direct property of `object`.

#### Arguments
1. `object` *(Object)*: The object to query.
2. `path` *(Array|string)*: The path to check.

#### Returns
*(boolean)*:  Returns `true` if `path` exists, else `false`.

#### Example
```js
var object = { 'a': { 'b': { 'c': 3 } } };
var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });

_.has(object, 'a');
// => true

_.has(object, 'a.b.c');
// => true

_.has(object, ['a', 'b', 'c']);
// => true

_.has(other, 'a');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_hasinobject-path"></a>`_.hasIn(object, path)`
<a href="#_hasinobject-path">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11047 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.hasin "See the npm package")

Checks if `path` is a direct or inherited property of `object`.

#### Arguments
1. `object` *(Object)*: The object to query.
2. `path` *(Array|string)*: The path to check.

#### Returns
*(boolean)*:  Returns `true` if `path` exists, else `false`.

#### Example
```js
var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });

_.hasIn(object, 'a');
// => true

_.hasIn(object, 'a.b.c');
// => true

_.hasIn(object, ['a', 'b', 'c']);
// => true

_.hasIn(object, 'b');
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_invertobject"></a>`_.invert(object)`
<a href="#_invertobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11068 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.invert "See the npm package")

Creates an object composed of the inverted keys and values of `object`.
If `object` contains duplicate values, subsequent values overwrite property
assignments of previous values.

#### Arguments
1. `object` *(Object)*: The object to invert.

#### Returns
*(Object)*:  Returns the new inverted object.

#### Example
```js
var object = { 'a': 1, 'b': 2, 'c': 1 };

_.invert(object);
// => { '1': 'c', '2': 'b' }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_invertbyobject-iteratee_identity"></a>`_.invertBy(object, [iteratee=_.identity])`
<a href="#_invertbyobject-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11097 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.invertby "See the npm package")

This method is like `_.invert` except that the inverted object is generated
from the results of running each element of `object` through `iteratee`.
The corresponding inverted value of each inverted key is an array of keys
responsible for generating the inverted value. The iteratee is invoked
with one argument: (value).

#### Arguments
1. `object` *(Object)*: The object to invert.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The iteratee invoked per element.

#### Returns
*(Object)*:  Returns the new inverted object.

#### Example
```js
var object = { 'a': 1, 'b': 2, 'c': 1 };

_.invertBy(object);
// => { '1': ['a', 'c'], '2': ['b'] }

_.invertBy(object, function(value) {
  return 'group' + value;
});
// => { 'group1': ['a', 'c'], 'group2': ['b'] }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_invokeobject-path-args"></a>`_.invoke(object, path, [args])`
<a href="#_invokeobject-path-args">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11122 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.invoke "See the npm package")

Invokes the method at `path` of `object`.

#### Arguments
1. `object` *(Object)*: The object to query.
2. `path` *(Array|string)*: The path of the method to invoke.
3. `[args]` *(...&#42;)*: The arguments to invoke the method with.

#### Returns
*(&#42;)*:  Returns the result of the invoked method.

#### Example
```js
var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };

_.invoke(object, 'a[0].b.c.slice', 1, 3);
// => [2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_keysobject"></a>`_.keys(object)`
<a href="#_keysobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11151 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.keys "See the npm package")

Creates an array of the own enumerable property names of `object`.
<br>
<br>
**Note:** Non-object values are coerced to objects. See the
[ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
for more details.

#### Arguments
1. `object` *(Object)*: The object to query.

#### Returns
*(Array)*:  Returns the array of property names.

#### Example
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.keys(new Foo);
// => ['a', 'b'] (iteration order is not guaranteed)

_.keys('hi');
// => ['0', '1']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_keysinobject"></a>`_.keysIn(object)`
<a href="#_keysinobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11193 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.keysin "See the npm package")

Creates an array of the own and inherited enumerable property names of `object`.
<br>
<br>
**Note:** Non-object values are coerced to objects.

#### Arguments
1. `object` *(Object)*: The object to query.

#### Returns
*(Array)*:  Returns the array of property names.

#### Example
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.keysIn(new Foo);
// => ['a', 'b', 'c'] (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_mapkeysobject-iteratee_identity"></a>`_.mapKeys(object, [iteratee=_.identity])`
<a href="#_mapkeysobject-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11231 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.mapkeys "See the npm package")

The opposite of `_.mapValues`; this method creates an object with the
same values as `object` and keys generated by running each own enumerable
property of `object` through `iteratee`.

#### Arguments
1. `object` *(Object)*: The object to iterate over.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(Object)*:  Returns the new mapped object.

#### Example
```js
_.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
// => { 'a1': 1, 'b2': 2 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_mapvaluesobject-iteratee_identity"></a>`_.mapValues(object, [iteratee=_.identity])`
<a href="#_mapvaluesobject-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11266 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.mapvalues "See the npm package")

Creates an object with the same keys as `object` and values generated by
running each own enumerable property of `object` through `iteratee`. The
iteratee function is invoked with three arguments: (value, key, object).

#### Arguments
1. `object` *(Object)*: The object to iterate over.
2. `[iteratee=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(Object)*:  Returns the new mapped object.

#### Example
```js
var users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};

_.mapValues(users, function(o) { return o.age; });
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)

// The `_.property` iteratee shorthand.
_.mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_mergeobject-sources"></a>`_.merge(object, [sources])`
<a href="#_mergeobject-sources">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11305 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.merge "See the npm package")

Recursively merges own and inherited enumerable properties of source
objects into the destination object, skipping source properties that resolve
to `undefined`. Array and plain object properties are merged recursively.
Other objects and value types are overridden by assignment. Source objects
are applied from left to right. Subsequent sources overwrite property
assignments of previous sources.
<br>
<br>
**Note:** This method mutates `object`.

#### Arguments
1. `object` *(Object)*: The destination object.
2. `[sources]` *(...Object)*: The source objects.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
var users = {
  'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
};

var ages = {
  'data': [{ 'age': 36 }, { 'age': 40 }]
};

_.merge(users, ages);
// => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_mergewithobject-sources-customizer"></a>`_.mergeWith(object, sources, customizer)`
<a href="#_mergewithobject-sources-customizer">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11346 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.mergewith "See the npm package")

This method is like `_.merge` except that it accepts `customizer` which
is invoked to produce the merged values of the destination and source
properties. If `customizer` returns `undefined` merging is handled by the
method instead. The `customizer` is invoked with seven arguments:<br>
(objValue, srcValue, key, object, source, stack).
<br>
<br>
**Note:** This method mutates `object`.

#### Arguments
1. `object` *(Object)*: The destination object.
2. `sources` *(...Object)*: The source objects.
3. `customizer` *(Function)*: The function to customize assigned values.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

var object = {
  'fruits': ['apple'],
  'vegetables': ['beet']
};

var other = {
  'fruits': ['banana'],
  'vegetables': ['carrot']
};

_.mergeWith(object, other, customizer);
// => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_omitobject-props"></a>`_.omit(object, [props])`
<a href="#_omitobject-props">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11368 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.omit "See the npm package")

The opposite of `_.pick`; this method creates an object composed of the
own and inherited enumerable properties of `object` that are not omitted.

#### Arguments
1. `object` *(Object)*: The source object.
2. `[props]` *(...(string|string&#91;&#93;)*: The property names to omit, specified individually or in arrays..

#### Returns
*(Object)*:  Returns the new object.

#### Example
```js
var object = { 'a': 1, 'b': '2', 'c': 3 };

_.omit(object, ['a', 'c']);
// => { 'b': '2' }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_omitbyobject-predicate_identity"></a>`_.omitBy(object, [predicate=_.identity])`
<a href="#_omitbyobject-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11394 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.omitby "See the npm package")

The opposite of `_.pickBy`; this method creates an object composed of the
own and inherited enumerable properties of `object` that `predicate`
doesn't return truthy for.

#### Arguments
1. `object` *(Object)*: The source object.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per property.

#### Returns
*(Object)*:  Returns the new object.

#### Example
```js
var object = { 'a': 1, 'b': '2', 'c': 3 };

_.omitBy(object, _.isNumber);
// => { 'b': '2' }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_pickobject-props"></a>`_.pick(object, [props])`
<a href="#_pickobject-props">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11418 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.pick "See the npm package")

Creates an object composed of the picked `object` properties.

#### Arguments
1. `object` *(Object)*: The source object.
2. `[props]` *(...(string|string&#91;&#93;)*: The property names to pick, specified individually or in arrays.

#### Returns
*(Object)*:  Returns the new object.

#### Example
```js
var object = { 'a': 1, 'b': '2', 'c': 3 };

_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_pickbyobject-predicate_identity"></a>`_.pickBy(object, [predicate=_.identity])`
<a href="#_pickbyobject-predicate_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11439 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.pickby "See the npm package")

Creates an object composed of the `object` properties `predicate` returns
truthy for. The predicate is invoked with two arguments: (value, key).

#### Arguments
1. `object` *(Object)*: The source object.
2. `[predicate=_.identity]` *(Function|Object|string)*: The function invoked per property.

#### Returns
*(Object)*:  Returns the new object.

#### Example
```js
var object = { 'a': 1, 'b': '2', 'c': 3 };

_.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_resultobject-path-defaultvalue"></a>`_.result(object, path, [defaultValue])`
<a href="#_resultobject-path-defaultvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11471 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.result "See the npm package")

This method is like `_.get` except that if the resolved value is a function
it's invoked with the `this` binding of its parent object and its result
is returned.

#### Arguments
1. `object` *(Object)*: The object to query.
2. `path` *(Array|string)*: The path of the property to resolve.
3. `[defaultValue]` *(&#42;)*: The value returned if the resolved value is `undefined`.

#### Returns
*(&#42;)*:  Returns the resolved value.

#### Example
```js
var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };

_.result(object, 'a[0].b.c1');
// => 3

_.result(object, 'a[0].b.c2');
// => 4

_.result(object, 'a[0].b.c3', 'default');
// => 'default'

_.result(object, 'a[0].b.c3', _.constant('default'));
// => 'default'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_setobject-path-value"></a>`_.set(object, path, value)`
<a href="#_setobject-path-value">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11512 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.set "See the npm package")

Sets the value at `path` of `object`. If a portion of `path` doesn't exist
it's created. Arrays are created for missing index properties while objects
are created for all other missing properties. Use `_.setWith` to customize
`path` creation.
<br>
<br>
**Note:** This method mutates `object`.

#### Arguments
1. `object` *(Object)*: The object to modify.
2. `path` *(Array|string)*: The path of the property to set.
3. `value` *(&#42;)*: The value to set.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };

_.set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);
// => 4

_.set(object, 'x[0].y.z', 5);
console.log(object.x[0].y.z);
// => 5
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_setwithobject-path-value-customizer"></a>`_.setWith(object, path, value, [customizer])`
<a href="#_setwithobject-path-value-customizer">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11537 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.setwith "See the npm package")

This method is like `_.set` except that it accepts `customizer` which is
invoked to produce the objects of `path`.  If `customizer` returns `undefined`
path creation is handled by the method instead. The `customizer` is invoked
with three arguments: (nsValue, key, nsObject).
<br>
<br>
**Note:** This method mutates `object`.

#### Arguments
1. `object` *(Object)*: The object to modify.
2. `path` *(Array|string)*: The path of the property to set.
3. `value` *(&#42;)*: The value to set.
4. `[customizer]` *(Function)*: The function to customize assigned values.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
_.setWith({ '0': { 'length': 2 } }, '[0][1][2]', 3, Object);
// => { '0': { '1': { '2': 3 }, 'length': 2 } }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_topairsobject"></a>`_.toPairs(object)`
<a href="#_topairsobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11562 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.topairs "See the npm package")

Creates an array of own enumerable key-value pairs for `object`.

#### Arguments
1. `object` *(Object)*: The object to query.

#### Returns
*(Array)*:  Returns the new array of key-value pairs.

#### Example
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.toPairs(new Foo);
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_topairsinobject"></a>`_.toPairsIn(object)`
<a href="#_topairsinobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11586 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.topairsin "See the npm package")

Creates an array of own and inherited enumerable key-value pairs for `object`.

#### Arguments
1. `object` *(Object)*: The object to query.

#### Returns
*(Array)*:  Returns the new array of key-value pairs.

#### Example
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.toPairsIn(new Foo);
// => [['a', 1], ['b', 2], ['c', 1]] (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_transformobject-iteratee_identity-accumulator"></a>`_.transform(object, [iteratee=_.identity], [accumulator])`
<a href="#_transformobject-iteratee_identity-accumulator">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11618 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.transform "See the npm package")

An alternative to `_.reduce`; this method transforms `object` to a new
`accumulator` object which is the result of running each of its own enumerable
properties through `iteratee`, with each invocation potentially mutating
the `accumulator` object. The iteratee is invoked with four arguments:<br>
(accumulator, value, key, object). Iteratee functions may exit iteration
early by explicitly returning `false`.

#### Arguments
1. `object` *(Array|Object)*: The object to iterate over.
2. `[iteratee=_.identity]` *(Function)*: The function invoked per iteration.
3. `[accumulator]` *(&#42;)*: The custom accumulator value.

#### Returns
*(&#42;)*:  Returns the accumulated value.

#### Example
```js
_.transform([2, 3, 4], function(result, n) {
  result.push(n *= n);
  return n % 2 == 0;
}, []);
// => [4, 9]

_.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
}, {});
// => { '1': ['a', 'c'], '2': ['b'] }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_unsetobject-path"></a>`_.unset(object, path)`
<a href="#_unsetobject-path">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11666 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.unset "See the npm package")

Removes the property at `path` of `object`.
<br>
<br>
**Note:** This method mutates `object`.

#### Arguments
1. `object` *(Object)*: The object to modify.
2. `path` *(Array|string)*: The path of the property to unset.

#### Returns
*(boolean)*:  Returns `true` if the property is deleted, else `false`.

#### Example
```js
var object = { 'a': [{ 'b': { 'c': 7 } }] };
_.unset(object, 'a[0].b.c');
// => true

console.log(object);
// => { 'a': [{ 'b': {} }] };

_.unset(object, 'a[0].b.c');
// => true

console.log(object);
// => { 'a': [{ 'b': {} }] };
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_valuesobject"></a>`_.values(object)`
<a href="#_valuesobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11695 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.values "See the npm package")

Creates an array of the own enumerable property values of `object`.
<br>
<br>
**Note:** Non-object values are coerced to objects.

#### Arguments
1. `object` *(Object)*: The object to query.

#### Returns
*(Array)*:  Returns the array of property values.

#### Example
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.values(new Foo);
// => [1, 2] (iteration order is not guaranteed)

_.values('hi');
// => ['h', 'i']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_valuesinobject"></a>`_.valuesIn(object)`
<a href="#_valuesinobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11721 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.valuesin "See the npm package")

Creates an array of the own and inherited enumerable property values of `object`.
<br>
<br>
**Note:** Non-object values are coerced to objects.

#### Arguments
1. `object` *(Object)*: The object to query.

#### Returns
*(Array)*:  Returns the array of property values.

#### Example
```js
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.valuesIn(new Foo);
// => [1, 2, 3] (iteration order is not guaranteed)
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Seq” Methods`

<!-- div -->

### <a id="_value"></a>`_(value)`
<a href="#_value">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L1466 "View in source") [&#x24C9;][1]

Creates a `lodash` object which wraps `value` to enable implicit method
chaining. Methods that operate on and return arrays, collections, and
functions can be chained together. Methods that retrieve a single value or
may return a primitive value will automatically end the chain sequence and
return the unwrapped value. Otherwise, the value must be unwrapped with
`_#value`.
<br>
<br>
Explicit chaining, which must be unwrapped with `_#value` in all cases,
may be enabled using `_.chain`.
<br>
<br>
The execution of chained methods is lazy, that is, it's deferred until
`_#value` is implicitly or explicitly called.
<br>
<br>
Lazy evaluation allows several methods to support shortcut fusion. Shortcut
fusion is an optimization to merge iteratee calls; this avoids the creation
of intermediate arrays and can greatly reduce the number of iteratee executions.
Sections of a chain sequence qualify for shortcut fusion if the section is
applied to an array of at least two hundred elements and any iteratees
accept only one argument. The heuristic for whether a section qualifies
for shortcut fusion is subject to change.
<br>
<br>
Chaining is supported in custom builds as long as the `_#value` method is
directly or indirectly included in the build.
<br>
<br>
In addition to lodash methods, wrappers have `Array` and `String` methods.
<br>
<br>
The wrapper `Array` methods are:<br>
`concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
<br>
<br>
The wrapper `String` methods are:<br>
`replace` and `split`
<br>
<br>
The wrapper methods that support shortcut fusion are:<br>
`at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
`findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
`tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
<br>
<br>
The chainable wrapper methods are:<br>
`after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`,
`at`, `before`, `bind`, `bindAll`, `bindKey`, `chain`, `chunk`, `commit`,
`compact`, `concat`, `conforms`, `constant`, `countBy`, `create`, `curry`,
`debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`, `difference`,
`differenceBy`, `differenceWith`, `drop`, `dropRight`, `dropRightWhile`,
`dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flip`, `flow`,
`flowRight`, `fromPairs`, `functions`, `functionsIn`, `groupBy`, `initial`,
`intersection`, `intersectionBy`, `intersectionWith`, `invert`, `invertBy`,
`invokeMap`, `iteratee`, `keyBy`, `keys`, `keysIn`, `map`, `mapKeys`,
`mapValues`, `matches`, `matchesProperty`, `memoize`, `merge`, `mergeWith`,
`method`, `methodOf`, `mixin`, `negate`, `nthArg`, `omit`, `omitBy`, `once`,
`orderBy`, `over`, `overArgs`, `overEvery`, `overSome`, `partial`,
`partialRight`, `partition`, `pick`, `pickBy`, `plant`, `property`,
`propertyOf`, `pull`, `pullAll`, `pullAllBy`, `pullAt`, `push`, `range`,
`rangeRight`, `rearg`, `reject`, `remove`, `rest`, `reverse`, `sampleSize`,
`set`, `setWith`, `shuffle`, `slice`, `sort`, `sortBy`, `splice`, `spread`,
`tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `tap`, `throttle`,
`thru`, `toArray`, `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`,
`transform`, `unary`, `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`,
`uniqWith`, `unset`, `unshift`, `unzip`, `unzipWith`, `values`, `valuesIn`,
`without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`, `zipObject`,
`zipObjectDeep`, and `zipWith`
<br>
<br>
The wrapper methods that are **not** chainable by default are:<br>
`add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
`cloneDeep`, `cloneDeepWith`, `cloneWith`, `deburr`, `endsWith`, `eq`,
`escape`, `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`,
`findLast`, `findLastIndex`, `findLastKey`, `floor`, `forEach`, `forEachRight`,
`forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
`hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
`isArguments`, `isArray`, `isArrayLike`, `isArrayLikeObject`, `isBoolean`,
`isDate`, `isElement`, `isEmpty`, `isEqual`, `isEqualWith`, `isError`,
`isFinite`, `isFunction`, `isInteger`, `isLength`, `isMatch`, `isMatchWith`,
`isNaN`, `isNative`, `isNil`, `isNull`, `isNumber`, `isObject`, `isObjectLike`,
`isPlainObject`, `isRegExp`, `isSafeInteger`, `isString`, `isUndefined`,
`isTypedArray`, `join`, `kebabCase`, `last`, `lastIndexOf`, `lowerCase`,
`lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `min`, `minBy`,
`noConflict`, `noop`, `now`, `pad`, `padEnd`, `padStart`, `parseInt`,
`pop`, `random`, `reduce`, `reduceRight`, `repeat`, `result`, `round`,
`runInContext`, `sample`, `shift`, `size`, `snakeCase`, `some`, `sortedIndex`,
`sortedIndexBy`, `sortedLastIndex`, `sortedLastIndexBy`, `startCase`,
`startsWith`, `subtract`, `sum`, `sumBy`, `template`, `times`, `toLower`,
`toInteger`, `toLength`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`,
`trim`, `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`,
`upperCase`, `upperFirst`, `value`, and `words`

#### Arguments
1. `value` *(&#42;)*: The value to wrap in a `lodash` instance.

#### Returns
*(Object)*:  Returns the new `lodash` wrapper instance.

#### Example
```js
function square(n) {
  return n * n;
}

var wrapped = _([1, 2, 3]);

// Returns an unwrapped value.
wrapped.reduce(_.add);
// => 6

// Returns a wrapped value.
var squares = wrapped.map(square);

_.isArray(squares);
// => false

_.isArray(squares.value());
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_chainvalue"></a>`_.chain(value)`
<a href="#_chainvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7054 "View in source") [&#x24C9;][1]

Creates a `lodash` object that wraps `value` with explicit method chaining enabled.
The result of such method chaining must be unwrapped with `_#value`.

#### Arguments
1. `value` *(&#42;)*: The value to wrap.

#### Returns
*(Object)*:  Returns the new `lodash` wrapper instance.

#### Example
```js
var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

var youngest = _
  .chain(users)
  .sortBy('age')
  .map(function(o) {
    return o.user + ' is ' + o.age;
  })
  .head()
  .value();
// => 'pebbles is 1'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_tapvalue-interceptor"></a>`_.tap(value, interceptor)`
<a href="#_tapvalue-interceptor">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7082 "View in source") [&#x24C9;][1]

This method invokes `interceptor` and returns `value`. The interceptor
is invoked with one argument; (value). The purpose of this method is to
"tap into" a method chain in order to modify intermediate results.

#### Arguments
1. `value` *(&#42;)*: The value to provide to `interceptor`.
2. `interceptor` *(Function)*: The function to invoke.

#### Returns
*(&#42;)*:  Returns `value`.

#### Example
```js
_([1, 2, 3])
 .tap(function(array) {
   // Mutate input array.
   array.pop();
 })
 .reverse()
 .value();
// => [2, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_thruvalue-interceptor"></a>`_.thru(value, interceptor)`
<a href="#_thruvalue-interceptor">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7109 "View in source") [&#x24C9;][1]

This method is like `_.tap` except that it returns the result of `interceptor`.
The purpose of this method is to "pass thru" values replacing intermediate
results in a method chain.

#### Arguments
1. `value` *(&#42;)*: The value to provide to `interceptor`.
2. `interceptor` *(Function)*: The function to invoke.

#### Returns
*(&#42;)*:  Returns the result of `interceptor`.

#### Example
```js
_('  abc  ')
 .chain()
 .trim()
 .thru(function(value) {
   return [value];
 })
 .value();
// => ['abc']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypesymboliterator"></a>`_.prototype[Symbol.iterator]()`
<a href="#_prototypesymboliterator">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7280 "View in source") [&#x24C9;][1]

Enables the wrapper to be iterable.

#### Returns
*(Object)*:  Returns the wrapper object.

#### Example
```js
var wrapped = _([1, 2]);

wrapped[Symbol.iterator]() === wrapped;
// => true

Array.from(wrapped);
// => [1, 2]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypeatpaths"></a>`_.prototype.at([paths])`
<a href="#_prototypeatpaths">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7132 "View in source") [&#x24C9;][1]

This method is the wrapper version of `_.at`.

#### Arguments
1. `[paths]` *(...(string|string&#91;&#93;)*: The property paths of elements to pick, specified individually or in arrays.

#### Returns
*(Object)*:  Returns the new `lodash` wrapper instance.

#### Example
```js
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

_(object).at(['a[0].b.c', 'a[1]']).value();
// => [3, 4]

_(['a', 'b', 'c']).at(0, 2).value();
// => ['a', 'c']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypechain"></a>`_.prototype.chain()`
<a href="#_prototypechain">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7178 "View in source") [&#x24C9;][1]

Enables explicit method chaining on the wrapper object.

#### Returns
*(Object)*:  Returns the new `lodash` wrapper instance.

#### Example
```js
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

// A sequence without explicit chaining.
_(users).head();
// => { 'user': 'barney', 'age': 36 }

// A sequence with explicit chaining.
_(users)
  .chain()
  .head()
  .pick('user')
  .value();
// => { 'user': 'barney' }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypecommit"></a>`_.prototype.commit()`
<a href="#_prototypecommit">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7207 "View in source") [&#x24C9;][1]

Executes the chained sequence and returns the wrapped result.

#### Returns
*(Object)*:  Returns the new `lodash` wrapper instance.

#### Example
```js
var array = [1, 2];
var wrapped = _(array).push(3);

console.log(array);
// => [1, 2]

wrapped = wrapped.commit();
console.log(array);
// => [1, 2, 3]

wrapped.last();
// => 3

console.log(array);
// => [1, 2, 3]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypeflatmapiteratee_identity"></a>`_.prototype.flatMap([iteratee=_.identity])`
<a href="#_prototypeflatmapiteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7228 "View in source") [&#x24C9;][1]

This method is the wrapper version of `_.flatMap`.

#### Arguments
1. `[iteratee=_.identity]` *(Function|Object|string)*: The function invoked per iteration.

#### Returns
*(Object)*:  Returns the new `lodash` wrapper instance.

#### Example
```js
function duplicate(n) {
  return [n, n];
}

_([1, 2]).flatMap(duplicate).value();
// => [1, 1, 2, 2]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypenext"></a>`_.prototype.next()`
<a href="#_prototypenext">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7253 "View in source") [&#x24C9;][1]

Gets the next value on a wrapped object following the
[iterator protocol](https://mdn.io/iteration_protocols#iterator).

#### Returns
*(Object)*:  Returns the next iterator value.

#### Example
```js
var wrapped = _([1, 2]);

wrapped.next();
// => { 'done': false, 'value': 1 }

wrapped.next();
// => { 'done': false, 'value': 2 }

wrapped.next();
// => { 'done': true, 'value': undefined }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypeplantvalue"></a>`_.prototype.plant(value)`
<a href="#_prototypeplantvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7307 "View in source") [&#x24C9;][1]

Creates a clone of the chained sequence planting `value` as the wrapped value.

#### Arguments
1. `value` *(&#42;)*: The value to plant.

#### Returns
*(Object)*:  Returns the new `lodash` wrapper instance.

#### Example
```js
function square(n) {
  return n * n;
}

var wrapped = _([1, 2]).map(square);
var other = wrapped.plant([3, 4]);

other.value();
// => [9, 16]

wrapped.value();
// => [1, 4]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypereverse"></a>`_.prototype.reverse()`
<a href="#_prototypereverse">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7346 "View in source") [&#x24C9;][1]

This method is the wrapper version of `_.reverse`.
<br>
<br>
**Note:** This method mutates the wrapped array.

#### Returns
*(Object)*:  Returns the new `lodash` wrapper instance.

#### Example
```js
var array = [1, 2, 3];

_(array).reverse().value()
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_prototypevalue"></a>`_.prototype.value()`
<a href="#_prototypevalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L7373 "View in source") [&#x24C9;][1]

Executes the chained sequence to extract the unwrapped value.

#### Aliases
*_.prototype.toJSON, _.prototype.valueOf*

#### Returns
*(&#42;)*:  Returns the resolved unwrapped value.

#### Example
```js
_([1, 2, 3]).value();
// => [1, 2, 3]
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“String” Methods`

<!-- div -->

### <a id="_camelcasestring"></a>`_.camelCase([string=''])`
<a href="#_camelcasestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11899 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.camelcase "See the npm package")

Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).

#### Arguments
1. `[string='']` *(string)*: The string to convert.

#### Returns
*(string)*:  Returns the camel cased string.

#### Example
```js
_.camelCase('Foo Bar');
// => 'fooBar'

_.camelCase('--foo-bar');
// => 'fooBar'

_.camelCase('__foo_bar__');
// => 'fooBar'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_capitalizestring"></a>`_.capitalize([string=''])`
<a href="#_capitalizestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11918 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.capitalize "See the npm package")

Converts the first character of `string` to upper case and the remaining
to lower case.

#### Arguments
1. `[string='']` *(string)*: The string to capitalize.

#### Returns
*(string)*:  Returns the capitalized string.

#### Example
```js
_.capitalize('FRED');
// => 'Fred'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_deburrstring"></a>`_.deburr([string=''])`
<a href="#_deburrstring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11936 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.deburr "See the npm package")

Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).

#### Arguments
1. `[string='']` *(string)*: The string to deburr.

#### Returns
*(string)*:  Returns the deburred string.

#### Example
```js
_.deburr('déjà vu');
// => 'deja vu'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_endswithstring-target-positionstringlength"></a>`_.endsWith([string=''], [target], [position=string.length])`
<a href="#_endswithstring-target-positionstringlength">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L11962 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.endswith "See the npm package")

Checks if `string` ends with the given target string.

#### Arguments
1. `[string='']` *(string)*: The string to search.
2. `[target]` *(string)*: The string to search for.
3. `[position=string.length]` *(number)*: The position to search from.

#### Returns
*(boolean)*:  Returns `true` if `string` ends with `target`, else `false`.

#### Example
```js
_.endsWith('abc', 'c');
// => true

_.endsWith('abc', 'b');
// => false

_.endsWith('abc', 'b', 2);
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_escapestring"></a>`_.escape([string=''])`
<a href="#_escapestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12007 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.escape "See the npm package")

Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
their corresponding HTML entities.
<br>
<br>
**Note:** No other characters are escaped. To escape additional
characters use a third-party library like [_he_](https://mths.be/he).
<br>
<br>
Though the ">" character is escaped for symmetry, characters like
">" and "/" don't need escaping in HTML and have no special meaning
unless they're part of a tag or unquoted attribute value.
See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
(under "semi-related fun fact") for more details.
<br>
<br>
Backticks are escaped because in IE < 9, they can break out of
attribute values or HTML comments. See [#59](https://html5sec.org/#59),
[#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
[#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
for more details.
<br>
<br>
When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
to reduce XSS vectors.

#### Arguments
1. `[string='']` *(string)*: The string to escape.

#### Returns
*(string)*:  Returns the escaped string.

#### Example
```js
_.escape('fred, barney, & pebbles');
// => 'fred, barney, &amp; pebbles'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_escaperegexpstring"></a>`_.escapeRegExp([string=''])`
<a href="#_escaperegexpstring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12028 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.escaperegexp "See the npm package")

Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
"?", "(", ")", "[", "]", "{", "}", and "|" in `string`.

#### Arguments
1. `[string='']` *(string)*: The string to escape.

#### Returns
*(string)*:  Returns the escaped string.

#### Example
```js
_.escapeRegExp('[lodash](https://lodash.com/)');
// => '\[lodash\]\(https://lodash\.com/\)'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_kebabcasestring"></a>`_.kebabCase([string=''])`
<a href="#_kebabcasestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12054 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.kebabcase "See the npm package")

Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).

#### Arguments
1. `[string='']` *(string)*: The string to convert.

#### Returns
*(string)*:  Returns the kebab cased string.

#### Example
```js
_.kebabCase('Foo Bar');
// => 'foo-bar'

_.kebabCase('fooBar');
// => 'foo-bar'

_.kebabCase('__foo_bar__');
// => 'foo-bar'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_lowercasestring"></a>`_.lowerCase([string=''])`
<a href="#_lowercasestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12077 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.lowercase "See the npm package")

Converts `string`, as space separated words, to lower case.

#### Arguments
1. `[string='']` *(string)*: The string to convert.

#### Returns
*(string)*:  Returns the lower cased string.

#### Example
```js
_.lowerCase('--Foo-Bar');
// => 'foo bar'

_.lowerCase('fooBar');
// => 'foo bar'

_.lowerCase('__FOO_BAR__');
// => 'foo bar'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_lowerfirststring"></a>`_.lowerFirst([string=''])`
<a href="#_lowerfirststring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12097 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.lowerfirst "See the npm package")

Converts the first character of `string` to lower case.

#### Arguments
1. `[string='']` *(string)*: The string to convert.

#### Returns
*(string)*:  Returns the converted string.

#### Example
```js
_.lowerFirst('Fred');
// => 'fred'

_.lowerFirst('FRED');
// => 'fRED'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_padstring-length0-chars"></a>`_.pad([string=''], [length=0], [chars=' '])`
<a href="#_padstring-length0-chars">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12139 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.pad "See the npm package")

Pads `string` on the left and right sides if it's shorter than `length`.
Padding characters are truncated if they can't be evenly divided by `length`.

#### Arguments
1. `[string='']` *(string)*: The string to pad.
2. `[length=0]` *(number)*: The padding length.
3. `[chars=' ']` *(string)*: The string used as padding.

#### Returns
*(string)*:  Returns the padded string.

#### Example
```js
_.pad('abc', 8);
// => '  abc   '

_.pad('abc', 8, '_-');
// => '_-abc_-_'

_.pad('abc', 3);
// => 'abc'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_padendstring-length0-chars"></a>`_.padEnd([string=''], [length=0], [chars=' '])`
<a href="#_padendstring-length0-chars">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12176 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.padend "See the npm package")

Pads `string` on the right side if it's shorter than `length`. Padding
characters are truncated if they exceed `length`.

#### Arguments
1. `[string='']` *(string)*: The string to pad.
2. `[length=0]` *(number)*: The padding length.
3. `[chars=' ']` *(string)*: The string used as padding.

#### Returns
*(string)*:  Returns the padded string.

#### Example
```js
_.padEnd('abc', 6);
// => 'abc   '

_.padEnd('abc', 6, '_-');
// => 'abc_-_'

_.padEnd('abc', 3);
// => 'abc'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_padstartstring-length0-chars"></a>`_.padStart([string=''], [length=0], [chars=' '])`
<a href="#_padstartstring-length0-chars">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12203 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.padstart "See the npm package")

Pads `string` on the left side if it's shorter than `length`. Padding
characters are truncated if they exceed `length`.

#### Arguments
1. `[string='']` *(string)*: The string to pad.
2. `[length=0]` *(number)*: The padding length.
3. `[chars=' ']` *(string)*: The string used as padding.

#### Returns
*(string)*:  Returns the padded string.

#### Example
```js
_.padStart('abc', 6);
// => '   abc'

_.padStart('abc', 6, '_-');
// => '_-_abc'

_.padStart('abc', 3);
// => 'abc'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_parseintstring-radix"></a>`_.parseInt(string, [radix])`
<a href="#_parseintstring-radix">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12231 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.parseint "See the npm package")

Converts `string` to an integer of the specified radix. If `radix` is
`undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
in which case a `radix` of `16` is used.
<br>
<br>
**Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#x15.1.2.2)
of `parseInt`.

#### Arguments
1. `string` *(string)*: The string to convert.
2. `[radix]` *(number)*: The radix to interpret `value` by.

#### Returns
*(number)*:  Returns the converted integer.

#### Example
```js
_.parseInt('08');
// => 8

_.map(['6', '08', '10'], _.parseInt);
// => [6, 8, 10]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_repeatstring-n0"></a>`_.repeat([string=''], [n=0])`
<a href="#_repeatstring-n0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12263 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.repeat "See the npm package")

Repeats the given string `n` times.

#### Arguments
1. `[string='']` *(string)*: The string to repeat.
2. `[n=0]` *(number)*: The number of times to repeat the string.

#### Returns
*(string)*:  Returns the repeated string.

#### Example
```js
_.repeat('*', 3);
// => '***'

_.repeat('abc', 2);
// => 'abcabc'

_.repeat('abc', 0);
// => ''
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_replacestring-pattern-replacement"></a>`_.replace([string=''], pattern, replacement)`
<a href="#_replacestring-pattern-replacement">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12301 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.replace "See the npm package")

Replaces matches for `pattern` in `string` with `replacement`.
<br>
<br>
**Note:** This method is based on [`String#replace`](https://mdn.io/String/replace).

#### Arguments
1. `[string='']` *(string)*: The string to modify.
2. `pattern` *(RegExp|string)*: The pattern to replace.
3. `replacement` *(Function|string)*: The match replacement.

#### Returns
*(string)*:  Returns the modified string.

#### Example
```js
_.replace('Hi Fred', 'Fred', 'Barney');
// => 'Hi Barney'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_snakecasestring"></a>`_.snakeCase([string=''])`
<a href="#_snakecasestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12327 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.snakecase "See the npm package")

Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).

#### Arguments
1. `[string='']` *(string)*: The string to convert.

#### Returns
*(string)*:  Returns the snake cased string.

#### Example
```js
_.snakeCase('Foo Bar');
// => 'foo_bar'

_.snakeCase('fooBar');
// => 'foo_bar'

_.snakeCase('--foo-bar');
// => 'foo_bar'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_splitstring-separator-limit"></a>`_.split([string=''], separator, [limit])`
<a href="#_splitstring-separator-limit">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12348 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.split "See the npm package")

Splits `string` by `separator`.
<br>
<br>
**Note:** This method is based on [`String#split`](https://mdn.io/String/split).

#### Arguments
1. `[string='']` *(string)*: The string to split.
2. `separator` *(RegExp|string)*: The separator pattern to split by.
3. `[limit]` *(number)*: The length to truncate results to.

#### Returns
*(Array)*:  Returns the new array of string segments.

#### Example
```js
_.split('a-b-c', '-', 2);
// => ['a', 'b']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_startcasestring"></a>`_.startCase([string=''])`
<a href="#_startcasestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12371 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.startcase "See the npm package")

Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).

#### Arguments
1. `[string='']` *(string)*: The string to convert.

#### Returns
*(string)*:  Returns the start cased string.

#### Example
```js
_.startCase('--foo-bar');
// => 'Foo Bar'

_.startCase('fooBar');
// => 'Foo Bar'

_.startCase('__foo_bar__');
// => 'Foo Bar'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_startswithstring-target-position0"></a>`_.startsWith([string=''], [target], [position=0])`
<a href="#_startswithstring-target-position0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12396 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.startswith "See the npm package")

Checks if `string` starts with the given target string.

#### Arguments
1. `[string='']` *(string)*: The string to search.
2. `[target]` *(string)*: The string to search for.
3. `[position=0]` *(number)*: The position to search from.

#### Returns
*(boolean)*:  Returns `true` if `string` starts with `target`, else `false`.

#### Example
```js
_.startsWith('abc', 'a');
// => true

_.startsWith('abc', 'b');
// => false

_.startsWith('abc', 'b', 1);
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_templatestring-options"></a>`_.template([string=''], [options])`
<a href="#_templatestring-options">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12498 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.template "See the npm package")

Creates a compiled template function that can interpolate data properties
in "interpolate" delimiters, HTML-escape interpolated data properties in
"escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
properties may be accessed as free variables in the template. If a setting
object is provided it takes precedence over `_.templateSettings` values.
<br>
<br>
**Note:** In the development build `_.template` utilizes
[sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
for easier debugging.
<br>
<br>
For more information on precompiling templates see
[lodash's custom builds documentation](https://lodash.com/custom-builds).
<br>
<br>
For more information on Chrome extension sandboxes see
[Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).

#### Arguments
1. `[string='']` *(string)*: The template string.
2. `[options]` *(Object)*: The options object.
3. `[options.escape]` *(RegExp)*: The HTML "escape" delimiter.
4. `[options.evaluate]` *(RegExp)*: The "evaluate" delimiter.
5. `[options.imports]` *(Object)*: An object to import into the template as free variables.
6. `[options.interpolate]` *(RegExp)*: The "interpolate" delimiter.
7. `[options.sourceURL]` *(string)*: The sourceURL of the template's compiled source.
8. `[options.variable]` *(string)*: The data object variable name.

#### Returns
*(Function)*:  Returns the compiled template function.

#### Example
```js
// Use the "interpolate" delimiter to create a compiled template.
var compiled = _.template('hello <%= user %>!');
compiled({ 'user': 'fred' });
// => 'hello fred!'

// Use the HTML "escape" delimiter to escape data property values.
var compiled = _.template('<b><%- value %></b>');
compiled({ 'value': '<script>' });
// => '<b>&lt;script&gt;</b>'

// Use the "evaluate" delimiter to execute JavaScript and generate HTML.
var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'

// Use the internal `print` function in "evaluate" delimiters.
var compiled = _.template('<% print("hello " + user); %>!');
compiled({ 'user': 'barney' });
// => 'hello barney!'

// Use the ES delimiter as an alternative to the default "interpolate" delimiter.
var compiled = _.template('hello ${ user }!');
compiled({ 'user': 'pebbles' });
// => 'hello pebbles!'

// Use custom template delimiters.
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
var compiled = _.template('hello {{ user }}!');
compiled({ 'user': 'mustache' });
// => 'hello mustache!'

// Use backslashes to treat delimiters as plain text.
var compiled = _.template('<%= "\\<%- value %\\>" %>');
compiled({ 'value': 'ignored' });
// => '<%- value %>'

// Use the `imports` option to import `jQuery` as `jq`.
var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'

// Use the `sourceURL` option to specify a custom sourceURL for the template.
var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
compiled(data);
// => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector

// Use the `variable` option to ensure a with-statement isn't used in the compiled template.
var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
compiled.source;
// => function(data) {
//   var __t, __p = '';
//   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
//   return __p;
// }

// Use the `source` property to inline compiled templates for meaningful
// line numbers in error messages and stack traces.
fs.writeFileSync(path.join(cwd, 'jst.js'), '\
  var JST = {\
    "main": ' + _.template(mainText).source + '\
  };\
');
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_tolowerstring"></a>`_.toLower([string=''])`
<a href="#_tolowerstring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12623 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.tolower "See the npm package")

Converts `string`, as a whole, to lower case.

#### Arguments
1. `[string='']` *(string)*: The string to convert.

#### Returns
*(string)*:  Returns the lower cased string.

#### Example
```js
_.toLower('--Foo-Bar');
// => '--foo-bar'

_.toLower('fooBar');
// => 'foobar'

_.toLower('__FOO_BAR__');
// => '__foo_bar__'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_toupperstring"></a>`_.toUpper([string=''])`
<a href="#_toupperstring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12646 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.toupper "See the npm package")

Converts `string`, as a whole, to upper case.

#### Arguments
1. `[string='']` *(string)*: The string to convert.

#### Returns
*(string)*:  Returns the upper cased string.

#### Example
```js
_.toUpper('--foo-bar');
// => '--FOO-BAR'

_.toUpper('fooBar');
// => 'FOOBAR'

_.toUpper('__foo_bar__');
// => '__FOO_BAR__'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_trimstring-charswhitespace"></a>`_.trim([string=''], [chars=whitespace])`
<a href="#_trimstring-charswhitespace">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12671 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.trim "See the npm package")

Removes leading and trailing whitespace or specified characters from `string`.

#### Arguments
1. `[string='']` *(string)*: The string to trim.
2. `[chars=whitespace]` *(string)*: The characters to trim.

#### Returns
*(string)*:  Returns the trimmed string.

#### Example
```js
_.trim('  abc  ');
// => 'abc'

_.trim('-_-abc-_-', '_-');
// => 'abc'

_.map(['  foo  ', '  bar  '], _.trim);
// => ['foo', 'bar']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_trimendstring-charswhitespace"></a>`_.trimEnd([string=''], [chars=whitespace])`
<a href="#_trimendstring-charswhitespace">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12707 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.trimend "See the npm package")

Removes trailing whitespace or specified characters from `string`.

#### Arguments
1. `[string='']` *(string)*: The string to trim.
2. `[chars=whitespace]` *(string)*: The characters to trim.

#### Returns
*(string)*:  Returns the trimmed string.

#### Example
```js
_.trimEnd('  abc  ');
// => '  abc'

_.trimEnd('-_-abc-_-', '_-');
// => '-_-abc'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_trimstartstring-charswhitespace"></a>`_.trimStart([string=''], [chars=whitespace])`
<a href="#_trimstartstring-charswhitespace">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12741 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.trimstart "See the npm package")

Removes leading whitespace or specified characters from `string`.

#### Arguments
1. `[string='']` *(string)*: The string to trim.
2. `[chars=whitespace]` *(string)*: The characters to trim.

#### Returns
*(string)*:  Returns the trimmed string.

#### Example
```js
_.trimStart('  abc  ');
// => 'abc  '

_.trimStart('-_-abc-_-', '_-');
// => 'abc-_-'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_truncatestring-options"></a>`_.truncate([string=''], [options])`
<a href="#_truncatestring-options">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12793 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.truncate "See the npm package")

Truncates `string` if it's longer than the given maximum string length.
The last characters of the truncated string are replaced with the omission
string which defaults to "...".

#### Arguments
1. `[string='']` *(string)*: The string to truncate.
2. `[options]` *(Object)*: The options object.
3. `[options.length=30]` *(number)*: The maximum string length.
4. `[options.omission='...']` *(string)*: The string to indicate text is omitted.
5. `[options.separator]` *(RegExp|string)*: The separator pattern to truncate to.

#### Returns
*(string)*:  Returns the truncated string.

#### Example
```js
_.truncate('hi-diddly-ho there, neighborino');
// => 'hi-diddly-ho there, neighbo...'

_.truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': ' '
});
// => 'hi-diddly-ho there,...'

_.truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': /,? +/
});
// => 'hi-diddly-ho there...'

_.truncate('hi-diddly-ho there, neighborino', {
  'omission': ' [...]'
});
// => 'hi-diddly-ho there, neig [...]'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_unescapestring"></a>`_.unescape([string=''])`
<a href="#_unescapestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12867 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.unescape "See the npm package")

The inverse of `_.escape`; this method converts the HTML entities
`&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
corresponding characters.
<br>
<br>
**Note:** No other HTML entities are unescaped. To unescape additional HTML
entities use a third-party library like [_he_](https://mths.be/he).

#### Arguments
1. `[string='']` *(string)*: The string to unescape.

#### Returns
*(string)*:  Returns the unescaped string.

#### Example
```js
_.unescape('fred, barney, &amp; pebbles');
// => 'fred, barney, & pebbles'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_uppercasestring"></a>`_.upperCase([string=''])`
<a href="#_uppercasestring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12893 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.uppercase "See the npm package")

Converts `string`, as space separated words, to upper case.

#### Arguments
1. `[string='']` *(string)*: The string to convert.

#### Returns
*(string)*:  Returns the upper cased string.

#### Example
```js
_.upperCase('--foo-bar');
// => 'FOO BAR'

_.upperCase('fooBar');
// => 'FOO BAR'

_.upperCase('__foo_bar__');
// => 'FOO BAR'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_upperfirststring"></a>`_.upperFirst([string=''])`
<a href="#_upperfirststring">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12115 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.upperfirst "See the npm package")

Converts the first character of `string` to upper case.

#### Arguments
1. `[string='']` *(string)*: The string to convert.

#### Returns
*(string)*:  Returns the converted string.

#### Example
```js
_.upperFirst('fred');
// => 'Fred'

_.upperFirst('FRED');
// => 'FRED'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_wordsstring-pattern"></a>`_.words([string=''], [pattern])`
<a href="#_wordsstring-pattern">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12915 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.words "See the npm package")

Splits `string` into an array of its words.

#### Arguments
1. `[string='']` *(string)*: The string to inspect.
2. `[pattern]` *(RegExp|string)*: The pattern to match words.

#### Returns
*(Array)*:  Returns the words of `string`.

#### Example
```js
_.words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']

_.words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Util” Methods`

<!-- div -->

### <a id="_attemptfunc"></a>`_.attempt(func)`
<a href="#_attemptfunc">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12947 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.attempt "See the npm package")

Attempts to invoke `func`, returning either the result or the caught error
object. Any additional arguments are provided to `func` when it's invoked.

#### Arguments
1. `func` *(Function)*: The function to attempt.

#### Returns
*(&#42;)*:  Returns the `func` result or error object.

#### Example
```js
// Avoid throwing errors for invalid selectors.
var elements = _.attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');

if (_.isError(elements)) {
  elements = [];
}
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_bindallobject-methodnames"></a>`_.bindAll(object, methodNames)`
<a href="#_bindallobject-methodnames">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L12981 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.bindall "See the npm package")

Binds methods of an object to the object itself, overwriting the existing
method.
<br>
<br>
**Note:** This method doesn't set the "length" property of bound functions.

#### Arguments
1. `object` *(Object)*: The object to bind and assign the bound methods to.
2. `methodNames` *(...(string|string&#91;&#93;)*: The object method names to bind, specified individually or in arrays.

#### Returns
*(Object)*:  Returns `object`.

#### Example
```js
var view = {
  'label': 'docs',
  'onClick': function() {
    console.log('clicked ' + this.label);
  }
};

_.bindAll(view, 'onClick');
jQuery(element).on('click', view.onClick);
// => logs 'clicked docs' when clicked
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_condpairs"></a>`_.cond(pairs)`
<a href="#_condpairs">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13016 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.cond "See the npm package")

Creates a function that iterates over `pairs` invoking the corresponding
function of the first predicate to return truthy. The predicate-function
pairs are invoked with the `this` binding and arguments of the created
function.

#### Arguments
1. `pairs` *(Array)*: The predicate-function pairs.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var func = _.cond([
  [_.matches({ 'a': 1 }),           _.constant('matches A')],
  [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
  [_.constant(true),                _.constant('no match')]
]);

func({ 'a': 1, 'b': 2 });
// => 'matches A'

func({ 'a': 0, 'b': 1 });
// => 'matches B'

func({ 'a': '1', 'b': '2' });
// => 'no match'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_conformssource"></a>`_.conforms(source)`
<a href="#_conformssource">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13058 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.conforms "See the npm package")

Creates a function that invokes the predicate properties of `source` with
the corresponding property values of a given object, returning `true` if
all predicates return truthy, else `false`.

#### Arguments
1. `source` *(Object)*: The object of property predicates to conform to.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

_.filter(users, _.conforms({ 'age': _.partial(_.gt, _, 38) }));
// => [{ 'user': 'fred', 'age': 40 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_constantvalue"></a>`_.constant(value)`
<a href="#_constantvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13078 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.constant "See the npm package")

Creates a function that returns `value`.

#### Arguments
1. `value` *(&#42;)*: The value to return from the new function.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var object = { 'user': 'fred' };
var getter = _.constant(object);

getter() === object;
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_flowfuncs"></a>`_.flow([funcs])`
<a href="#_flowfuncs">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13104 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.flow "See the npm package")

Creates a function that returns the result of invoking the provided
functions with the `this` binding of the created function, where each
successive invocation is supplied the return value of the previous.

#### Arguments
1. `[funcs]` *(...(Function|Function&#91;&#93;)*: Functions to invoke.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
function square(n) {
  return n * n;
}

var addSquare = _.flow(_.add, square);
addSquare(1, 2);
// => 9
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_flowrightfuncs"></a>`_.flowRight([funcs])`
<a href="#_flowrightfuncs">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13125 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.flowright "See the npm package")

This method is like `_.flow` except that it creates a function that
invokes the provided functions from right to left.

#### Arguments
1. `[funcs]` *(...(Function|Function&#91;&#93;)*: Functions to invoke.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
function square(n) {
  return n * n;
}

var addSquare = _.flowRight(square, _.add);
addSquare(1, 2);
// => 9
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_identityvalue"></a>`_.identity(value)`
<a href="#_identityvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13142 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.identity "See the npm package")

This method returns the first argument provided to it.

#### Arguments
1. `value` *(&#42;)*: Any value.

#### Returns
*(&#42;)*:  Returns `value`.

#### Example
```js
var object = { 'user': 'fred' };

_.identity(object) === object;
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_iterateefunc_identity"></a>`_.iteratee([func=_.identity])`
<a href="#_iterateefunc_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13175 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.iteratee "See the npm package")

Creates a function that invokes `func` with the arguments of the created
function. If `func` is a property name the created callback returns the
property value for a given element. If `func` is an object the created
callback returns `true` for elements that contain the equivalent object properties, otherwise it returns `false`.

#### Arguments
1. `[func=_.identity]` *(&#42;)*: The value to convert to a callback.

#### Returns
*(Function)*:  Returns the callback.

#### Example
```js
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

// Create custom iteratee shorthands.
_.iteratee = _.wrap(_.iteratee, function(callback, func) {
  var p = /^(\S+)\s*([<>])\s*(\S+)$/.exec(func);
  return !p ? callback(func) : function(object) {
    return (p[2] == '>' ? object[p[1]] > p[3] : object[p[1]] < p[3]);
  };
});

_.filter(users, 'age > 36');
// => [{ 'user': 'fred', 'age': 40 }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_matchessource"></a>`_.matches(source)`
<a href="#_matchessource">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13201 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.matches "See the npm package")

Creates a function that performs a deep partial comparison between a given
object and `source`, returning `true` if the given object has equivalent
property values, else `false`.
<br>
<br>
**Note:** This method supports comparing the same values as `_.isEqual`.

#### Arguments
1. `source` *(Object)*: The object of property values to match.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

_.filter(users, _.matches({ 'age': 40, 'active': false }));
// => [{ 'user': 'fred', 'age': 40, 'active': false }]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_matchespropertypath-srcvalue"></a>`_.matchesProperty(path, srcValue)`
<a href="#_matchespropertypath-srcvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13228 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.matchesproperty "See the npm package")

Creates a function that performs a deep partial comparison between the
value at `path` of a given object to `srcValue`, returning `true` if the
object value is equivalent, else `false`.
<br>
<br>
**Note:** This method supports comparing the same values as `_.isEqual`.

#### Arguments
1. `path` *(Array|string)*: The path of the property to get.
2. `srcValue` *(&#42;)*: The value to match.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

_.find(users, _.matchesProperty('user', 'fred'));
// => { 'user': 'fred' }
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_methodpath-args"></a>`_.method(path, [args])`
<a href="#_methodpath-args">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13255 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.method "See the npm package")

Creates a function that invokes the method at `path` of a given object.
Any additional arguments are provided to the invoked method.

#### Arguments
1. `path` *(Array|string)*: The path of the method to invoke.
2. `[args]` *(...&#42;)*: The arguments to invoke the method with.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var objects = [
  { 'a': { 'b': { 'c': _.constant(2) } } },
  { 'a': { 'b': { 'c': _.constant(1) } } }
];

_.map(objects, _.method('a.b.c'));
// => [2, 1]

_.invokeMap(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
// => [1, 2]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_methodofobject-args"></a>`_.methodOf(object, [args])`
<a href="#_methodofobject-args">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13283 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.methodof "See the npm package")

The opposite of `_.method`; this method creates a function that invokes
the method at a given path of `object`. Any additional arguments are
provided to the invoked method.

#### Arguments
1. `object` *(Object)*: The object to query.
2. `[args]` *(...&#42;)*: The arguments to invoke the method with.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var array = _.times(3, _.constant),
    object = { 'a': array, 'b': array, 'c': array };

_.map(['a[2]', 'c[0]'], _.methodOf(object));
// => [2, 0]

_.map([['a', '2'], ['c', '0']], _.methodOf(object));
// => [2, 0]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_mixinobjectlodash-source-options"></a>`_.mixin([object=lodash], source, [options])`
<a href="#_mixinobjectlodash-source-options">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13325 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.mixin "See the npm package")

Adds all own enumerable function properties of a source object to the
destination object. If `object` is a function then methods are added to
its prototype as well.
<br>
<br>
**Note:** Use `_.runInContext` to create a pristine `lodash` function to
avoid conflicts caused by modifying the original.

#### Arguments
1. `[object=lodash]` *(Function|Object)*: The destination object.
2. `source` *(Object)*: The object of functions to add.
3. `[options]` *(Object)*: The options object.
4. `[options.chain=true]` *(boolean)*: Specify whether the functions added are chainable.

#### Returns
*(Function|Object)*:  Returns `object`.

#### Example
```js
function vowels(string) {
  return _.filter(string, function(v) {
    return /[aeiou]/i.test(v);
  });
}

_.mixin({ 'vowels': vowels });
_.vowels('fred');
// => ['e']

_('fred').vowels().value();
// => ['e']

_.mixin({ 'vowels': vowels }, { 'chain': false });
_('fred').vowels();
// => ['e']
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_noconflict"></a>`_.noConflict()`
<a href="#_noconflict">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13373 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.noconflict "See the npm package")

Reverts the `_` variable to its previous value and returns a reference to
the `lodash` function.

#### Returns
*(Function)*:  Returns the `lodash` function.

#### Example
```js
var lodash = _.noConflict();
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_noop"></a>`_.noop()`
<a href="#_noop">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13394 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.noop "See the npm package")

A no-operation function that returns `undefined` regardless of the
arguments it receives.

#### Example
```js
var object = { 'user': 'fred' };

_.noop(object) === undefined;
// => true
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_nthargn0"></a>`_.nthArg([n=0])`
<a href="#_nthargn0">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13413 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.ntharg "See the npm package")

Creates a function that returns its nth argument.

#### Arguments
1. `[n=0]` *(number)*: The index of the argument to return.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var func = _.nthArg(1);

func('a', 'b', 'c');
// => 'b'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_overiteratees"></a>`_.over(iteratees)`
<a href="#_overiteratees">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13436 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.over "See the npm package")

Creates a function that invokes `iteratees` with the arguments provided
to the created function and returns their results.

#### Arguments
1. `iteratees` *(...(Function|Function&#91;&#93;)*: The iteratees to invoke.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var func = _.over(Math.max, Math.min);

func(1, 2, 3, 4);
// => [4, 1]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_overeverypredicates"></a>`_.overEvery(predicates)`
<a href="#_overeverypredicates">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13460 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.overevery "See the npm package")

Creates a function that checks if **all** of the `predicates` return
truthy when invoked with the arguments provided to the created function.

#### Arguments
1. `predicates` *(...(Function|Function&#91;&#93;)*: The predicates to check.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var func = _.overEvery(Boolean, isFinite);

func('1');
// => true

func(null);
// => false

func(NaN);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_oversomepredicates"></a>`_.overSome(predicates)`
<a href="#_oversomepredicates">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13484 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.oversome "See the npm package")

Creates a function that checks if **any** of the `predicates` return
truthy when invoked with the arguments provided to the created function.

#### Arguments
1. `predicates` *(...(Function|Function&#91;&#93;)*: The predicates to check.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var func = _.overSome(Boolean, isFinite);

func('1');
// => true

func(null);
// => true

func(NaN);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_propertypath"></a>`_.property(path)`
<a href="#_propertypath">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13507 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.property "See the npm package")

Creates a function that returns the value at `path` of a given object.

#### Arguments
1. `path` *(Array|string)*: The path of the property to get.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var objects = [
  { 'a': { 'b': { 'c': 2 } } },
  { 'a': { 'b': { 'c': 1 } } }
];

_.map(objects, _.property('a.b.c'));
// => [2, 1]

_.map(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
// => [1, 2]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_propertyofobject"></a>`_.propertyOf(object)`
<a href="#_propertyofobject">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13531 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.propertyof "See the npm package")

The opposite of `_.property`; this method creates a function that returns
the value at a given path of `object`.

#### Arguments
1. `object` *(Object)*: The object to query.

#### Returns
*(Function)*:  Returns the new function.

#### Example
```js
var array = [0, 1, 2],
    object = { 'a': array, 'b': array, 'c': array };

_.map(['a[2]', 'c[0]'], _.propertyOf(object));
// => [2, 0]

_.map([['a', '2'], ['c', '0']], _.propertyOf(object));
// => [2, 0]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_rangestart0-end-step1"></a>`_.range([start=0], end, [step=1])`
<a href="#_rangestart0-end-step1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13576 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.range "See the npm package")

Creates an array of numbers (positive and/or negative) progressing from
`start` up to, but not including, `end`. A step of `-1` is used if a negative
`start` is specified without an `end` or `step`. If `end` is not specified
it's set to `start` with `start` then set to `0`.
<br>
<br>
**Note:** JavaScript follows the IEEE-754 standard for resolving
floating-point values which can produce unexpected results.

#### Arguments
1. `[start=0]` *(number)*: The start of the range.
2. `end` *(number)*: The end of the range.
3. `[step=1]` *(number)*: The value to increment or decrement by.

#### Returns
*(Array)*:  Returns the new array of numbers.

#### Example
```js
_.range(4);
// => [0, 1, 2, 3]

_.range(-4);
// => [0, -1, -2, -3]

_.range(1, 5);
// => [1, 2, 3, 4]

_.range(0, 20, 5);
// => [0, 5, 10, 15]

_.range(0, -4, -1);
// => [0, -1, -2, -3]

_.range(1, 4, 0);
// => [1, 1, 1]

_.range(0);
// => []
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_rangerightstart0-end-step1"></a>`_.rangeRight([start=0], end, [step=1])`
<a href="#_rangerightstart0-end-step1">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13612 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.rangeright "See the npm package")

This method is like `_.range` except that it populates values in
descending order.

#### Arguments
1. `[start=0]` *(number)*: The start of the range.
2. `end` *(number)*: The end of the range.
3. `[step=1]` *(number)*: The value to increment or decrement by.

#### Returns
*(Array)*:  Returns the new array of numbers.

#### Example
```js
_.rangeRight(4);
// => [3, 2, 1, 0]

_.rangeRight(-4);
// => [-3, -2, -1, 0]

_.rangeRight(1, 5);
// => [4, 3, 2, 1]

_.rangeRight(0, 20, 5);
// => [15, 10, 5, 0]

_.rangeRight(0, -4, -1);
// => [-3, -2, -1, 0]

_.rangeRight(1, 4, 0);
// => [1, 1, 1]

_.rangeRight(0);
// => []
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_runincontextcontextroot"></a>`_.runInContext([context=root])`
<a href="#_runincontextcontextroot">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L1266 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.runincontext "See the npm package")

Create a new pristine `lodash` function using the `context` object.

#### Arguments
1. `[context=root]` *(Object)*: The context object.

#### Returns
*(Function)*:  Returns a new `lodash` function.

#### Example
```js
_.mixin({ 'foo': _.constant('foo') });

var lodash = _.runInContext();
lodash.mixin({ 'bar': lodash.constant('bar') });

_.isFunction(_.foo);
// => true
_.isFunction(_.bar);
// => false

lodash.isFunction(lodash.foo);
// => false
lodash.isFunction(lodash.bar);
// => true

// Use `context` to mock `Date#getTime` use in `_.now`.
var mock = _.runInContext({
  'Date': function() {
    return { 'getTime': getTimeMock };
  }
});

// Create a suped-up `defer` in Node.js.
var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_timesn-iteratee_identity"></a>`_.times(n, [iteratee=_.identity])`
<a href="#_timesn-iteratee_identity">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13632 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.times "See the npm package")

Invokes the iteratee function `n` times, returning an array of the results
of each invocation. The iteratee is invoked with one argument; (index).

#### Arguments
1. `n` *(number)*: The number of times to invoke `iteratee`.
2. `[iteratee=_.identity]` *(Function)*: The function invoked per iteration.

#### Returns
*(Array)*:  Returns the array of results.

#### Example
```js
_.times(3, String);
// => ['0', '1', '2']

 _.times(4, _.constant(true));
// => [true, true, true, true]
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_topathvalue"></a>`_.toPath(value)`
<a href="#_topathvalue">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13675 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.topath "See the npm package")

Converts `value` to a property path array.

#### Arguments
1. `value` *(&#42;)*: The value to convert.

#### Returns
*(Array)*:  Returns the new property path array.

#### Example
```js
_.toPath('a.b.c');
// => ['a', 'b', 'c']

_.toPath('a[0].b.c');
// => ['a', '0', 'b', 'c']

var path = ['a', 'b', 'c'],
    newPath = _.toPath(path);

console.log(newPath);
// => ['a', 'b', 'c']

console.log(path === newPath);
// => false
```
* * *

<!-- /div -->

<!-- div -->

### <a id="_uniqueidprefix"></a>`_.uniqueId([prefix])`
<a href="#_uniqueidprefix">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L13695 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.uniqueid "See the npm package")

Generates a unique ID. If `prefix` is provided the ID is appended to it.

#### Arguments
1. `[prefix]` *(string)*: The value to prefix the ID with.

#### Returns
*(string)*:  Returns the unique ID.

#### Example
```js
_.uniqueId('contact_');
// => 'contact_104'

_.uniqueId();
// => '105'
```
* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Properties`

<!-- div -->

### <a id="_version"></a>`_.VERSION`
<a href="#_version">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L14328 "View in source") [&#x24C9;][1]

(string): The semantic version number.

* * *

<!-- /div -->

<!-- div -->

### <a id="_templatesettings"></a>`_.templateSettings`
<a href="#_templatesettings">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L1511 "View in source") [&#x24C9;][1] [&#x24C3;](https://www.npmjs.com/package/lodash.templatesettings "See the npm package")

(Object): By default, the template delimiters used by lodash are like those in
embedded Ruby (ERB). Change the following template settings to use
alternative delimiters.

* * *

<!-- /div -->

<!-- div -->

### <a id="_templatesettingsescape"></a>`_.templateSettings.escape`
<a href="#_templatesettingsescape">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L1519 "View in source") [&#x24C9;][1]

(RegExp): Used to detect `data` property values to be HTML-escaped.

* * *

<!-- /div -->

<!-- div -->

### <a id="_templatesettingsevaluate"></a>`_.templateSettings.evaluate`
<a href="#_templatesettingsevaluate">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L1527 "View in source") [&#x24C9;][1]

(RegExp): Used to detect code to be evaluated.

* * *

<!-- /div -->

<!-- div -->

### <a id="_templatesettingsimports"></a>`_.templateSettings.imports`
<a href="#_templatesettingsimports">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L1551 "View in source") [&#x24C9;][1]

(Object): Used to import variables into the compiled template.

* * *

<!-- /div -->

<!-- div -->

### <a id="_templatesettingsinterpolate"></a>`_.templateSettings.interpolate`
<a href="#_templatesettingsinterpolate">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L1535 "View in source") [&#x24C9;][1]

(RegExp): Used to detect `data` property values to inject.

* * *

<!-- /div -->

<!-- div -->

### <a id="_templatesettingsvariable"></a>`_.templateSettings.variable`
<a href="#_templatesettingsvariable">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L1543 "View in source") [&#x24C9;][1]

(string): Used to reference the data object in the template text.

* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Methods`

<!-- div -->

### <a id="_templatesettingsimports_"></a>`_.templateSettings.imports._`
<a href="#_templatesettingsimports_">#</a> [&#x24C8;](https://github.com/lodash/lodash/blob/4.2.1/lodash.js#L1559 "View in source") [&#x24C9;][1]

A reference to the `lodash` function.

* * *

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #array "Jump back to the TOC."
