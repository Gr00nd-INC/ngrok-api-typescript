'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __asyncValues =
  (this && this.__asyncValues) ||
  function (o) {
    if (!Symbol.asyncIterator)
      throw new TypeError('Symbol.asyncIterator is not defined.');
    var m = o[Symbol.asyncIterator],
      i;
    return m
      ? m.call(o)
      : ((o =
          typeof __values === 'function' ? __values(o) : o[Symbol.iterator]()),
        (i = {}),
        verb('next'),
        verb('throw'),
        verb('return'),
        (i[Symbol.asyncIterator] = function () {
          return this;
        }),
        i);
    function verb(n) {
      i[n] =
        o[n] &&
        function (v) {
          return new Promise(function (resolve, reject) {
            (v = o[n](v)), settle(resolve, reject, v.done, v.value);
          });
        };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function (v) {
        resolve({ value: v, done: d });
      }, reject);
    }
  };
var __await =
  (this && this.__await) ||
  function (v) {
    return this instanceof __await ? ((this.v = v), this) : new __await(v);
  };
var __asyncGenerator =
  (this && this.__asyncGenerator) ||
  function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
      throw new TypeError('Symbol.asyncIterator is not defined.');
    var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
    return (
      (i = {}),
      verb('next'),
      verb('throw'),
      verb('return'),
      (i[Symbol.asyncIterator] = function () {
        return this;
      }),
      i
    );
    function verb(n) {
      if (g[n])
        i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await
        ? Promise.resolve(r.value.v).then(fulfill, reject)
        : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume('next', value);
    }
    function reject(value) {
      resume('throw', value);
    }
    function settle(f, v) {
      if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
    }
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Tunnels =
  exports.TunnelSessions =
  exports.TLSCertificates =
  exports.SSHUserCertificates =
  exports.SSHHostCertificates =
  exports.SSHCredentials =
  exports.SSHCertificateAuthorities =
  exports.ReservedDomains =
  exports.ReservedAddrs =
  exports.IPRestrictions =
  exports.IPPolicyRules =
  exports.IPPolicies =
  exports.EventSources =
  exports.EventSubscriptions =
  exports.EventDestinations =
  exports.Endpoints =
  exports.TLSEdgeTLSTerminationModule =
  exports.TLSEdgeMutualTLSModule =
  exports.TLSEdgeIPRestrictionModule =
  exports.TLSEdgeBackendModule =
  exports.EdgesTLS =
  exports.TCPEdgeIPRestrictionModule =
  exports.TCPEdgeBackendModule =
  exports.EdgesTCP =
  exports.EdgeRouteWebsocketTCPConverterModule =
  exports.EdgeRouteOIDCModule =
  exports.EdgeRouteSAMLModule =
  exports.EdgeRouteOAuthModule =
  exports.EdgeRouteWebhookVerificationModule =
  exports.EdgeRouteCircuitBreakerModule =
  exports.EdgeRouteCompressionModule =
  exports.EdgeRouteResponseHeadersModule =
  exports.EdgeRouteRequestHeadersModule =
  exports.EdgeRouteIPRestrictionModule =
  exports.EdgeRouteBackendModule =
  exports.HTTPSEdgeTLSTerminationModule =
  exports.HTTPSEdgeMutualTLSModule =
  exports.EdgesHTTPS =
  exports.EdgesHTTPSRoutes =
  exports.Credentials =
  exports.CertificateAuthorities =
  exports.WeightedBackends =
  exports.TunnelGroupBackends =
  exports.HTTPResponseBackends =
  exports.FailoverBackends =
  exports.APIKeys =
  exports.AgentIngresses =
  exports.AbuseReports =
    void 0;
const util = require('./util');
/**
 * Abuse Reports allow you to submit take-down requests for URLs hosted by
 ngrok that violate ngrok's terms of service.
 */
class AbuseReports {
  /** Do not construct this object directly, use the <code>abuseReports</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Creates a new abuse report which will be reviewed by our system and abuse response team. This API is only available to authorized accounts. Contact abuse@ngrok.com to request access
   */
  create(arg) {
    return this.httpClient
      .url(`/abuse_reports`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get the detailed status of abuse report by ID.
   */
  get(arg) {
    return this.httpClient
      .url(`/abuse_reports/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.AbuseReports = AbuseReports;
class AgentIngresses {
  /** Do not construct this object directly, use the <code>agentIngresses</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new Agent Ingress. The ngrok agent can be configured to connect to ngrok via the new set of addresses on the returned Agent Ingress.
   */
  create(arg) {
    return this.httpClient
      .url(`/agent_ingresses`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete an Agent Ingress by ID
   */
  delete(arg) {
    return this.httpClient
      .url(`/agent_ingresses/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get the details of an Agent Ingress by ID.
   */
  get(arg) {
    return this.httpClient
      .url(`/agent_ingresses/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all Agent Ingresses owned by this account
   */
  list() {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/agent_ingresses`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_1() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.ingresses;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update attributes of an Agent Ingress by ID.
   */
  update(arg) {
    return this.httpClient
      .url(`/agent_ingresses/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.AgentIngresses = AgentIngresses;
/**
 * API Keys are used to authenticate to the [ngrok
 API](https://ngrok.com/docs/api#authentication). You may use the API itself
 to provision and manage API Keys but you'll need to provision your first API
 key from the [API Keys page](https://dashboard.ngrok.com/api/keys) on your
 ngrok.com dashboard.
 */
class APIKeys {
  /** Do not construct this object directly, use the <code>apiKeys</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new API key. The generated API key can be used to authenticate to the ngrok API.
   */
  create(arg) {
    return this.httpClient
      .url(`/api_keys`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete an API key by ID
   */
  delete(arg) {
    return this.httpClient
      .url(`/api_keys/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get the details of an API key by ID.
   */
  get(arg) {
    return this.httpClient
      .url(`/api_keys/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all API keys owned by this account
   */
  list() {
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/api_keys`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_2() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.keys;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update attributes of an API key by ID.
   */
  update(arg) {
    return this.httpClient
      .url(`/api_keys/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.APIKeys = APIKeys;
/**
 * A Failover backend defines failover behavior within a list of referenced
 backends. Traffic is sent to the first backend in the list. If that backend
 is offline or no connection can be established, ngrok attempts to connect to
 the next backend in the list until one is successful.
 */
class FailoverBackends {
  /** Do not construct this object directly, use the <code>failoverBackends</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new Failover backend
   */
  create(arg) {
    return this.httpClient
      .url(`/backends/failover`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete a Failover backend by ID.
   */
  delete(arg) {
    return this.httpClient
      .url(`/backends/failover/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get detailed information about a Failover backend by ID
   */
  get(arg) {
    return this.httpClient
      .url(`/backends/failover/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all Failover backends on this account
   */
  list() {
    var e_3, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/backends/failover`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_3() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.backends;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update Failover backend by ID
   */
  update(arg) {
    return this.httpClient
      .url(`/backends/failover/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.FailoverBackends = FailoverBackends;
class HTTPResponseBackends {
  /** Do not construct this object directly, use the <code>httpResponseBackends</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  create(arg) {
    return this.httpClient
      .url(`/backends/http_response`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/backends/http_response/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/backends/http_response/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  list() {
    var e_4, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_4_1) {
        e_4 = { error: e_4_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/backends/http_response`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_4() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.backends;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  update(arg) {
    return this.httpClient
      .url(`/backends/http_response/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.HTTPResponseBackends = HTTPResponseBackends;
/**
 * A Tunnel Group Backend balances traffic among all online tunnels that match
 a label selector.
 */
class TunnelGroupBackends {
  /** Do not construct this object directly, use the <code>tunnelGroupBackends</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new TunnelGroup backend
   */
  create(arg) {
    return this.httpClient
      .url(`/backends/tunnel_group`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete a TunnelGroup backend by ID.
   */
  delete(arg) {
    return this.httpClient
      .url(`/backends/tunnel_group/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get detailed information about a TunnelGroup backend by ID
   */
  get(arg) {
    return this.httpClient
      .url(`/backends/tunnel_group/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all TunnelGroup backends on this account
   */
  list() {
    var e_5, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_5_1) {
        e_5 = { error: e_5_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_5) throw e_5.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/backends/tunnel_group`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_5() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.backends;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update TunnelGroup backend by ID
   */
  update(arg) {
    return this.httpClient
      .url(`/backends/tunnel_group/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.TunnelGroupBackends = TunnelGroupBackends;
/**
 * A Weighted Backend balances traffic among the referenced backends. Traffic
 is assigned proportionally to each based on its weight. The percentage of
 traffic is calculated by dividing a backend's weight by the sum of all
 weights.
 */
class WeightedBackends {
  /** Do not construct this object directly, use the <code>weightedBackends</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new Weighted backend
   */
  create(arg) {
    return this.httpClient
      .url(`/backends/weighted`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete a Weighted backend by ID.
   */
  delete(arg) {
    return this.httpClient
      .url(`/backends/weighted/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get detailed information about a Weighted backend by ID
   */
  get(arg) {
    return this.httpClient
      .url(`/backends/weighted/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all Weighted backends on this account
   */
  list() {
    var e_6, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_6_1) {
        e_6 = { error: e_6_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_6) throw e_6.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/backends/weighted`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_6() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.backends;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update Weighted backend by ID
   */
  update(arg) {
    return this.httpClient
      .url(`/backends/weighted/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.WeightedBackends = WeightedBackends;
/**
 * Certificate Authorities are x509 certificates that are used to sign other
 x509 certificates. Attach a Certificate Authority to the Mutual TLS module
 to verify that the TLS certificate presented by a client has been signed by
 this CA. Certificate Authorities  are used only for mTLS validation only and
 thus a private key is not included in the resource.
 */
class CertificateAuthorities {
  /** Do not construct this object directly, use the <code>certificateAuthorities</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Upload a new Certificate Authority
   */
  create(arg) {
    return this.httpClient
      .url(`/certificate_authorities`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete a Certificate Authority
   */
  delete(arg) {
    return this.httpClient
      .url(`/certificate_authorities/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get detailed information about a certficate authority
   */
  get(arg) {
    return this.httpClient
      .url(`/certificate_authorities/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all Certificate Authority on this account
   */
  list() {
    var e_7, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_7_1) {
        e_7 = { error: e_7_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/certificate_authorities`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_7() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.certificateAuthorities;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update attributes of a Certificate Authority by ID
   */
  update(arg) {
    return this.httpClient
      .url(`/certificate_authorities/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.CertificateAuthorities = CertificateAuthorities;
/**
 * Tunnel Credentials are ngrok agent authtokens. They authorize the ngrok
 agent to connect the ngrok service as your account. They are installed with
 the `ngrok authtoken` command or by specifying it in the `ngrok.yml`
 configuration file with the `authtoken` property.
 */
class Credentials {
  /** Do not construct this object directly, use the <code>credentials</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new tunnel authtoken credential. This authtoken credential can be used to start a new tunnel session. The response to this API call is the only time the generated token is available. If you need it for future use, you must save it securely yourself.
   */
  create(arg) {
    return this.httpClient
      .url(`/credentials`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete a tunnel authtoken credential by ID
   */
  delete(arg) {
    return this.httpClient
      .url(`/credentials/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get detailed information about a tunnel authtoken credential
   */
  get(arg) {
    return this.httpClient
      .url(`/credentials/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all tunnel authtoken credentials on this account
   */
  list() {
    var e_8, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_8_1) {
        e_8 = { error: e_8_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_8) throw e_8.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/credentials`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_8() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.credentials;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update attributes of an tunnel authtoken credential by ID
   */
  update(arg) {
    return this.httpClient
      .url(`/credentials/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.Credentials = Credentials;
class EdgesHTTPSRoutes {
  /** Do not construct this object directly, use the <code>edgesHttpsRoutes</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create an HTTPS Edge Route
   */
  create(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get an HTTPS Edge Route by ID
   */
  get(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Updates an HTTPS Edge Route by ID. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.
   */
  update(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete an HTTPS Edge Route by ID
   */
  delete(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgesHTTPSRoutes = EdgesHTTPSRoutes;
class EdgesHTTPS {
  /** Do not construct this object directly, use the <code>edgesHttps</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create an HTTPS Edge
   */
  create(arg) {
    return this.httpClient
      .url(`/edges/https`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get an HTTPS Edge by ID
   */
  get(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Returns a list of all HTTPS Edges on this account
   */
  list() {
    var e_9, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_9_1) {
        e_9 = { error: e_9_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_9) throw e_9.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/edges/https`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_9() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.httpsEdges;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Updates an HTTPS Edge by ID. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.
   */
  update(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete an HTTPS Edge by ID
   */
  delete(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgesHTTPS = EdgesHTTPS;
class HTTPSEdgeMutualTLSModule {
  /** Do not construct this object directly, use the <code>httpsEdgeMutualTlsModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.id}/mutual_tls`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.id}/mutual_tls`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.id}/mutual_tls`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.HTTPSEdgeMutualTLSModule = HTTPSEdgeMutualTLSModule;
class HTTPSEdgeTLSTerminationModule {
  /** Do not construct this object directly, use the <code>httpsEdgeTlsTerminationModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.id}/tls_termination`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.id}/tls_termination`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.id}/tls_termination`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.HTTPSEdgeTLSTerminationModule = HTTPSEdgeTLSTerminationModule;
class EdgeRouteBackendModule {
  /** Do not construct this object directly, use the <code>edgeRouteBackendModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/backend`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/backend`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/backend`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgeRouteBackendModule = EdgeRouteBackendModule;
class EdgeRouteIPRestrictionModule {
  /** Do not construct this object directly, use the <code>edgeRouteIpRestrictionModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/ip_restriction`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/ip_restriction`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/ip_restriction`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgeRouteIPRestrictionModule = EdgeRouteIPRestrictionModule;
class EdgeRouteRequestHeadersModule {
  /** Do not construct this object directly, use the <code>edgeRouteRequestHeadersModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/request_headers`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/request_headers`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/request_headers`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgeRouteRequestHeadersModule = EdgeRouteRequestHeadersModule;
class EdgeRouteResponseHeadersModule {
  /** Do not construct this object directly, use the <code>edgeRouteResponseHeadersModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/response_headers`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/response_headers`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/response_headers`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgeRouteResponseHeadersModule = EdgeRouteResponseHeadersModule;
class EdgeRouteCompressionModule {
  /** Do not construct this object directly, use the <code>edgeRouteCompressionModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/compression`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/compression`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/compression`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgeRouteCompressionModule = EdgeRouteCompressionModule;
class EdgeRouteCircuitBreakerModule {
  /** Do not construct this object directly, use the <code>edgeRouteCircuitBreakerModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/circuit_breaker`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/circuit_breaker`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/circuit_breaker`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgeRouteCircuitBreakerModule = EdgeRouteCircuitBreakerModule;
class EdgeRouteWebhookVerificationModule {
  /** Do not construct this object directly, use the <code>edgeRouteWebhookVerificationModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/webhook_verification`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/webhook_verification`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/webhook_verification`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgeRouteWebhookVerificationModule = EdgeRouteWebhookVerificationModule;
class EdgeRouteOAuthModule {
  /** Do not construct this object directly, use the <code>edgeRouteOAuthModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/oauth`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/oauth`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/oauth`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgeRouteOAuthModule = EdgeRouteOAuthModule;
class EdgeRouteSAMLModule {
  /** Do not construct this object directly, use the <code>edgeRouteSamlModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/saml`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/saml`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/saml`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgeRouteSAMLModule = EdgeRouteSAMLModule;
class EdgeRouteOIDCModule {
  /** Do not construct this object directly, use the <code>edgeRouteOidcModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/oidc`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/oidc`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/https/${arg.edgeId}/routes/${arg.id}/oidc`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgeRouteOIDCModule = EdgeRouteOIDCModule;
class EdgeRouteWebsocketTCPConverterModule {
  /** Do not construct this object directly, use the <code>edgeRouteWebsocketTcpConverterModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(
        `/edges/https/${arg.edgeId}/routes/${arg.id}/websocket_tcp_converter`
      )
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(
        `/edges/https/${arg.edgeId}/routes/${arg.id}/websocket_tcp_converter`
      )
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(
        `/edges/https/${arg.edgeId}/routes/${arg.id}/websocket_tcp_converter`
      )
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgeRouteWebsocketTCPConverterModule =
  EdgeRouteWebsocketTCPConverterModule;
class EdgesTCP {
  /** Do not construct this object directly, use the <code>edgesTcp</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a TCP Edge
   */
  create(arg) {
    return this.httpClient
      .url(`/edges/tcp`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get a TCP Edge by ID
   */
  get(arg) {
    return this.httpClient
      .url(`/edges/tcp/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Returns a list of all TCP Edges on this account
   */
  list() {
    var e_10, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_10_1) {
        e_10 = { error: e_10_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_10) throw e_10.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/edges/tcp`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_10() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.tcpEdges;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Updates a TCP Edge by ID. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.
   */
  update(arg) {
    return this.httpClient
      .url(`/edges/tcp/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete a TCP Edge by ID
   */
  delete(arg) {
    return this.httpClient
      .url(`/edges/tcp/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgesTCP = EdgesTCP;
class TCPEdgeBackendModule {
  /** Do not construct this object directly, use the <code>tcpEdgeBackendModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/tcp/${arg.id}/backend`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/tcp/${arg.id}/backend`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/tcp/${arg.id}/backend`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.TCPEdgeBackendModule = TCPEdgeBackendModule;
class TCPEdgeIPRestrictionModule {
  /** Do not construct this object directly, use the <code>tcpEdgeIpRestrictionModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/tcp/${arg.id}/ip_restriction`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/tcp/${arg.id}/ip_restriction`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/tcp/${arg.id}/ip_restriction`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.TCPEdgeIPRestrictionModule = TCPEdgeIPRestrictionModule;
class EdgesTLS {
  /** Do not construct this object directly, use the <code>edgesTls</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a TLS Edge
   */
  create(arg) {
    return this.httpClient
      .url(`/edges/tls`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get a TLS Edge by ID
   */
  get(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Returns a list of all TLS Edges on this account
   */
  list() {
    var e_11, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_11_1) {
        e_11 = { error: e_11_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_11) throw e_11.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/edges/tls`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_11() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.tlsEdges;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Updates a TLS Edge by ID. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.
   */
  update(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete a TLS Edge by ID
   */
  delete(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EdgesTLS = EdgesTLS;
class TLSEdgeBackendModule {
  /** Do not construct this object directly, use the <code>tlsEdgeBackendModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}/backend`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}/backend`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}/backend`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.TLSEdgeBackendModule = TLSEdgeBackendModule;
class TLSEdgeIPRestrictionModule {
  /** Do not construct this object directly, use the <code>tlsEdgeIpRestrictionModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}/ip_restriction`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}/ip_restriction`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}/ip_restriction`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.TLSEdgeIPRestrictionModule = TLSEdgeIPRestrictionModule;
class TLSEdgeMutualTLSModule {
  /** Do not construct this object directly, use the <code>tlsEdgeMutualTlsModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}/mutual_tls`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}/mutual_tls`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}/mutual_tls`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.TLSEdgeMutualTLSModule = TLSEdgeMutualTLSModule;
class TLSEdgeTLSTerminationModule {
  /** Do not construct this object directly, use the <code>tlsEdgeTlsTerminationModule</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  replace(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}/tls_termination`)
      .put(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  get(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}/tls_termination`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  delete(arg) {
    return this.httpClient
      .url(`/edges/tls/${arg.id}/tls_termination`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.TLSEdgeTLSTerminationModule = TLSEdgeTLSTerminationModule;
/**
 * Endpoints provides an API for querying the endpoint objects
 which define what tunnel or edge is used to serve a hostport.
 Only active endpoints associated with a tunnel or backend are returned.
 */
class Endpoints {
  /** Do not construct this object directly, use the <code>endpoints</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * List all active endpoints on the account
   */
  list() {
    var e_12, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_12_1) {
        e_12 = { error: e_12_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_12) throw e_12.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/endpoints`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_12() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.endpoints;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Get the status of an endpoint by ID
   */
  get(arg) {
    return this.httpClient
      .url(`/endpoints/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.Endpoints = Endpoints;
class EventDestinations {
  /** Do not construct this object directly, use the <code>eventDestinations</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new Event Destination. It will not apply to anything until it is associated with an Event Stream, and that Event Stream is associated with an Endpoint Config.
   */
  create(arg) {
    return this.httpClient
      .url(`/event_destinations`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete an Event Destination. If the Event Destination is still referenced by an Event Subscription.
   */
  delete(arg) {
    return this.httpClient
      .url(`/event_destinations/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get detailed information about an Event Destination by ID.
   */
  get(arg) {
    return this.httpClient
      .url(`/event_destinations/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all Event Destinations on this account.
   */
  list() {
    var e_13, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_13_1) {
        e_13 = { error: e_13_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_13) throw e_13.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/event_destinations`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_13() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.eventDestinations;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update attributes of an Event Destination.
   */
  update(arg) {
    return this.httpClient
      .url(`/event_destinations/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EventDestinations = EventDestinations;
class EventSubscriptions {
  /** Do not construct this object directly, use the <code>eventSubscriptions</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create an Event Subscription.
   */
  create(arg) {
    return this.httpClient
      .url(`/event_subscriptions`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete an Event Subscription.
   */
  delete(arg) {
    return this.httpClient
      .url(`/event_subscriptions/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get an Event Subscription by ID.
   */
  get(arg) {
    return this.httpClient
      .url(`/event_subscriptions/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List this Account's Event Subscriptions.
   */
  list() {
    var e_14, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_14_1) {
        e_14 = { error: e_14_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_14) throw e_14.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/event_subscriptions`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_14() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.eventSubscriptions;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update an Event Subscription.
   */
  update(arg) {
    return this.httpClient
      .url(`/event_subscriptions/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EventSubscriptions = EventSubscriptions;
class EventSources {
  /** Do not construct this object directly, use the <code>eventSources</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Add an additional type for which this event subscription will trigger
   */
  create(arg) {
    return this.httpClient
      .url(`/event_subscriptions/${arg.subscriptionId}/sources`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Remove a type for which this event subscription will trigger
   */
  delete(arg) {
    return this.httpClient
      .url(`/event_subscriptions/${arg.subscriptionId}/sources/${arg.type}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get the details for a given type that triggers for the given event subscription
   */
  get(arg) {
    return this.httpClient
      .url(`/event_subscriptions/${arg.subscriptionId}/sources/${arg.type}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List the types for which this event subscription will trigger
   */
  list(arg) {
    return this.httpClient
      .url(`/event_subscriptions/${arg.subscriptionId}/sources`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Update the type for which this event subscription will trigger
   */
  update(arg) {
    return this.httpClient
      .url(`/event_subscriptions/${arg.subscriptionId}/sources/${arg.type}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.EventSources = EventSources;
/**
 * IP Policies are reusable groups of CIDR ranges with an `allow` or `deny`
 action. They can be attached to endpoints via the Endpoint Configuration IP
 Policy module. They can also be used with IP Restrictions to control source
 IP ranges that can start tunnel sessions and connect to the API and dashboard.
 */
class IPPolicies {
  /** Do not construct this object directly, use the <code>ipPolicies</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new IP policy. It will not apply to any traffic until you associate to a traffic source via an endpoint configuration or IP restriction.
   */
  create(arg) {
    return this.httpClient
      .url(`/ip_policies`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete an IP policy. If the IP policy is referenced by another object for the purposes of traffic restriction it will be treated as if the IP policy remains but has zero rules.
   */
  delete(arg) {
    return this.httpClient
      .url(`/ip_policies/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get detailed information about an IP policy by ID.
   */
  get(arg) {
    return this.httpClient
      .url(`/ip_policies/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all IP policies on this account
   */
  list() {
    var e_15, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_15_1) {
        e_15 = { error: e_15_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_15) throw e_15.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/ip_policies`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_15() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.ipPolicies;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update attributes of an IP policy by ID
   */
  update(arg) {
    return this.httpClient
      .url(`/ip_policies/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.IPPolicies = IPPolicies;
/**
 * IP Policy Rules are the IPv4 or IPv6 CIDRs entries that
 make up an IP Policy.
 */
class IPPolicyRules {
  /** Do not construct this object directly, use the <code>ipPolicyRules</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new IP policy rule attached to an IP Policy.
   */
  create(arg) {
    return this.httpClient
      .url(`/ip_policy_rules`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete an IP policy rule.
   */
  delete(arg) {
    return this.httpClient
      .url(`/ip_policy_rules/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get detailed information about an IP policy rule by ID.
   */
  get(arg) {
    return this.httpClient
      .url(`/ip_policy_rules/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all IP policy rules on this account
   */
  list() {
    var e_16, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_16_1) {
        e_16 = { error: e_16_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_16) throw e_16.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/ip_policy_rules`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_16() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.ipPolicyRules;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update attributes of an IP policy rule by ID
   */
  update(arg) {
    return this.httpClient
      .url(`/ip_policy_rules/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.IPPolicyRules = IPPolicyRules;
/**
 * An IP restriction is a restriction placed on the CIDRs that are allowed to
 initiate traffic to a specific aspect of your ngrok account. An IP
 restriction has a type which defines the ingress it applies to. IP
 restrictions can be used to enforce the source IPs that can make API
 requests, log in to the dashboard, start ngrok agents, and connect to your
 public-facing endpoints.
 */
class IPRestrictions {
  /** Do not construct this object directly, use the <code>ipRestrictions</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new IP restriction
   */
  create(arg) {
    return this.httpClient
      .url(`/ip_restrictions`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete an IP restriction
   */
  delete(arg) {
    return this.httpClient
      .url(`/ip_restrictions/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get detailed information about an IP restriction
   */
  get(arg) {
    return this.httpClient
      .url(`/ip_restrictions/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all IP restrictions on this account
   */
  list() {
    var e_17, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_17_1) {
        e_17 = { error: e_17_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_17) throw e_17.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/ip_restrictions`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_17() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.ipRestrictions;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update attributes of an IP restriction by ID
   */
  update(arg) {
    return this.httpClient
      .url(`/ip_restrictions/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.IPRestrictions = IPRestrictions;
/**
 * Reserved Addresses are TCP addresses that can be used to listen for traffic.
 TCP address hostnames and ports are assigned by ngrok, they cannot be
 chosen.
 */
class ReservedAddrs {
  /** Do not construct this object directly, use the <code>reservedAddrs</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new reserved address.
   */
  create(arg) {
    return this.httpClient
      .url(`/reserved_addrs`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete a reserved address.
   */
  delete(arg) {
    return this.httpClient
      .url(`/reserved_addrs/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get the details of a reserved address.
   */
  get(arg) {
    return this.httpClient
      .url(`/reserved_addrs/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all reserved addresses on this account.
   */
  list() {
    var e_18, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_18_1) {
        e_18 = { error: e_18_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_18) throw e_18.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/reserved_addrs`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_18() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.reservedAddrs;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update the attributes of a reserved address.
   */
  update(arg) {
    return this.httpClient
      .url(`/reserved_addrs/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.ReservedAddrs = ReservedAddrs;
/**
 * Reserved Domains are hostnames that you can listen for traffic on. Domains
 can be used to listen for http, https or tls traffic. You may use a domain
 that you own by creating a CNAME record specified in the returned resource.
 This CNAME record points traffic for that domain to ngrok's edge servers.
 */
class ReservedDomains {
  /** Do not construct this object directly, use the <code>reservedDomains</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new reserved domain.
   */
  create(arg) {
    return this.httpClient
      .url(`/reserved_domains`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete a reserved domain.
   */
  delete(arg) {
    return this.httpClient
      .url(`/reserved_domains/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get the details of a reserved domain.
   */
  get(arg) {
    return this.httpClient
      .url(`/reserved_domains/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all reserved domains on this account.
   */
  list() {
    var e_19, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_19_1) {
        e_19 = { error: e_19_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_19) throw e_19.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/reserved_domains`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_19() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.reservedDomains;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update the attributes of a reserved domain.
   */
  update(arg) {
    return this.httpClient
      .url(`/reserved_domains/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Detach the certificate management policy attached to a reserved domain.
   */
  deleteCertificateManagementPolicy(arg) {
    return this.httpClient
      .url(`/reserved_domains/${arg.id}/certificate_management_policy`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Detach the certificate attached to a reserved domain.
   */
  deleteCertificate(arg) {
    return this.httpClient
      .url(`/reserved_domains/${arg.id}/certificate`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.ReservedDomains = ReservedDomains;
/**
 * An SSH Certificate Authority is a pair of an SSH Certificate and its private
 key that can be used to sign other SSH host and user certificates.
 */
class SSHCertificateAuthorities {
  /** Do not construct this object directly, use the <code>sshCertificateAuthorities</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new SSH Certificate Authority
   */
  create(arg) {
    return this.httpClient
      .url(`/ssh_certificate_authorities`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete an SSH Certificate Authority
   */
  delete(arg) {
    return this.httpClient
      .url(`/ssh_certificate_authorities/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get detailed information about an SSH Certficate Authority
   */
  get(arg) {
    return this.httpClient
      .url(`/ssh_certificate_authorities/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all SSH Certificate Authorities on this account
   */
  list() {
    var e_20, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_20_1) {
        e_20 = { error: e_20_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_20) throw e_20.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/ssh_certificate_authorities`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_20() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.sshCertificateAuthorities;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update an SSH Certificate Authority
   */
  update(arg) {
    return this.httpClient
      .url(`/ssh_certificate_authorities/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.SSHCertificateAuthorities = SSHCertificateAuthorities;
/**
 * SSH Credentials are SSH public keys that can be used to start SSH tunnels
 via the ngrok SSH tunnel gateway.
 */
class SSHCredentials {
  /** Do not construct this object directly, use the <code>sshCredentials</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new ssh_credential from an uploaded public SSH key. This ssh credential can be used to start new tunnels via ngrok's SSH gateway.
   */
  create(arg) {
    return this.httpClient
      .url(`/ssh_credentials`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete an ssh_credential by ID
   */
  delete(arg) {
    return this.httpClient
      .url(`/ssh_credentials/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get detailed information about an ssh_credential
   */
  get(arg) {
    return this.httpClient
      .url(`/ssh_credentials/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all ssh credentials on this account
   */
  list() {
    var e_21, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_21_1) {
        e_21 = { error: e_21_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_21) throw e_21.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/ssh_credentials`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_21() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.sshCredentials;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update attributes of an ssh_credential by ID
   */
  update(arg) {
    return this.httpClient
      .url(`/ssh_credentials/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.SSHCredentials = SSHCredentials;
/**
 * SSH Host Certificates along with the corresponding private key allows an SSH
 server to assert its authenticity to connecting SSH clients who trust the
 SSH Certificate Authority that was used to sign the certificate.
 */
class SSHHostCertificates {
  /** Do not construct this object directly, use the <code>sshHostCertificates</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new SSH Host Certificate
   */
  create(arg) {
    return this.httpClient
      .url(`/ssh_host_certificates`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete an SSH Host Certificate
   */
  delete(arg) {
    return this.httpClient
      .url(`/ssh_host_certificates/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get detailed information about an SSH Host Certficate
   */
  get(arg) {
    return this.httpClient
      .url(`/ssh_host_certificates/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all SSH Host Certificates issued on this account
   */
  list() {
    var e_22, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_22_1) {
        e_22 = { error: e_22_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_22) throw e_22.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/ssh_host_certificates`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_22() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.sshHostCertificates;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update an SSH Host Certificate
   */
  update(arg) {
    return this.httpClient
      .url(`/ssh_host_certificates/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.SSHHostCertificates = SSHHostCertificates;
/**
 * SSH User Certificates are presented by SSH clients when connecting to an SSH
 server to authenticate their connection. The SSH server must trust the SSH
 Certificate Authority used to sign the certificate.
 */
class SSHUserCertificates {
  /** Do not construct this object directly, use the <code>sshUserCertificates</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Create a new SSH User Certificate
   */
  create(arg) {
    return this.httpClient
      .url(`/ssh_user_certificates`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete an SSH User Certificate
   */
  delete(arg) {
    return this.httpClient
      .url(`/ssh_user_certificates/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get detailed information about an SSH User Certficate
   */
  get(arg) {
    return this.httpClient
      .url(`/ssh_user_certificates/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all SSH User Certificates issued on this account
   */
  list() {
    var e_23, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_23_1) {
        e_23 = { error: e_23_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_23) throw e_23.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/ssh_user_certificates`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_23() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.sshUserCertificates;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update an SSH User Certificate
   */
  update(arg) {
    return this.httpClient
      .url(`/ssh_user_certificates/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.SSHUserCertificates = SSHUserCertificates;
/**
 * TLS Certificates are pairs of x509 certificates and their matching private
 key that can be used to terminate TLS traffic. TLS certificates are unused
 until they are attached to a Domain. TLS Certificates may also be
 provisioned by ngrok automatically for domains on which you have enabled
 automated certificate provisioning.
 */
class TLSCertificates {
  /** Do not construct this object directly, use the <code>tlsCertificates</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * Upload a new TLS certificate
   */
  create(arg) {
    return this.httpClient
      .url(`/tls_certificates`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Delete a TLS certificate
   */
  delete(arg) {
    return this.httpClient
      .url(`/tls_certificates/${arg.id}`)
      .delete()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Get detailed information about a TLS certificate
   */
  get(arg) {
    return this.httpClient
      .url(`/tls_certificates/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * List all TLS certificates on this account
   */
  list() {
    var e_24, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_24_1) {
        e_24 = { error: e_24_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_24) throw e_24.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/tls_certificates`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_24() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.tlsCertificates;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Update attributes of a TLS Certificate by ID
   */
  update(arg) {
    return this.httpClient
      .url(`/tls_certificates/${arg.id}`)
      .patch(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.TLSCertificates = TLSCertificates;
/**
 * Tunnel Sessions represent instances of ngrok agents or SSH reverse tunnel
 sessions that are running and connected to the ngrok service. Each tunnel
 session can include one or more Tunnels.
 */
class TunnelSessions {
  /** Do not construct this object directly, use the <code>tunnelSessions</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * List all online tunnel sessions running on this account.
   */
  list() {
    var e_25, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_25_1) {
        e_25 = { error: e_25_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_25) throw e_25.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/tunnel_sessions`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_25() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.tunnelSessions;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Get the detailed status of a tunnel session by ID
   */
  get(arg) {
    return this.httpClient
      .url(`/tunnel_sessions/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Issues a command instructing the ngrok agent to restart. The agent restarts itself by calling exec() on platforms that support it. This operation is notably not supported on Windows. When an agent restarts, it reconnects with a new tunnel session ID.
   */
  restart(arg) {
    return this.httpClient
      .url(`/tunnel_sessions/${arg.id}/restart`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Issues a command instructing the ngrok agent that started this tunnel session to exit.
   */
  stop(arg) {
    return this.httpClient
      .url(`/tunnel_sessions/${arg.id}/stop`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
  /**
   * Issues a command instructing the ngrok agent to update itself to the latest version. After this call completes successfully, the ngrok agent will be in the update process. A caller should wait some amount of time to allow the update to complete (at least 10 seconds) before making a call to the Restart endpoint to request that the agent restart itself to start using the new code. This call will never update an ngrok agent to a new major version which could cause breaking compatibility issues. If you wish to update to a new major version, that must be done manually. Still, please be aware that updating your ngrok agent could break your integration. This call will fail in any of the following circumstances: there is no update available the ngrok agent's configuration disabled update checks the agent is currently in process of updating the agent has already successfully updated but has not yet been restarted
   */
  update(arg) {
    return this.httpClient
      .url(`/tunnel_sessions/${arg.id}/update`)
      .post(util.serializeArgument(arg))
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.TunnelSessions = TunnelSessions;
/**
 * Tunnels provide endpoints to access services exposed by a running ngrok
 agent tunnel session or an SSH reverse tunnel session.
 */
class Tunnels {
  /** Do not construct this object directly, use the <code>tunnels</code> property of an <code>Ngrok</code> client object instead. */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  /**
   * List all online tunnels currently running on the account.
   */
  list() {
    var e_26, _a;
    return __awaiter(this, void 0, void 0, function* () {
      const array = [];
      try {
        for (
          var _b = __asyncValues(this._asyncList()), _c;
          (_c = yield _b.next()), !_c.done;

        ) {
          let item = _c.value;
          array.push(item);
        }
      } catch (e_26_1) {
        e_26 = { error: e_26_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        } finally {
          if (e_26) throw e_26.error;
        }
      }
      return array;
    });
  }
  _pagedList(arg) {
    return this.httpClient
      .url(`/tunnels`)
      .query(arg)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(util.onFulfilled, util.onRejected);
  }
  _asyncList() {
    return __asyncGenerator(this, arguments, function* _asyncList_26() {
      const limit = '100';
      let nextPage = 'initial loop';
      let page = { limit: limit };
      while (nextPage) {
        const pagedList = yield __await(this._pagedList(page));
        nextPage = pagedList.nextPageUri;
        const items = pagedList.tunnels;
        if (nextPage) {
          page = {
            beforeId: items[items.length - 1].id,
            limit: limit,
          };
        }
        for (let item of items) {
          yield yield __await(item);
        }
      }
    });
  }
  /**
   * Get the status of a tunnel by ID
   */
  get(arg) {
    return this.httpClient
      .url(`/tunnels/${arg.id}`)
      .get()
      .json(payload => util.deserializeResult(payload))
      .then(f => f, util.onRejected);
  }
}
exports.Tunnels = Tunnels;
//# sourceMappingURL=services.js.map
