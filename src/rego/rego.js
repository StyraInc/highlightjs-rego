/**
 * Language: Rego
 * Author: Anders Eknert <anders@styra.com>
 * Description: Rego is the policy language of Open Policy Agent (OPA)
 * Website: https://www.openpolicyagent.org
 */
module.exports = function(hljs) {
  const regex = hljs.regex;

  return {
    case_insensitive: false,
    keywords: {
      keyword: [
        'as',
        'contains',
        'default',
        'else',
        'every',
        'if',
        'in',
        'import',
        'package',
        'not',
        'some',
        'with'
      ],
      literal: [
        'false',
        'true',
        'null'
      ],
      symbol: [
        // using 'symbol' here mostly to distinguis these from keywords or built-ins
        // as while they technically are keywords in OPA 1.0, it subjectively doesn't
        // look great when they're highlighted as such
        'data',
        'input'
      ],
      built_in: [
        // as of:
        // opa capabilities --current | opa eval -f pretty --stdin-input '[n | n := input.builtins[_].name]'
        'abs',
        'all',
        'and',
        'any',
        'array.concat',
        'array.reverse',
        'array.slice',
        'assign',
        'base64.decode',
        'base64.encode',
        'base64.is_valid',
        'base64url.decode',
        'base64url.encode',
        'base64url.encode_no_pad',
        'bits.and',
        'bits.lsh',
        'bits.negate',
        'bits.or',
        'bits.rsh',
        'bits.xor',
        'cast_array',
        'cast_boolean',
        'cast_null',
        'cast_object',
        'cast_set',
        'cast_string',
        'ceil',
        'concat',
        // special case, as this is both a keyword and a built-in function
        // and while the keyword is far more common than the use of the
        // function, the highlighter seems to give precedence to the function
        // 'contains',
        'count',
        'crypto.hmac.equal',
        'crypto.hmac.md5',
        'crypto.hmac.sha1',
        'crypto.hmac.sha256',
        'crypto.hmac.sha512',
        'crypto.md5',
        'crypto.parse_private_keys',
        'crypto.sha1',
        'crypto.sha256',
        'crypto.x509.parse_and_verify_certificates',
        'crypto.x509.parse_and_verify_certificates_with_options',
        'crypto.x509.parse_certificate_request',
        'crypto.x509.parse_certificates',
        'crypto.x509.parse_keypair',
        'crypto.x509.parse_rsa_private_key',
        'div',
        'endswith',
        'eq',
        'equal',
        'floor',
        'format_int',
        'glob.match',
        'glob.quote_meta',
        'graph.reachable',
        'graph.reachable_paths',
        'graphql.is_valid',
        'graphql.parse',
        'graphql.parse_and_verify',
        'graphql.parse_query',
        'graphql.parse_schema',
        'graphql.schema_is_valid',
        'gt',
        'gte',
        'hex.decode',
        'hex.encode',
        'http.send',
        'indexof',
        'indexof_n',
        'internal.member_2',
        'internal.member_3',
        'internal.print',
        'intersection',
        'io.jwt.decode',
        'io.jwt.decode_verify',
        'io.jwt.encode_sign',
        'io.jwt.encode_sign_raw',
        'io.jwt.verify_es256',
        'io.jwt.verify_es384',
        'io.jwt.verify_es512',
        'io.jwt.verify_hs256',
        'io.jwt.verify_hs384',
        'io.jwt.verify_hs512',
        'io.jwt.verify_ps256',
        'io.jwt.verify_ps384',
        'io.jwt.verify_ps512',
        'io.jwt.verify_rs256',
        'io.jwt.verify_rs384',
        'io.jwt.verify_rs512',
        'is_array',
        'is_boolean',
        'is_null',
        'is_number',
        'is_object',
        'is_set',
        'is_string',
        'json.filter',
        'json.is_valid',
        'json.marshal',
        'json.marshal_with_options',
        'json.match_schema',
        'json.patch',
        'json.remove',
        'json.unmarshal',
        'json.verify_schema',
        'lower',
        'lt',
        'lte',
        'max',
        'min',
        'minus',
        'mul',
        'neq',
        'net.cidr_contains',
        'net.cidr_contains_matches',
        'net.cidr_expand',
        'net.cidr_intersects',
        'net.cidr_is_valid',
        'net.cidr_merge',
        'net.cidr_overlap',
        'net.lookup_ip_addr',
        'numbers.range',
        'numbers.range_step',
        'object.filter',
        'object.get',
        'object.keys',
        'object.remove',
        'object.subset',
        'object.union',
        'object.union_n',
        'opa.runtime',
        'or',
        'plus',
        'print',
        'product',
        'providers.aws.sign_req',
        'rand.intn',
        're_match',
        'regex.find_all_string_submatch_n',
        'regex.find_n',
        'regex.globs_match',
        'regex.is_valid',
        'regex.match',
        'regex.replace',
        'regex.split',
        'regex.template_match',
        'rego.metadata.chain',
        'rego.metadata.rule',
        'rego.parse_module',
        'rem',
        'replace',
        'round',
        'semver.compare',
        'semver.is_valid',
        'set_diff',
        'sort',
        'split',
        'sprintf',
        'startswith',
        'strings.any_prefix_match',
        'strings.any_suffix_match',
        'strings.count',
        'strings.render_template',
        'strings.replace_n',
        'strings.reverse',
        'substring',
        'sum',
        'time.add_date',
        'time.clock',
        'time.date',
        'time.diff',
        'time.format',
        'time.now_ns',
        'time.parse_duration_ns',
        'time.parse_ns',
        'time.parse_rfc3339_ns',
        'time.weekday',
        'to_number',
        'trace',
        'trim',
        'trim_left',
        'trim_prefix',
        'trim_right',
        'trim_space',
        'trim_suffix',
        'type_name',
        'union',
        'units.parse',
        'units.parse_bytes',
        'upper',
        'urlquery.decode',
        'urlquery.decode_object',
        'urlquery.encode',
        'urlquery.encode_object',
        'uuid.parse',
        'uuid.rfc4122',
        'walk',
        'yaml.is_valid',
        'yaml.marshal',
        'yaml.unmarshal'
      ]
    },
    contains: [
      hljs.C_NUMBER_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        match: /[{}[\]\\(\\),\\.]/,
        className: "punctuation",
        relevance: 0
      },
      {
        scope: 'operator',
        match: regex.either(...[
          '==',
          '=',
          '\\+',
          '-',
          '<=',
          '<',
          '>=',
          '>',
          '!=',
          '\\|',
          '\\*'
        ])
      },
      {
        // raw strings
        scope: 'string',
        begin: '`',
        end: '`'
      },
      hljs.HASH_COMMENT_MODE,
      {
        // relevance boost
        begin: /import rego\.v1/,
        keywords: 'import',
        relevance: 10
      }
    ]
  };
};
