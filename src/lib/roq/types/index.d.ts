/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model audit
 *
 */
export type audit = $Result.DefaultSelection<Prisma.$auditPayload>;
/**
 * Model audit_item
 *
 */
export type audit_item = $Result.DefaultSelection<Prisma.$audit_itemPayload>;
/**
 * Model audit_log
 *
 */
export type audit_log = $Result.DefaultSelection<Prisma.$audit_logPayload>;
/**
 * Model audit_result
 *
 */
export type audit_result = $Result.DefaultSelection<Prisma.$audit_resultPayload>;
/**
 * Model audit_status
 *
 */
export type audit_status = $Result.DefaultSelection<Prisma.$audit_statusPayload>;
/**
 * Model audit_type
 *
 */
export type audit_type = $Result.DefaultSelection<Prisma.$audit_typePayload>;
/**
 * Model manager
 *
 */
export type manager = $Result.DefaultSelection<Prisma.$managerPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model staff_department
 *
 */
export type staff_department = $Result.DefaultSelection<Prisma.$staff_departmentPayload>;
/**
 * Model staff_member
 *
 */
export type staff_member = $Result.DefaultSelection<Prisma.$staff_memberPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model user_role
 *
 */
export type user_role = $Result.DefaultSelection<Prisma.$user_rolePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Audits
 * const audits = await prisma.audit.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Audits
   * const audits = await prisma.audit.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.audit`: Exposes CRUD operations for the **audit** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Audits
   * const audits = await prisma.audit.findMany()
   * ```
   */
  get audit(): Prisma.auditDelegate<ExtArgs>;

  /**
   * `prisma.audit_item`: Exposes CRUD operations for the **audit_item** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Audit_items
   * const audit_items = await prisma.audit_item.findMany()
   * ```
   */
  get audit_item(): Prisma.audit_itemDelegate<ExtArgs>;

  /**
   * `prisma.audit_log`: Exposes CRUD operations for the **audit_log** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Audit_logs
   * const audit_logs = await prisma.audit_log.findMany()
   * ```
   */
  get audit_log(): Prisma.audit_logDelegate<ExtArgs>;

  /**
   * `prisma.audit_result`: Exposes CRUD operations for the **audit_result** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Audit_results
   * const audit_results = await prisma.audit_result.findMany()
   * ```
   */
  get audit_result(): Prisma.audit_resultDelegate<ExtArgs>;

  /**
   * `prisma.audit_status`: Exposes CRUD operations for the **audit_status** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Audit_statuses
   * const audit_statuses = await prisma.audit_status.findMany()
   * ```
   */
  get audit_status(): Prisma.audit_statusDelegate<ExtArgs>;

  /**
   * `prisma.audit_type`: Exposes CRUD operations for the **audit_type** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Audit_types
   * const audit_types = await prisma.audit_type.findMany()
   * ```
   */
  get audit_type(): Prisma.audit_typeDelegate<ExtArgs>;

  /**
   * `prisma.manager`: Exposes CRUD operations for the **manager** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Managers
   * const managers = await prisma.manager.findMany()
   * ```
   */
  get manager(): Prisma.managerDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.staff_department`: Exposes CRUD operations for the **staff_department** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Staff_departments
   * const staff_departments = await prisma.staff_department.findMany()
   * ```
   */
  get staff_department(): Prisma.staff_departmentDelegate<ExtArgs>;

  /**
   * `prisma.staff_member`: Exposes CRUD operations for the **staff_member** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Staff_members
   * const staff_members = await prisma.staff_member.findMany()
   * ```
   */
  get staff_member(): Prisma.staff_memberDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.user_role`: Exposes CRUD operations for the **user_role** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more User_roles
   * const user_roles = await prisma.user_role.findMany()
   * ```
   */
  get user_role(): Prisma.user_roleDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    audit: 'audit';
    audit_item: 'audit_item';
    audit_log: 'audit_log';
    audit_result: 'audit_result';
    audit_status: 'audit_status';
    audit_type: 'audit_type';
    manager: 'manager';
    organization: 'organization';
    staff_department: 'staff_department';
    staff_member: 'staff_member';
    user: 'user';
    user_role: 'user_role';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps:
        | 'audit'
        | 'audit_item'
        | 'audit_log'
        | 'audit_result'
        | 'audit_status'
        | 'audit_type'
        | 'manager'
        | 'organization'
        | 'staff_department'
        | 'staff_member'
        | 'user'
        | 'user_role';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      audit: {
        payload: Prisma.$auditPayload<ExtArgs>;
        fields: Prisma.auditFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.auditFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$auditPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.auditFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$auditPayload>;
          };
          findFirst: {
            args: Prisma.auditFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$auditPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.auditFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$auditPayload>;
          };
          findMany: {
            args: Prisma.auditFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$auditPayload>[];
          };
          create: {
            args: Prisma.auditCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$auditPayload>;
          };
          createMany: {
            args: Prisma.auditCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.auditDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$auditPayload>;
          };
          update: {
            args: Prisma.auditUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$auditPayload>;
          };
          deleteMany: {
            args: Prisma.auditDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.auditUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.auditUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$auditPayload>;
          };
          aggregate: {
            args: Prisma.AuditAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAudit>;
          };
          groupBy: {
            args: Prisma.auditGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AuditGroupByOutputType>[];
          };
          count: {
            args: Prisma.auditCountArgs<ExtArgs>;
            result: $Utils.Optional<AuditCountAggregateOutputType> | number;
          };
        };
      };
      audit_item: {
        payload: Prisma.$audit_itemPayload<ExtArgs>;
        fields: Prisma.audit_itemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.audit_itemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_itemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.audit_itemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_itemPayload>;
          };
          findFirst: {
            args: Prisma.audit_itemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_itemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.audit_itemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_itemPayload>;
          };
          findMany: {
            args: Prisma.audit_itemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_itemPayload>[];
          };
          create: {
            args: Prisma.audit_itemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_itemPayload>;
          };
          createMany: {
            args: Prisma.audit_itemCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.audit_itemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_itemPayload>;
          };
          update: {
            args: Prisma.audit_itemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_itemPayload>;
          };
          deleteMany: {
            args: Prisma.audit_itemDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.audit_itemUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.audit_itemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_itemPayload>;
          };
          aggregate: {
            args: Prisma.Audit_itemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAudit_item>;
          };
          groupBy: {
            args: Prisma.audit_itemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Audit_itemGroupByOutputType>[];
          };
          count: {
            args: Prisma.audit_itemCountArgs<ExtArgs>;
            result: $Utils.Optional<Audit_itemCountAggregateOutputType> | number;
          };
        };
      };
      audit_log: {
        payload: Prisma.$audit_logPayload<ExtArgs>;
        fields: Prisma.audit_logFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.audit_logFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.audit_logFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>;
          };
          findFirst: {
            args: Prisma.audit_logFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.audit_logFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>;
          };
          findMany: {
            args: Prisma.audit_logFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>[];
          };
          create: {
            args: Prisma.audit_logCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>;
          };
          createMany: {
            args: Prisma.audit_logCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.audit_logDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>;
          };
          update: {
            args: Prisma.audit_logUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>;
          };
          deleteMany: {
            args: Prisma.audit_logDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.audit_logUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.audit_logUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>;
          };
          aggregate: {
            args: Prisma.Audit_logAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAudit_log>;
          };
          groupBy: {
            args: Prisma.audit_logGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Audit_logGroupByOutputType>[];
          };
          count: {
            args: Prisma.audit_logCountArgs<ExtArgs>;
            result: $Utils.Optional<Audit_logCountAggregateOutputType> | number;
          };
        };
      };
      audit_result: {
        payload: Prisma.$audit_resultPayload<ExtArgs>;
        fields: Prisma.audit_resultFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.audit_resultFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_resultPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.audit_resultFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_resultPayload>;
          };
          findFirst: {
            args: Prisma.audit_resultFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_resultPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.audit_resultFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_resultPayload>;
          };
          findMany: {
            args: Prisma.audit_resultFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_resultPayload>[];
          };
          create: {
            args: Prisma.audit_resultCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_resultPayload>;
          };
          createMany: {
            args: Prisma.audit_resultCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.audit_resultDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_resultPayload>;
          };
          update: {
            args: Prisma.audit_resultUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_resultPayload>;
          };
          deleteMany: {
            args: Prisma.audit_resultDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.audit_resultUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.audit_resultUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_resultPayload>;
          };
          aggregate: {
            args: Prisma.Audit_resultAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAudit_result>;
          };
          groupBy: {
            args: Prisma.audit_resultGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Audit_resultGroupByOutputType>[];
          };
          count: {
            args: Prisma.audit_resultCountArgs<ExtArgs>;
            result: $Utils.Optional<Audit_resultCountAggregateOutputType> | number;
          };
        };
      };
      audit_status: {
        payload: Prisma.$audit_statusPayload<ExtArgs>;
        fields: Prisma.audit_statusFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.audit_statusFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_statusPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.audit_statusFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_statusPayload>;
          };
          findFirst: {
            args: Prisma.audit_statusFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_statusPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.audit_statusFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_statusPayload>;
          };
          findMany: {
            args: Prisma.audit_statusFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_statusPayload>[];
          };
          create: {
            args: Prisma.audit_statusCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_statusPayload>;
          };
          createMany: {
            args: Prisma.audit_statusCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.audit_statusDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_statusPayload>;
          };
          update: {
            args: Prisma.audit_statusUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_statusPayload>;
          };
          deleteMany: {
            args: Prisma.audit_statusDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.audit_statusUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.audit_statusUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_statusPayload>;
          };
          aggregate: {
            args: Prisma.Audit_statusAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAudit_status>;
          };
          groupBy: {
            args: Prisma.audit_statusGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Audit_statusGroupByOutputType>[];
          };
          count: {
            args: Prisma.audit_statusCountArgs<ExtArgs>;
            result: $Utils.Optional<Audit_statusCountAggregateOutputType> | number;
          };
        };
      };
      audit_type: {
        payload: Prisma.$audit_typePayload<ExtArgs>;
        fields: Prisma.audit_typeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.audit_typeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_typePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.audit_typeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_typePayload>;
          };
          findFirst: {
            args: Prisma.audit_typeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_typePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.audit_typeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_typePayload>;
          };
          findMany: {
            args: Prisma.audit_typeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_typePayload>[];
          };
          create: {
            args: Prisma.audit_typeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_typePayload>;
          };
          createMany: {
            args: Prisma.audit_typeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.audit_typeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_typePayload>;
          };
          update: {
            args: Prisma.audit_typeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_typePayload>;
          };
          deleteMany: {
            args: Prisma.audit_typeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.audit_typeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.audit_typeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_typePayload>;
          };
          aggregate: {
            args: Prisma.Audit_typeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAudit_type>;
          };
          groupBy: {
            args: Prisma.audit_typeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Audit_typeGroupByOutputType>[];
          };
          count: {
            args: Prisma.audit_typeCountArgs<ExtArgs>;
            result: $Utils.Optional<Audit_typeCountAggregateOutputType> | number;
          };
        };
      };
      manager: {
        payload: Prisma.$managerPayload<ExtArgs>;
        fields: Prisma.managerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.managerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$managerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.managerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$managerPayload>;
          };
          findFirst: {
            args: Prisma.managerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$managerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.managerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$managerPayload>;
          };
          findMany: {
            args: Prisma.managerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$managerPayload>[];
          };
          create: {
            args: Prisma.managerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$managerPayload>;
          };
          createMany: {
            args: Prisma.managerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.managerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$managerPayload>;
          };
          update: {
            args: Prisma.managerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$managerPayload>;
          };
          deleteMany: {
            args: Prisma.managerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.managerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.managerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$managerPayload>;
          };
          aggregate: {
            args: Prisma.ManagerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateManager>;
          };
          groupBy: {
            args: Prisma.managerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ManagerGroupByOutputType>[];
          };
          count: {
            args: Prisma.managerCountArgs<ExtArgs>;
            result: $Utils.Optional<ManagerCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      staff_department: {
        payload: Prisma.$staff_departmentPayload<ExtArgs>;
        fields: Prisma.staff_departmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.staff_departmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_departmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.staff_departmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_departmentPayload>;
          };
          findFirst: {
            args: Prisma.staff_departmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_departmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.staff_departmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_departmentPayload>;
          };
          findMany: {
            args: Prisma.staff_departmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_departmentPayload>[];
          };
          create: {
            args: Prisma.staff_departmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_departmentPayload>;
          };
          createMany: {
            args: Prisma.staff_departmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.staff_departmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_departmentPayload>;
          };
          update: {
            args: Prisma.staff_departmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_departmentPayload>;
          };
          deleteMany: {
            args: Prisma.staff_departmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.staff_departmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.staff_departmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_departmentPayload>;
          };
          aggregate: {
            args: Prisma.Staff_departmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStaff_department>;
          };
          groupBy: {
            args: Prisma.staff_departmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Staff_departmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.staff_departmentCountArgs<ExtArgs>;
            result: $Utils.Optional<Staff_departmentCountAggregateOutputType> | number;
          };
        };
      };
      staff_member: {
        payload: Prisma.$staff_memberPayload<ExtArgs>;
        fields: Prisma.staff_memberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.staff_memberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.staff_memberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload>;
          };
          findFirst: {
            args: Prisma.staff_memberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.staff_memberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload>;
          };
          findMany: {
            args: Prisma.staff_memberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload>[];
          };
          create: {
            args: Prisma.staff_memberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload>;
          };
          createMany: {
            args: Prisma.staff_memberCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.staff_memberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload>;
          };
          update: {
            args: Prisma.staff_memberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload>;
          };
          deleteMany: {
            args: Prisma.staff_memberDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.staff_memberUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.staff_memberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staff_memberPayload>;
          };
          aggregate: {
            args: Prisma.Staff_memberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStaff_member>;
          };
          groupBy: {
            args: Prisma.staff_memberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Staff_memberGroupByOutputType>[];
          };
          count: {
            args: Prisma.staff_memberCountArgs<ExtArgs>;
            result: $Utils.Optional<Staff_memberCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      user_role: {
        payload: Prisma.$user_rolePayload<ExtArgs>;
        fields: Prisma.user_roleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.user_roleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.user_roleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          findFirst: {
            args: Prisma.user_roleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.user_roleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          findMany: {
            args: Prisma.user_roleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[];
          };
          create: {
            args: Prisma.user_roleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          createMany: {
            args: Prisma.user_roleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.user_roleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          update: {
            args: Prisma.user_roleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          deleteMany: {
            args: Prisma.user_roleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.user_roleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.user_roleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          aggregate: {
            args: Prisma.User_roleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser_role>;
          };
          groupBy: {
            args: Prisma.user_roleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<User_roleGroupByOutputType>[];
          };
          count: {
            args: Prisma.user_roleCountArgs<ExtArgs>;
            result: $Utils.Optional<User_roleCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type AuditCountOutputType
   */

  export type AuditCountOutputType = {
    audit_item: number;
  };

  export type AuditCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_item?: boolean | AuditCountOutputTypeCountAudit_itemArgs;
  };

  // Custom InputTypes

  /**
   * AuditCountOutputType without action
   */
  export type AuditCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditCountOutputType
     */
    select?: AuditCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AuditCountOutputType without action
   */
  export type AuditCountOutputTypeCountAudit_itemArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: audit_itemWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    audit: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | OrganizationCountOutputTypeCountAuditArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAuditArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: auditWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    audit: number;
    manager: number;
    organization: number;
    staff_member: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | UserCountOutputTypeCountAuditArgs;
    manager?: boolean | UserCountOutputTypeCountManagerArgs;
    organization?: boolean | UserCountOutputTypeCountOrganizationArgs;
    staff_member?: boolean | UserCountOutputTypeCountStaff_memberArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManagerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: managerWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: organizationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStaff_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: staff_memberWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model audit
   */

  export type AggregateAudit = {
    _count: AuditCountAggregateOutputType | null;
    _min: AuditMinAggregateOutputType | null;
    _max: AuditMaxAggregateOutputType | null;
  };

  export type AuditMinAggregateOutputType = {
    id: string | null;
    audit_date: Date | null;
    user_id: string | null;
    organization_id: string | null;
    audit_summary: string | null;
    audit_audit_result: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AuditMaxAggregateOutputType = {
    id: string | null;
    audit_date: Date | null;
    user_id: string | null;
    organization_id: string | null;
    audit_summary: string | null;
    audit_audit_result: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AuditCountAggregateOutputType = {
    id: number;
    audit_date: number;
    user_id: number;
    organization_id: number;
    audit_summary: number;
    audit_audit_result: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AuditMinAggregateInputType = {
    id?: true;
    audit_date?: true;
    user_id?: true;
    organization_id?: true;
    audit_summary?: true;
    audit_audit_result?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AuditMaxAggregateInputType = {
    id?: true;
    audit_date?: true;
    user_id?: true;
    organization_id?: true;
    audit_summary?: true;
    audit_audit_result?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AuditCountAggregateInputType = {
    id?: true;
    audit_date?: true;
    user_id?: true;
    organization_id?: true;
    audit_summary?: true;
    audit_audit_result?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AuditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit to aggregate.
     */
    where?: auditWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: auditWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned audits
     **/
    _count?: true | AuditCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AuditMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AuditMaxAggregateInputType;
  };

  export type GetAuditAggregateType<T extends AuditAggregateArgs> = {
    [P in keyof T & keyof AggregateAudit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit[P]>
      : GetScalarType<T[P], AggregateAudit[P]>;
  };

  export type auditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditWhereInput;
    orderBy?: auditOrderByWithAggregationInput | auditOrderByWithAggregationInput[];
    by: AuditScalarFieldEnum[] | AuditScalarFieldEnum;
    having?: auditScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditCountAggregateInputType | true;
    _min?: AuditMinAggregateInputType;
    _max?: AuditMaxAggregateInputType;
  };

  export type AuditGroupByOutputType = {
    id: string;
    audit_date: Date;
    user_id: string;
    organization_id: string;
    audit_summary: string | null;
    audit_audit_result: string | null;
    created_at: Date;
    updated_at: Date;
    _count: AuditCountAggregateOutputType | null;
    _min: AuditMinAggregateOutputType | null;
    _max: AuditMaxAggregateOutputType | null;
  };

  type GetAuditGroupByPayload<T extends auditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AuditGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AuditGroupByOutputType[P]>
          : GetScalarType<T[P], AuditGroupByOutputType[P]>;
      }
    >
  >;

  export type auditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      audit_date?: boolean;
      user_id?: boolean;
      organization_id?: boolean;
      audit_summary?: boolean;
      audit_audit_result?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      organization?: boolean | organizationDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      audit_item?: boolean | audit$audit_itemArgs<ExtArgs>;
      _count?: boolean | AuditCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['audit']
  >;

  export type auditSelectScalar = {
    id?: boolean;
    audit_date?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    audit_summary?: boolean;
    audit_audit_result?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type auditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    audit_item?: boolean | audit$audit_itemArgs<ExtArgs>;
    _count?: boolean | AuditCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $auditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'audit';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      audit_item: Prisma.$audit_itemPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        audit_date: Date;
        user_id: string;
        organization_id: string;
        audit_summary: string | null;
        audit_audit_result: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['audit']
    >;
    composites: {};
  };

  type auditGetPayload<S extends boolean | null | undefined | auditDefaultArgs> = $Result.GetResult<
    Prisma.$auditPayload,
    S
  >;

  type auditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    auditFindManyArgs,
    'select' | 'include'
  > & {
    select?: AuditCountAggregateInputType | true;
  };

  export interface auditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit']; meta: { name: 'audit' } };
    /**
     * Find zero or one Audit that matches the filter.
     * @param {auditFindUniqueArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends auditFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, auditFindUniqueArgs<ExtArgs>>,
    ): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Audit that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {auditFindUniqueOrThrowArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends auditFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, auditFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Audit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditFindFirstArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends auditFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, auditFindFirstArgs<ExtArgs>>,
    ): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Audit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditFindFirstOrThrowArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends auditFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, auditFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Audits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audits
     * const audits = await prisma.audit.findMany()
     *
     * // Get first 10 Audits
     * const audits = await prisma.audit.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const auditWithIdOnly = await prisma.audit.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends auditFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, auditFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Audit.
     * @param {auditCreateArgs} args - Arguments to create a Audit.
     * @example
     * // Create one Audit
     * const Audit = await prisma.audit.create({
     *   data: {
     *     // ... data to create a Audit
     *   }
     * })
     *
     **/
    create<T extends auditCreateArgs<ExtArgs>>(
      args: SelectSubset<T, auditCreateArgs<ExtArgs>>,
    ): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Audits.
     *     @param {auditCreateManyArgs} args - Arguments to create many Audits.
     *     @example
     *     // Create many Audits
     *     const audit = await prisma.audit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends auditCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, auditCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Audit.
     * @param {auditDeleteArgs} args - Arguments to delete one Audit.
     * @example
     * // Delete one Audit
     * const Audit = await prisma.audit.delete({
     *   where: {
     *     // ... filter to delete one Audit
     *   }
     * })
     *
     **/
    delete<T extends auditDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, auditDeleteArgs<ExtArgs>>,
    ): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Audit.
     * @param {auditUpdateArgs} args - Arguments to update one Audit.
     * @example
     * // Update one Audit
     * const audit = await prisma.audit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends auditUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, auditUpdateArgs<ExtArgs>>,
    ): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Audits.
     * @param {auditDeleteManyArgs} args - Arguments to filter Audits to delete.
     * @example
     * // Delete a few Audits
     * const { count } = await prisma.audit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends auditDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, auditDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audits
     * const audit = await prisma.audit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends auditUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, auditUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Audit.
     * @param {auditUpsertArgs} args - Arguments to update or create a Audit.
     * @example
     * // Update or create a Audit
     * const audit = await prisma.audit.upsert({
     *   create: {
     *     // ... data to create a Audit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit we want to update
     *   }
     * })
     **/
    upsert<T extends auditUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, auditUpsertArgs<ExtArgs>>,
    ): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditCountArgs} args - Arguments to filter Audits to count.
     * @example
     * // Count the number of Audits
     * const count = await prisma.audit.count({
     *   where: {
     *     // ... the filter for the Audits we want to count
     *   }
     * })
     **/
    count<T extends auditCountArgs>(
      args?: Subset<T, auditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AuditAggregateArgs>(
      args: Subset<T, AuditAggregateArgs>,
    ): Prisma.PrismaPromise<GetAuditAggregateType<T>>;

    /**
     * Group by Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends auditGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auditGroupByArgs['orderBy'] }
        : { orderBy?: auditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, auditGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the audit model
     */
    readonly fields: auditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auditClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    audit_item<T extends audit$audit_itemArgs<ExtArgs> = {}>(
      args?: Subset<T, audit$audit_itemArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_itemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the audit model
   */
  interface auditFieldRefs {
    readonly id: FieldRef<'audit', 'String'>;
    readonly audit_date: FieldRef<'audit', 'DateTime'>;
    readonly user_id: FieldRef<'audit', 'String'>;
    readonly organization_id: FieldRef<'audit', 'String'>;
    readonly audit_summary: FieldRef<'audit', 'String'>;
    readonly audit_audit_result: FieldRef<'audit', 'String'>;
    readonly created_at: FieldRef<'audit', 'DateTime'>;
    readonly updated_at: FieldRef<'audit', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * audit findUnique
   */
  export type auditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auditInclude<ExtArgs> | null;
    /**
     * Filter, which audit to fetch.
     */
    where: auditWhereUniqueInput;
  };

  /**
   * audit findUniqueOrThrow
   */
  export type auditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auditInclude<ExtArgs> | null;
    /**
     * Filter, which audit to fetch.
     */
    where: auditWhereUniqueInput;
  };

  /**
   * audit findFirst
   */
  export type auditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auditInclude<ExtArgs> | null;
    /**
     * Filter, which audit to fetch.
     */
    where?: auditWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for audits.
     */
    cursor?: auditWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of audits.
     */
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[];
  };

  /**
   * audit findFirstOrThrow
   */
  export type auditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auditInclude<ExtArgs> | null;
    /**
     * Filter, which audit to fetch.
     */
    where?: auditWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for audits.
     */
    cursor?: auditWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of audits.
     */
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[];
  };

  /**
   * audit findMany
   */
  export type auditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auditInclude<ExtArgs> | null;
    /**
     * Filter, which audits to fetch.
     */
    where?: auditWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing audits.
     */
    cursor?: auditWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audits.
     */
    skip?: number;
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[];
  };

  /**
   * audit create
   */
  export type auditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auditInclude<ExtArgs> | null;
    /**
     * The data needed to create a audit.
     */
    data: XOR<auditCreateInput, auditUncheckedCreateInput>;
  };

  /**
   * audit createMany
   */
  export type auditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audits.
     */
    data: auditCreateManyInput | auditCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * audit update
   */
  export type auditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auditInclude<ExtArgs> | null;
    /**
     * The data needed to update a audit.
     */
    data: XOR<auditUpdateInput, auditUncheckedUpdateInput>;
    /**
     * Choose, which audit to update.
     */
    where: auditWhereUniqueInput;
  };

  /**
   * audit updateMany
   */
  export type auditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audits.
     */
    data: XOR<auditUpdateManyMutationInput, auditUncheckedUpdateManyInput>;
    /**
     * Filter which audits to update
     */
    where?: auditWhereInput;
  };

  /**
   * audit upsert
   */
  export type auditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auditInclude<ExtArgs> | null;
    /**
     * The filter to search for the audit to update in case it exists.
     */
    where: auditWhereUniqueInput;
    /**
     * In case the audit found by the `where` argument doesn't exist, create a new audit with this data.
     */
    create: XOR<auditCreateInput, auditUncheckedCreateInput>;
    /**
     * In case the audit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auditUpdateInput, auditUncheckedUpdateInput>;
  };

  /**
   * audit delete
   */
  export type auditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auditInclude<ExtArgs> | null;
    /**
     * Filter which audit to delete.
     */
    where: auditWhereUniqueInput;
  };

  /**
   * audit deleteMany
   */
  export type auditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audits to delete
     */
    where?: auditWhereInput;
  };

  /**
   * audit.audit_item
   */
  export type audit$audit_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_item
     */
    select?: audit_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_itemInclude<ExtArgs> | null;
    where?: audit_itemWhereInput;
    orderBy?: audit_itemOrderByWithRelationInput | audit_itemOrderByWithRelationInput[];
    cursor?: audit_itemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Audit_itemScalarFieldEnum | Audit_itemScalarFieldEnum[];
  };

  /**
   * audit without action
   */
  export type auditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auditInclude<ExtArgs> | null;
  };

  /**
   * Model audit_item
   */

  export type AggregateAudit_item = {
    _count: Audit_itemCountAggregateOutputType | null;
    _min: Audit_itemMinAggregateOutputType | null;
    _max: Audit_itemMaxAggregateOutputType | null;
  };

  export type Audit_itemMinAggregateOutputType = {
    id: string | null;
    audit_id: string | null;
    item_name: string | null;
    item_status: string | null;
    item_description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Audit_itemMaxAggregateOutputType = {
    id: string | null;
    audit_id: string | null;
    item_name: string | null;
    item_status: string | null;
    item_description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Audit_itemCountAggregateOutputType = {
    id: number;
    audit_id: number;
    item_name: number;
    item_status: number;
    item_description: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Audit_itemMinAggregateInputType = {
    id?: true;
    audit_id?: true;
    item_name?: true;
    item_status?: true;
    item_description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Audit_itemMaxAggregateInputType = {
    id?: true;
    audit_id?: true;
    item_name?: true;
    item_status?: true;
    item_description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Audit_itemCountAggregateInputType = {
    id?: true;
    audit_id?: true;
    item_name?: true;
    item_status?: true;
    item_description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Audit_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_item to aggregate.
     */
    where?: audit_itemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_items to fetch.
     */
    orderBy?: audit_itemOrderByWithRelationInput | audit_itemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: audit_itemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned audit_items
     **/
    _count?: true | Audit_itemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Audit_itemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Audit_itemMaxAggregateInputType;
  };

  export type GetAudit_itemAggregateType<T extends Audit_itemAggregateArgs> = {
    [P in keyof T & keyof AggregateAudit_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_item[P]>
      : GetScalarType<T[P], AggregateAudit_item[P]>;
  };

  export type audit_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_itemWhereInput;
    orderBy?: audit_itemOrderByWithAggregationInput | audit_itemOrderByWithAggregationInput[];
    by: Audit_itemScalarFieldEnum[] | Audit_itemScalarFieldEnum;
    having?: audit_itemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Audit_itemCountAggregateInputType | true;
    _min?: Audit_itemMinAggregateInputType;
    _max?: Audit_itemMaxAggregateInputType;
  };

  export type Audit_itemGroupByOutputType = {
    id: string;
    audit_id: string;
    item_name: string;
    item_status: string;
    item_description: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Audit_itemCountAggregateOutputType | null;
    _min: Audit_itemMinAggregateOutputType | null;
    _max: Audit_itemMaxAggregateOutputType | null;
  };

  type GetAudit_itemGroupByPayload<T extends audit_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_itemGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Audit_itemGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Audit_itemGroupByOutputType[P]>
          : GetScalarType<T[P], Audit_itemGroupByOutputType[P]>;
      }
    >
  >;

  export type audit_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        audit_id?: boolean;
        item_name?: boolean;
        item_status?: boolean;
        item_description?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        audit?: boolean | auditDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['audit_item']
    >;

  export type audit_itemSelectScalar = {
    id?: boolean;
    audit_id?: boolean;
    item_name?: boolean;
    item_status?: boolean;
    item_description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type audit_itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | auditDefaultArgs<ExtArgs>;
  };

  export type $audit_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'audit_item';
    objects: {
      audit: Prisma.$auditPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        audit_id: string;
        item_name: string;
        item_status: string;
        item_description: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['audit_item']
    >;
    composites: {};
  };

  type audit_itemGetPayload<S extends boolean | null | undefined | audit_itemDefaultArgs> = $Result.GetResult<
    Prisma.$audit_itemPayload,
    S
  >;

  type audit_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    audit_itemFindManyArgs,
    'select' | 'include'
  > & {
    select?: Audit_itemCountAggregateInputType | true;
  };

  export interface audit_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_item']; meta: { name: 'audit_item' } };
    /**
     * Find zero or one Audit_item that matches the filter.
     * @param {audit_itemFindUniqueArgs} args - Arguments to find a Audit_item
     * @example
     * // Get one Audit_item
     * const audit_item = await prisma.audit_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends audit_itemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, audit_itemFindUniqueArgs<ExtArgs>>,
    ): Prisma__audit_itemClient<
      $Result.GetResult<Prisma.$audit_itemPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Audit_item that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {audit_itemFindUniqueOrThrowArgs} args - Arguments to find a Audit_item
     * @example
     * // Get one Audit_item
     * const audit_item = await prisma.audit_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends audit_itemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_itemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__audit_itemClient<
      $Result.GetResult<Prisma.$audit_itemPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Audit_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_itemFindFirstArgs} args - Arguments to find a Audit_item
     * @example
     * // Get one Audit_item
     * const audit_item = await prisma.audit_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends audit_itemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_itemFindFirstArgs<ExtArgs>>,
    ): Prisma__audit_itemClient<
      $Result.GetResult<Prisma.$audit_itemPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Audit_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_itemFindFirstOrThrowArgs} args - Arguments to find a Audit_item
     * @example
     * // Get one Audit_item
     * const audit_item = await prisma.audit_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends audit_itemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_itemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__audit_itemClient<
      $Result.GetResult<Prisma.$audit_itemPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Audit_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_itemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_items
     * const audit_items = await prisma.audit_item.findMany()
     *
     * // Get first 10 Audit_items
     * const audit_items = await prisma.audit_item.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const audit_itemWithIdOnly = await prisma.audit_item.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends audit_itemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_itemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_itemPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Audit_item.
     * @param {audit_itemCreateArgs} args - Arguments to create a Audit_item.
     * @example
     * // Create one Audit_item
     * const Audit_item = await prisma.audit_item.create({
     *   data: {
     *     // ... data to create a Audit_item
     *   }
     * })
     *
     **/
    create<T extends audit_itemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, audit_itemCreateArgs<ExtArgs>>,
    ): Prisma__audit_itemClient<$Result.GetResult<Prisma.$audit_itemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Audit_items.
     *     @param {audit_itemCreateManyArgs} args - Arguments to create many Audit_items.
     *     @example
     *     // Create many Audit_items
     *     const audit_item = await prisma.audit_item.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends audit_itemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_itemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Audit_item.
     * @param {audit_itemDeleteArgs} args - Arguments to delete one Audit_item.
     * @example
     * // Delete one Audit_item
     * const Audit_item = await prisma.audit_item.delete({
     *   where: {
     *     // ... filter to delete one Audit_item
     *   }
     * })
     *
     **/
    delete<T extends audit_itemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, audit_itemDeleteArgs<ExtArgs>>,
    ): Prisma__audit_itemClient<$Result.GetResult<Prisma.$audit_itemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Audit_item.
     * @param {audit_itemUpdateArgs} args - Arguments to update one Audit_item.
     * @example
     * // Update one Audit_item
     * const audit_item = await prisma.audit_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends audit_itemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, audit_itemUpdateArgs<ExtArgs>>,
    ): Prisma__audit_itemClient<$Result.GetResult<Prisma.$audit_itemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Audit_items.
     * @param {audit_itemDeleteManyArgs} args - Arguments to filter Audit_items to delete.
     * @example
     * // Delete a few Audit_items
     * const { count } = await prisma.audit_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends audit_itemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_itemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Audit_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_items
     * const audit_item = await prisma.audit_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends audit_itemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, audit_itemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Audit_item.
     * @param {audit_itemUpsertArgs} args - Arguments to update or create a Audit_item.
     * @example
     * // Update or create a Audit_item
     * const audit_item = await prisma.audit_item.upsert({
     *   create: {
     *     // ... data to create a Audit_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_item we want to update
     *   }
     * })
     **/
    upsert<T extends audit_itemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, audit_itemUpsertArgs<ExtArgs>>,
    ): Prisma__audit_itemClient<$Result.GetResult<Prisma.$audit_itemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Audit_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_itemCountArgs} args - Arguments to filter Audit_items to count.
     * @example
     * // Count the number of Audit_items
     * const count = await prisma.audit_item.count({
     *   where: {
     *     // ... the filter for the Audit_items we want to count
     *   }
     * })
     **/
    count<T extends audit_itemCountArgs>(
      args?: Subset<T, audit_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_itemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Audit_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Audit_itemAggregateArgs>(
      args: Subset<T, Audit_itemAggregateArgs>,
    ): Prisma.PrismaPromise<GetAudit_itemAggregateType<T>>;

    /**
     * Group by Audit_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends audit_itemGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_itemGroupByArgs['orderBy'] }
        : { orderBy?: audit_itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, audit_itemGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAudit_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the audit_item model
     */
    readonly fields: audit_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_itemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    audit<T extends auditDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, auditDefaultArgs<ExtArgs>>,
    ): Prisma__auditClient<
      $Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the audit_item model
   */
  interface audit_itemFieldRefs {
    readonly id: FieldRef<'audit_item', 'String'>;
    readonly audit_id: FieldRef<'audit_item', 'String'>;
    readonly item_name: FieldRef<'audit_item', 'String'>;
    readonly item_status: FieldRef<'audit_item', 'String'>;
    readonly item_description: FieldRef<'audit_item', 'String'>;
    readonly created_at: FieldRef<'audit_item', 'DateTime'>;
    readonly updated_at: FieldRef<'audit_item', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * audit_item findUnique
   */
  export type audit_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_item
     */
    select?: audit_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_itemInclude<ExtArgs> | null;
    /**
     * Filter, which audit_item to fetch.
     */
    where: audit_itemWhereUniqueInput;
  };

  /**
   * audit_item findUniqueOrThrow
   */
  export type audit_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_item
     */
    select?: audit_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_itemInclude<ExtArgs> | null;
    /**
     * Filter, which audit_item to fetch.
     */
    where: audit_itemWhereUniqueInput;
  };

  /**
   * audit_item findFirst
   */
  export type audit_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_item
     */
    select?: audit_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_itemInclude<ExtArgs> | null;
    /**
     * Filter, which audit_item to fetch.
     */
    where?: audit_itemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_items to fetch.
     */
    orderBy?: audit_itemOrderByWithRelationInput | audit_itemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for audit_items.
     */
    cursor?: audit_itemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of audit_items.
     */
    distinct?: Audit_itemScalarFieldEnum | Audit_itemScalarFieldEnum[];
  };

  /**
   * audit_item findFirstOrThrow
   */
  export type audit_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_item
     */
    select?: audit_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_itemInclude<ExtArgs> | null;
    /**
     * Filter, which audit_item to fetch.
     */
    where?: audit_itemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_items to fetch.
     */
    orderBy?: audit_itemOrderByWithRelationInput | audit_itemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for audit_items.
     */
    cursor?: audit_itemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of audit_items.
     */
    distinct?: Audit_itemScalarFieldEnum | Audit_itemScalarFieldEnum[];
  };

  /**
   * audit_item findMany
   */
  export type audit_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_item
     */
    select?: audit_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_itemInclude<ExtArgs> | null;
    /**
     * Filter, which audit_items to fetch.
     */
    where?: audit_itemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_items to fetch.
     */
    orderBy?: audit_itemOrderByWithRelationInput | audit_itemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing audit_items.
     */
    cursor?: audit_itemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_items.
     */
    skip?: number;
    distinct?: Audit_itemScalarFieldEnum | Audit_itemScalarFieldEnum[];
  };

  /**
   * audit_item create
   */
  export type audit_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_item
     */
    select?: audit_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_itemInclude<ExtArgs> | null;
    /**
     * The data needed to create a audit_item.
     */
    data: XOR<audit_itemCreateInput, audit_itemUncheckedCreateInput>;
  };

  /**
   * audit_item createMany
   */
  export type audit_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_items.
     */
    data: audit_itemCreateManyInput | audit_itemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * audit_item update
   */
  export type audit_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_item
     */
    select?: audit_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_itemInclude<ExtArgs> | null;
    /**
     * The data needed to update a audit_item.
     */
    data: XOR<audit_itemUpdateInput, audit_itemUncheckedUpdateInput>;
    /**
     * Choose, which audit_item to update.
     */
    where: audit_itemWhereUniqueInput;
  };

  /**
   * audit_item updateMany
   */
  export type audit_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_items.
     */
    data: XOR<audit_itemUpdateManyMutationInput, audit_itemUncheckedUpdateManyInput>;
    /**
     * Filter which audit_items to update
     */
    where?: audit_itemWhereInput;
  };

  /**
   * audit_item upsert
   */
  export type audit_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_item
     */
    select?: audit_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_itemInclude<ExtArgs> | null;
    /**
     * The filter to search for the audit_item to update in case it exists.
     */
    where: audit_itemWhereUniqueInput;
    /**
     * In case the audit_item found by the `where` argument doesn't exist, create a new audit_item with this data.
     */
    create: XOR<audit_itemCreateInput, audit_itemUncheckedCreateInput>;
    /**
     * In case the audit_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_itemUpdateInput, audit_itemUncheckedUpdateInput>;
  };

  /**
   * audit_item delete
   */
  export type audit_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_item
     */
    select?: audit_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_itemInclude<ExtArgs> | null;
    /**
     * Filter which audit_item to delete.
     */
    where: audit_itemWhereUniqueInput;
  };

  /**
   * audit_item deleteMany
   */
  export type audit_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_items to delete
     */
    where?: audit_itemWhereInput;
  };

  /**
   * audit_item without action
   */
  export type audit_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_item
     */
    select?: audit_itemSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_itemInclude<ExtArgs> | null;
  };

  /**
   * Model audit_log
   */

  export type AggregateAudit_log = {
    _count: Audit_logCountAggregateOutputType | null;
    _min: Audit_logMinAggregateOutputType | null;
    _max: Audit_logMaxAggregateOutputType | null;
  };

  export type Audit_logMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Audit_logMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Audit_logCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Audit_logMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Audit_logMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Audit_logCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Audit_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_log to aggregate.
     */
    where?: audit_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: audit_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned audit_logs
     **/
    _count?: true | Audit_logCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Audit_logMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Audit_logMaxAggregateInputType;
  };

  export type GetAudit_logAggregateType<T extends Audit_logAggregateArgs> = {
    [P in keyof T & keyof AggregateAudit_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_log[P]>
      : GetScalarType<T[P], AggregateAudit_log[P]>;
  };

  export type audit_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logWhereInput;
    orderBy?: audit_logOrderByWithAggregationInput | audit_logOrderByWithAggregationInput[];
    by: Audit_logScalarFieldEnum[] | Audit_logScalarFieldEnum;
    having?: audit_logScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Audit_logCountAggregateInputType | true;
    _min?: Audit_logMinAggregateInputType;
    _max?: Audit_logMaxAggregateInputType;
  };

  export type Audit_logGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Audit_logCountAggregateOutputType | null;
    _min: Audit_logMinAggregateOutputType | null;
    _max: Audit_logMaxAggregateOutputType | null;
  };

  type GetAudit_logGroupByPayload<T extends audit_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_logGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Audit_logGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Audit_logGroupByOutputType[P]>
          : GetScalarType<T[P], Audit_logGroupByOutputType[P]>;
      }
    >
  >;

  export type audit_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['audit_log']
    >;

  export type audit_logSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $audit_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'audit_log';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['audit_log']
    >;
    composites: {};
  };

  type audit_logGetPayload<S extends boolean | null | undefined | audit_logDefaultArgs> = $Result.GetResult<
    Prisma.$audit_logPayload,
    S
  >;

  type audit_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    audit_logFindManyArgs,
    'select' | 'include'
  > & {
    select?: Audit_logCountAggregateInputType | true;
  };

  export interface audit_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_log']; meta: { name: 'audit_log' } };
    /**
     * Find zero or one Audit_log that matches the filter.
     * @param {audit_logFindUniqueArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends audit_logFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, audit_logFindUniqueArgs<ExtArgs>>,
    ): Prisma__audit_logClient<
      $Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Audit_log that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {audit_logFindUniqueOrThrowArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends audit_logFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_logFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__audit_logClient<
      $Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Audit_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindFirstArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends audit_logFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_logFindFirstArgs<ExtArgs>>,
    ): Prisma__audit_logClient<
      $Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Audit_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindFirstOrThrowArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends audit_logFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_logFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__audit_logClient<
      $Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_logs
     * const audit_logs = await prisma.audit_log.findMany()
     *
     * // Get first 10 Audit_logs
     * const audit_logs = await prisma.audit_log.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const audit_logWithIdOnly = await prisma.audit_log.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends audit_logFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_logFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Audit_log.
     * @param {audit_logCreateArgs} args - Arguments to create a Audit_log.
     * @example
     * // Create one Audit_log
     * const Audit_log = await prisma.audit_log.create({
     *   data: {
     *     // ... data to create a Audit_log
     *   }
     * })
     *
     **/
    create<T extends audit_logCreateArgs<ExtArgs>>(
      args: SelectSubset<T, audit_logCreateArgs<ExtArgs>>,
    ): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Audit_logs.
     *     @param {audit_logCreateManyArgs} args - Arguments to create many Audit_logs.
     *     @example
     *     // Create many Audit_logs
     *     const audit_log = await prisma.audit_log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends audit_logCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_logCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Audit_log.
     * @param {audit_logDeleteArgs} args - Arguments to delete one Audit_log.
     * @example
     * // Delete one Audit_log
     * const Audit_log = await prisma.audit_log.delete({
     *   where: {
     *     // ... filter to delete one Audit_log
     *   }
     * })
     *
     **/
    delete<T extends audit_logDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, audit_logDeleteArgs<ExtArgs>>,
    ): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Audit_log.
     * @param {audit_logUpdateArgs} args - Arguments to update one Audit_log.
     * @example
     * // Update one Audit_log
     * const audit_log = await prisma.audit_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends audit_logUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, audit_logUpdateArgs<ExtArgs>>,
    ): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Audit_logs.
     * @param {audit_logDeleteManyArgs} args - Arguments to filter Audit_logs to delete.
     * @example
     * // Delete a few Audit_logs
     * const { count } = await prisma.audit_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends audit_logDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_logDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_logs
     * const audit_log = await prisma.audit_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends audit_logUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, audit_logUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Audit_log.
     * @param {audit_logUpsertArgs} args - Arguments to update or create a Audit_log.
     * @example
     * // Update or create a Audit_log
     * const audit_log = await prisma.audit_log.upsert({
     *   create: {
     *     // ... data to create a Audit_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_log we want to update
     *   }
     * })
     **/
    upsert<T extends audit_logUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, audit_logUpsertArgs<ExtArgs>>,
    ): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logCountArgs} args - Arguments to filter Audit_logs to count.
     * @example
     * // Count the number of Audit_logs
     * const count = await prisma.audit_log.count({
     *   where: {
     *     // ... the filter for the Audit_logs we want to count
     *   }
     * })
     **/
    count<T extends audit_logCountArgs>(
      args?: Subset<T, audit_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_logCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Audit_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Audit_logAggregateArgs>(
      args: Subset<T, Audit_logAggregateArgs>,
    ): Prisma.PrismaPromise<GetAudit_logAggregateType<T>>;

    /**
     * Group by Audit_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends audit_logGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_logGroupByArgs['orderBy'] }
        : { orderBy?: audit_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, audit_logGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAudit_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the audit_log model
     */
    readonly fields: audit_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_logClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the audit_log model
   */
  interface audit_logFieldRefs {
    readonly id: FieldRef<'audit_log', 'String'>;
    readonly created_at: FieldRef<'audit_log', 'DateTime'>;
    readonly updated_at: FieldRef<'audit_log', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * audit_log findUnique
   */
  export type audit_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Filter, which audit_log to fetch.
     */
    where: audit_logWhereUniqueInput;
  };

  /**
   * audit_log findUniqueOrThrow
   */
  export type audit_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Filter, which audit_log to fetch.
     */
    where: audit_logWhereUniqueInput;
  };

  /**
   * audit_log findFirst
   */
  export type audit_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Filter, which audit_log to fetch.
     */
    where?: audit_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[];
  };

  /**
   * audit_log findFirstOrThrow
   */
  export type audit_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Filter, which audit_log to fetch.
     */
    where?: audit_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[];
  };

  /**
   * audit_log findMany
   */
  export type audit_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing audit_logs.
     */
    cursor?: audit_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_logs.
     */
    skip?: number;
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[];
  };

  /**
   * audit_log create
   */
  export type audit_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * The data needed to create a audit_log.
     */
    data?: XOR<audit_logCreateInput, audit_logUncheckedCreateInput>;
  };

  /**
   * audit_log createMany
   */
  export type audit_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logCreateManyInput | audit_logCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * audit_log update
   */
  export type audit_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * The data needed to update a audit_log.
     */
    data: XOR<audit_logUpdateInput, audit_logUncheckedUpdateInput>;
    /**
     * Choose, which audit_log to update.
     */
    where: audit_logWhereUniqueInput;
  };

  /**
   * audit_log updateMany
   */
  export type audit_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logUpdateManyMutationInput, audit_logUncheckedUpdateManyInput>;
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logWhereInput;
  };

  /**
   * audit_log upsert
   */
  export type audit_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * The filter to search for the audit_log to update in case it exists.
     */
    where: audit_logWhereUniqueInput;
    /**
     * In case the audit_log found by the `where` argument doesn't exist, create a new audit_log with this data.
     */
    create: XOR<audit_logCreateInput, audit_logUncheckedCreateInput>;
    /**
     * In case the audit_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_logUpdateInput, audit_logUncheckedUpdateInput>;
  };

  /**
   * audit_log delete
   */
  export type audit_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Filter which audit_log to delete.
     */
    where: audit_logWhereUniqueInput;
  };

  /**
   * audit_log deleteMany
   */
  export type audit_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_logs to delete
     */
    where?: audit_logWhereInput;
  };

  /**
   * audit_log without action
   */
  export type audit_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
  };

  /**
   * Model audit_result
   */

  export type AggregateAudit_result = {
    _count: Audit_resultCountAggregateOutputType | null;
    _min: Audit_resultMinAggregateOutputType | null;
    _max: Audit_resultMaxAggregateOutputType | null;
  };

  export type Audit_resultMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Audit_resultMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Audit_resultCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Audit_resultMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Audit_resultMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Audit_resultCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Audit_resultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_result to aggregate.
     */
    where?: audit_resultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_results to fetch.
     */
    orderBy?: audit_resultOrderByWithRelationInput | audit_resultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: audit_resultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_results from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_results.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned audit_results
     **/
    _count?: true | Audit_resultCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Audit_resultMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Audit_resultMaxAggregateInputType;
  };

  export type GetAudit_resultAggregateType<T extends Audit_resultAggregateArgs> = {
    [P in keyof T & keyof AggregateAudit_result]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_result[P]>
      : GetScalarType<T[P], AggregateAudit_result[P]>;
  };

  export type audit_resultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_resultWhereInput;
    orderBy?: audit_resultOrderByWithAggregationInput | audit_resultOrderByWithAggregationInput[];
    by: Audit_resultScalarFieldEnum[] | Audit_resultScalarFieldEnum;
    having?: audit_resultScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Audit_resultCountAggregateInputType | true;
    _min?: Audit_resultMinAggregateInputType;
    _max?: Audit_resultMaxAggregateInputType;
  };

  export type Audit_resultGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Audit_resultCountAggregateOutputType | null;
    _min: Audit_resultMinAggregateOutputType | null;
    _max: Audit_resultMaxAggregateOutputType | null;
  };

  type GetAudit_resultGroupByPayload<T extends audit_resultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_resultGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Audit_resultGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Audit_resultGroupByOutputType[P]>
          : GetScalarType<T[P], Audit_resultGroupByOutputType[P]>;
      }
    >
  >;

  export type audit_resultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['audit_result']
    >;

  export type audit_resultSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $audit_resultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'audit_result';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['audit_result']
    >;
    composites: {};
  };

  type audit_resultGetPayload<S extends boolean | null | undefined | audit_resultDefaultArgs> = $Result.GetResult<
    Prisma.$audit_resultPayload,
    S
  >;

  type audit_resultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    audit_resultFindManyArgs,
    'select' | 'include'
  > & {
    select?: Audit_resultCountAggregateInputType | true;
  };

  export interface audit_resultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_result']; meta: { name: 'audit_result' } };
    /**
     * Find zero or one Audit_result that matches the filter.
     * @param {audit_resultFindUniqueArgs} args - Arguments to find a Audit_result
     * @example
     * // Get one Audit_result
     * const audit_result = await prisma.audit_result.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends audit_resultFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, audit_resultFindUniqueArgs<ExtArgs>>,
    ): Prisma__audit_resultClient<
      $Result.GetResult<Prisma.$audit_resultPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Audit_result that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {audit_resultFindUniqueOrThrowArgs} args - Arguments to find a Audit_result
     * @example
     * // Get one Audit_result
     * const audit_result = await prisma.audit_result.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends audit_resultFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_resultFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__audit_resultClient<
      $Result.GetResult<Prisma.$audit_resultPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Audit_result that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_resultFindFirstArgs} args - Arguments to find a Audit_result
     * @example
     * // Get one Audit_result
     * const audit_result = await prisma.audit_result.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends audit_resultFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_resultFindFirstArgs<ExtArgs>>,
    ): Prisma__audit_resultClient<
      $Result.GetResult<Prisma.$audit_resultPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Audit_result that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_resultFindFirstOrThrowArgs} args - Arguments to find a Audit_result
     * @example
     * // Get one Audit_result
     * const audit_result = await prisma.audit_result.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends audit_resultFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_resultFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__audit_resultClient<
      $Result.GetResult<Prisma.$audit_resultPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Audit_results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_resultFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_results
     * const audit_results = await prisma.audit_result.findMany()
     *
     * // Get first 10 Audit_results
     * const audit_results = await prisma.audit_result.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const audit_resultWithIdOnly = await prisma.audit_result.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends audit_resultFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_resultFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_resultPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Audit_result.
     * @param {audit_resultCreateArgs} args - Arguments to create a Audit_result.
     * @example
     * // Create one Audit_result
     * const Audit_result = await prisma.audit_result.create({
     *   data: {
     *     // ... data to create a Audit_result
     *   }
     * })
     *
     **/
    create<T extends audit_resultCreateArgs<ExtArgs>>(
      args: SelectSubset<T, audit_resultCreateArgs<ExtArgs>>,
    ): Prisma__audit_resultClient<$Result.GetResult<Prisma.$audit_resultPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Audit_results.
     *     @param {audit_resultCreateManyArgs} args - Arguments to create many Audit_results.
     *     @example
     *     // Create many Audit_results
     *     const audit_result = await prisma.audit_result.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends audit_resultCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_resultCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Audit_result.
     * @param {audit_resultDeleteArgs} args - Arguments to delete one Audit_result.
     * @example
     * // Delete one Audit_result
     * const Audit_result = await prisma.audit_result.delete({
     *   where: {
     *     // ... filter to delete one Audit_result
     *   }
     * })
     *
     **/
    delete<T extends audit_resultDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, audit_resultDeleteArgs<ExtArgs>>,
    ): Prisma__audit_resultClient<$Result.GetResult<Prisma.$audit_resultPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Audit_result.
     * @param {audit_resultUpdateArgs} args - Arguments to update one Audit_result.
     * @example
     * // Update one Audit_result
     * const audit_result = await prisma.audit_result.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends audit_resultUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, audit_resultUpdateArgs<ExtArgs>>,
    ): Prisma__audit_resultClient<$Result.GetResult<Prisma.$audit_resultPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Audit_results.
     * @param {audit_resultDeleteManyArgs} args - Arguments to filter Audit_results to delete.
     * @example
     * // Delete a few Audit_results
     * const { count } = await prisma.audit_result.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends audit_resultDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_resultDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Audit_results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_resultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_results
     * const audit_result = await prisma.audit_result.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends audit_resultUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, audit_resultUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Audit_result.
     * @param {audit_resultUpsertArgs} args - Arguments to update or create a Audit_result.
     * @example
     * // Update or create a Audit_result
     * const audit_result = await prisma.audit_result.upsert({
     *   create: {
     *     // ... data to create a Audit_result
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_result we want to update
     *   }
     * })
     **/
    upsert<T extends audit_resultUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, audit_resultUpsertArgs<ExtArgs>>,
    ): Prisma__audit_resultClient<$Result.GetResult<Prisma.$audit_resultPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Audit_results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_resultCountArgs} args - Arguments to filter Audit_results to count.
     * @example
     * // Count the number of Audit_results
     * const count = await prisma.audit_result.count({
     *   where: {
     *     // ... the filter for the Audit_results we want to count
     *   }
     * })
     **/
    count<T extends audit_resultCountArgs>(
      args?: Subset<T, audit_resultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_resultCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Audit_result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_resultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Audit_resultAggregateArgs>(
      args: Subset<T, Audit_resultAggregateArgs>,
    ): Prisma.PrismaPromise<GetAudit_resultAggregateType<T>>;

    /**
     * Group by Audit_result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_resultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends audit_resultGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_resultGroupByArgs['orderBy'] }
        : { orderBy?: audit_resultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, audit_resultGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAudit_resultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the audit_result model
     */
    readonly fields: audit_resultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_result.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_resultClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the audit_result model
   */
  interface audit_resultFieldRefs {
    readonly id: FieldRef<'audit_result', 'String'>;
    readonly created_at: FieldRef<'audit_result', 'DateTime'>;
    readonly updated_at: FieldRef<'audit_result', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * audit_result findUnique
   */
  export type audit_resultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_result
     */
    select?: audit_resultSelect<ExtArgs> | null;
    /**
     * Filter, which audit_result to fetch.
     */
    where: audit_resultWhereUniqueInput;
  };

  /**
   * audit_result findUniqueOrThrow
   */
  export type audit_resultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_result
     */
    select?: audit_resultSelect<ExtArgs> | null;
    /**
     * Filter, which audit_result to fetch.
     */
    where: audit_resultWhereUniqueInput;
  };

  /**
   * audit_result findFirst
   */
  export type audit_resultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_result
     */
    select?: audit_resultSelect<ExtArgs> | null;
    /**
     * Filter, which audit_result to fetch.
     */
    where?: audit_resultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_results to fetch.
     */
    orderBy?: audit_resultOrderByWithRelationInput | audit_resultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for audit_results.
     */
    cursor?: audit_resultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_results from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_results.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of audit_results.
     */
    distinct?: Audit_resultScalarFieldEnum | Audit_resultScalarFieldEnum[];
  };

  /**
   * audit_result findFirstOrThrow
   */
  export type audit_resultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_result
     */
    select?: audit_resultSelect<ExtArgs> | null;
    /**
     * Filter, which audit_result to fetch.
     */
    where?: audit_resultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_results to fetch.
     */
    orderBy?: audit_resultOrderByWithRelationInput | audit_resultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for audit_results.
     */
    cursor?: audit_resultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_results from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_results.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of audit_results.
     */
    distinct?: Audit_resultScalarFieldEnum | Audit_resultScalarFieldEnum[];
  };

  /**
   * audit_result findMany
   */
  export type audit_resultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_result
     */
    select?: audit_resultSelect<ExtArgs> | null;
    /**
     * Filter, which audit_results to fetch.
     */
    where?: audit_resultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_results to fetch.
     */
    orderBy?: audit_resultOrderByWithRelationInput | audit_resultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing audit_results.
     */
    cursor?: audit_resultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_results from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_results.
     */
    skip?: number;
    distinct?: Audit_resultScalarFieldEnum | Audit_resultScalarFieldEnum[];
  };

  /**
   * audit_result create
   */
  export type audit_resultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_result
     */
    select?: audit_resultSelect<ExtArgs> | null;
    /**
     * The data needed to create a audit_result.
     */
    data?: XOR<audit_resultCreateInput, audit_resultUncheckedCreateInput>;
  };

  /**
   * audit_result createMany
   */
  export type audit_resultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_results.
     */
    data: audit_resultCreateManyInput | audit_resultCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * audit_result update
   */
  export type audit_resultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_result
     */
    select?: audit_resultSelect<ExtArgs> | null;
    /**
     * The data needed to update a audit_result.
     */
    data: XOR<audit_resultUpdateInput, audit_resultUncheckedUpdateInput>;
    /**
     * Choose, which audit_result to update.
     */
    where: audit_resultWhereUniqueInput;
  };

  /**
   * audit_result updateMany
   */
  export type audit_resultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_results.
     */
    data: XOR<audit_resultUpdateManyMutationInput, audit_resultUncheckedUpdateManyInput>;
    /**
     * Filter which audit_results to update
     */
    where?: audit_resultWhereInput;
  };

  /**
   * audit_result upsert
   */
  export type audit_resultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_result
     */
    select?: audit_resultSelect<ExtArgs> | null;
    /**
     * The filter to search for the audit_result to update in case it exists.
     */
    where: audit_resultWhereUniqueInput;
    /**
     * In case the audit_result found by the `where` argument doesn't exist, create a new audit_result with this data.
     */
    create: XOR<audit_resultCreateInput, audit_resultUncheckedCreateInput>;
    /**
     * In case the audit_result was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_resultUpdateInput, audit_resultUncheckedUpdateInput>;
  };

  /**
   * audit_result delete
   */
  export type audit_resultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_result
     */
    select?: audit_resultSelect<ExtArgs> | null;
    /**
     * Filter which audit_result to delete.
     */
    where: audit_resultWhereUniqueInput;
  };

  /**
   * audit_result deleteMany
   */
  export type audit_resultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_results to delete
     */
    where?: audit_resultWhereInput;
  };

  /**
   * audit_result without action
   */
  export type audit_resultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_result
     */
    select?: audit_resultSelect<ExtArgs> | null;
  };

  /**
   * Model audit_status
   */

  export type AggregateAudit_status = {
    _count: Audit_statusCountAggregateOutputType | null;
    _min: Audit_statusMinAggregateOutputType | null;
    _max: Audit_statusMaxAggregateOutputType | null;
  };

  export type Audit_statusMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Audit_statusMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Audit_statusCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Audit_statusMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Audit_statusMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Audit_statusCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Audit_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_status to aggregate.
     */
    where?: audit_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_statuses to fetch.
     */
    orderBy?: audit_statusOrderByWithRelationInput | audit_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: audit_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_statuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned audit_statuses
     **/
    _count?: true | Audit_statusCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Audit_statusMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Audit_statusMaxAggregateInputType;
  };

  export type GetAudit_statusAggregateType<T extends Audit_statusAggregateArgs> = {
    [P in keyof T & keyof AggregateAudit_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_status[P]>
      : GetScalarType<T[P], AggregateAudit_status[P]>;
  };

  export type audit_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_statusWhereInput;
    orderBy?: audit_statusOrderByWithAggregationInput | audit_statusOrderByWithAggregationInput[];
    by: Audit_statusScalarFieldEnum[] | Audit_statusScalarFieldEnum;
    having?: audit_statusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Audit_statusCountAggregateInputType | true;
    _min?: Audit_statusMinAggregateInputType;
    _max?: Audit_statusMaxAggregateInputType;
  };

  export type Audit_statusGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Audit_statusCountAggregateOutputType | null;
    _min: Audit_statusMinAggregateOutputType | null;
    _max: Audit_statusMaxAggregateOutputType | null;
  };

  type GetAudit_statusGroupByPayload<T extends audit_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_statusGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Audit_statusGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Audit_statusGroupByOutputType[P]>
          : GetScalarType<T[P], Audit_statusGroupByOutputType[P]>;
      }
    >
  >;

  export type audit_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['audit_status']
    >;

  export type audit_statusSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $audit_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'audit_status';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['audit_status']
    >;
    composites: {};
  };

  type audit_statusGetPayload<S extends boolean | null | undefined | audit_statusDefaultArgs> = $Result.GetResult<
    Prisma.$audit_statusPayload,
    S
  >;

  type audit_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    audit_statusFindManyArgs,
    'select' | 'include'
  > & {
    select?: Audit_statusCountAggregateInputType | true;
  };

  export interface audit_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_status']; meta: { name: 'audit_status' } };
    /**
     * Find zero or one Audit_status that matches the filter.
     * @param {audit_statusFindUniqueArgs} args - Arguments to find a Audit_status
     * @example
     * // Get one Audit_status
     * const audit_status = await prisma.audit_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends audit_statusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, audit_statusFindUniqueArgs<ExtArgs>>,
    ): Prisma__audit_statusClient<
      $Result.GetResult<Prisma.$audit_statusPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Audit_status that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {audit_statusFindUniqueOrThrowArgs} args - Arguments to find a Audit_status
     * @example
     * // Get one Audit_status
     * const audit_status = await prisma.audit_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends audit_statusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_statusFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__audit_statusClient<
      $Result.GetResult<Prisma.$audit_statusPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Audit_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_statusFindFirstArgs} args - Arguments to find a Audit_status
     * @example
     * // Get one Audit_status
     * const audit_status = await prisma.audit_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends audit_statusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_statusFindFirstArgs<ExtArgs>>,
    ): Prisma__audit_statusClient<
      $Result.GetResult<Prisma.$audit_statusPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Audit_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_statusFindFirstOrThrowArgs} args - Arguments to find a Audit_status
     * @example
     * // Get one Audit_status
     * const audit_status = await prisma.audit_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends audit_statusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_statusFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__audit_statusClient<
      $Result.GetResult<Prisma.$audit_statusPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Audit_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_statusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_statuses
     * const audit_statuses = await prisma.audit_status.findMany()
     *
     * // Get first 10 Audit_statuses
     * const audit_statuses = await prisma.audit_status.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const audit_statusWithIdOnly = await prisma.audit_status.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends audit_statusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_statusFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_statusPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Audit_status.
     * @param {audit_statusCreateArgs} args - Arguments to create a Audit_status.
     * @example
     * // Create one Audit_status
     * const Audit_status = await prisma.audit_status.create({
     *   data: {
     *     // ... data to create a Audit_status
     *   }
     * })
     *
     **/
    create<T extends audit_statusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, audit_statusCreateArgs<ExtArgs>>,
    ): Prisma__audit_statusClient<$Result.GetResult<Prisma.$audit_statusPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Audit_statuses.
     *     @param {audit_statusCreateManyArgs} args - Arguments to create many Audit_statuses.
     *     @example
     *     // Create many Audit_statuses
     *     const audit_status = await prisma.audit_status.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends audit_statusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_statusCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Audit_status.
     * @param {audit_statusDeleteArgs} args - Arguments to delete one Audit_status.
     * @example
     * // Delete one Audit_status
     * const Audit_status = await prisma.audit_status.delete({
     *   where: {
     *     // ... filter to delete one Audit_status
     *   }
     * })
     *
     **/
    delete<T extends audit_statusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, audit_statusDeleteArgs<ExtArgs>>,
    ): Prisma__audit_statusClient<$Result.GetResult<Prisma.$audit_statusPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Audit_status.
     * @param {audit_statusUpdateArgs} args - Arguments to update one Audit_status.
     * @example
     * // Update one Audit_status
     * const audit_status = await prisma.audit_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends audit_statusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, audit_statusUpdateArgs<ExtArgs>>,
    ): Prisma__audit_statusClient<$Result.GetResult<Prisma.$audit_statusPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Audit_statuses.
     * @param {audit_statusDeleteManyArgs} args - Arguments to filter Audit_statuses to delete.
     * @example
     * // Delete a few Audit_statuses
     * const { count } = await prisma.audit_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends audit_statusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_statusDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Audit_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_statuses
     * const audit_status = await prisma.audit_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends audit_statusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, audit_statusUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Audit_status.
     * @param {audit_statusUpsertArgs} args - Arguments to update or create a Audit_status.
     * @example
     * // Update or create a Audit_status
     * const audit_status = await prisma.audit_status.upsert({
     *   create: {
     *     // ... data to create a Audit_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_status we want to update
     *   }
     * })
     **/
    upsert<T extends audit_statusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, audit_statusUpsertArgs<ExtArgs>>,
    ): Prisma__audit_statusClient<$Result.GetResult<Prisma.$audit_statusPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Audit_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_statusCountArgs} args - Arguments to filter Audit_statuses to count.
     * @example
     * // Count the number of Audit_statuses
     * const count = await prisma.audit_status.count({
     *   where: {
     *     // ... the filter for the Audit_statuses we want to count
     *   }
     * })
     **/
    count<T extends audit_statusCountArgs>(
      args?: Subset<T, audit_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_statusCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Audit_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Audit_statusAggregateArgs>(
      args: Subset<T, Audit_statusAggregateArgs>,
    ): Prisma.PrismaPromise<GetAudit_statusAggregateType<T>>;

    /**
     * Group by Audit_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends audit_statusGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_statusGroupByArgs['orderBy'] }
        : { orderBy?: audit_statusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, audit_statusGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAudit_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the audit_status model
     */
    readonly fields: audit_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_statusClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the audit_status model
   */
  interface audit_statusFieldRefs {
    readonly id: FieldRef<'audit_status', 'String'>;
    readonly created_at: FieldRef<'audit_status', 'DateTime'>;
    readonly updated_at: FieldRef<'audit_status', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * audit_status findUnique
   */
  export type audit_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_status
     */
    select?: audit_statusSelect<ExtArgs> | null;
    /**
     * Filter, which audit_status to fetch.
     */
    where: audit_statusWhereUniqueInput;
  };

  /**
   * audit_status findUniqueOrThrow
   */
  export type audit_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_status
     */
    select?: audit_statusSelect<ExtArgs> | null;
    /**
     * Filter, which audit_status to fetch.
     */
    where: audit_statusWhereUniqueInput;
  };

  /**
   * audit_status findFirst
   */
  export type audit_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_status
     */
    select?: audit_statusSelect<ExtArgs> | null;
    /**
     * Filter, which audit_status to fetch.
     */
    where?: audit_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_statuses to fetch.
     */
    orderBy?: audit_statusOrderByWithRelationInput | audit_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for audit_statuses.
     */
    cursor?: audit_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_statuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of audit_statuses.
     */
    distinct?: Audit_statusScalarFieldEnum | Audit_statusScalarFieldEnum[];
  };

  /**
   * audit_status findFirstOrThrow
   */
  export type audit_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_status
     */
    select?: audit_statusSelect<ExtArgs> | null;
    /**
     * Filter, which audit_status to fetch.
     */
    where?: audit_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_statuses to fetch.
     */
    orderBy?: audit_statusOrderByWithRelationInput | audit_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for audit_statuses.
     */
    cursor?: audit_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_statuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of audit_statuses.
     */
    distinct?: Audit_statusScalarFieldEnum | Audit_statusScalarFieldEnum[];
  };

  /**
   * audit_status findMany
   */
  export type audit_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_status
     */
    select?: audit_statusSelect<ExtArgs> | null;
    /**
     * Filter, which audit_statuses to fetch.
     */
    where?: audit_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_statuses to fetch.
     */
    orderBy?: audit_statusOrderByWithRelationInput | audit_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing audit_statuses.
     */
    cursor?: audit_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_statuses.
     */
    skip?: number;
    distinct?: Audit_statusScalarFieldEnum | Audit_statusScalarFieldEnum[];
  };

  /**
   * audit_status create
   */
  export type audit_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_status
     */
    select?: audit_statusSelect<ExtArgs> | null;
    /**
     * The data needed to create a audit_status.
     */
    data?: XOR<audit_statusCreateInput, audit_statusUncheckedCreateInput>;
  };

  /**
   * audit_status createMany
   */
  export type audit_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_statuses.
     */
    data: audit_statusCreateManyInput | audit_statusCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * audit_status update
   */
  export type audit_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_status
     */
    select?: audit_statusSelect<ExtArgs> | null;
    /**
     * The data needed to update a audit_status.
     */
    data: XOR<audit_statusUpdateInput, audit_statusUncheckedUpdateInput>;
    /**
     * Choose, which audit_status to update.
     */
    where: audit_statusWhereUniqueInput;
  };

  /**
   * audit_status updateMany
   */
  export type audit_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_statuses.
     */
    data: XOR<audit_statusUpdateManyMutationInput, audit_statusUncheckedUpdateManyInput>;
    /**
     * Filter which audit_statuses to update
     */
    where?: audit_statusWhereInput;
  };

  /**
   * audit_status upsert
   */
  export type audit_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_status
     */
    select?: audit_statusSelect<ExtArgs> | null;
    /**
     * The filter to search for the audit_status to update in case it exists.
     */
    where: audit_statusWhereUniqueInput;
    /**
     * In case the audit_status found by the `where` argument doesn't exist, create a new audit_status with this data.
     */
    create: XOR<audit_statusCreateInput, audit_statusUncheckedCreateInput>;
    /**
     * In case the audit_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_statusUpdateInput, audit_statusUncheckedUpdateInput>;
  };

  /**
   * audit_status delete
   */
  export type audit_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_status
     */
    select?: audit_statusSelect<ExtArgs> | null;
    /**
     * Filter which audit_status to delete.
     */
    where: audit_statusWhereUniqueInput;
  };

  /**
   * audit_status deleteMany
   */
  export type audit_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_statuses to delete
     */
    where?: audit_statusWhereInput;
  };

  /**
   * audit_status without action
   */
  export type audit_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_status
     */
    select?: audit_statusSelect<ExtArgs> | null;
  };

  /**
   * Model audit_type
   */

  export type AggregateAudit_type = {
    _count: Audit_typeCountAggregateOutputType | null;
    _min: Audit_typeMinAggregateOutputType | null;
    _max: Audit_typeMaxAggregateOutputType | null;
  };

  export type Audit_typeMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Audit_typeMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Audit_typeCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Audit_typeMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Audit_typeMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Audit_typeCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Audit_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_type to aggregate.
     */
    where?: audit_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_types to fetch.
     */
    orderBy?: audit_typeOrderByWithRelationInput | audit_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: audit_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned audit_types
     **/
    _count?: true | Audit_typeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Audit_typeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Audit_typeMaxAggregateInputType;
  };

  export type GetAudit_typeAggregateType<T extends Audit_typeAggregateArgs> = {
    [P in keyof T & keyof AggregateAudit_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_type[P]>
      : GetScalarType<T[P], AggregateAudit_type[P]>;
  };

  export type audit_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_typeWhereInput;
    orderBy?: audit_typeOrderByWithAggregationInput | audit_typeOrderByWithAggregationInput[];
    by: Audit_typeScalarFieldEnum[] | Audit_typeScalarFieldEnum;
    having?: audit_typeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Audit_typeCountAggregateInputType | true;
    _min?: Audit_typeMinAggregateInputType;
    _max?: Audit_typeMaxAggregateInputType;
  };

  export type Audit_typeGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Audit_typeCountAggregateOutputType | null;
    _min: Audit_typeMinAggregateOutputType | null;
    _max: Audit_typeMaxAggregateOutputType | null;
  };

  type GetAudit_typeGroupByPayload<T extends audit_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_typeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Audit_typeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Audit_typeGroupByOutputType[P]>
          : GetScalarType<T[P], Audit_typeGroupByOutputType[P]>;
      }
    >
  >;

  export type audit_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['audit_type']
    >;

  export type audit_typeSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $audit_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'audit_type';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['audit_type']
    >;
    composites: {};
  };

  type audit_typeGetPayload<S extends boolean | null | undefined | audit_typeDefaultArgs> = $Result.GetResult<
    Prisma.$audit_typePayload,
    S
  >;

  type audit_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    audit_typeFindManyArgs,
    'select' | 'include'
  > & {
    select?: Audit_typeCountAggregateInputType | true;
  };

  export interface audit_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_type']; meta: { name: 'audit_type' } };
    /**
     * Find zero or one Audit_type that matches the filter.
     * @param {audit_typeFindUniqueArgs} args - Arguments to find a Audit_type
     * @example
     * // Get one Audit_type
     * const audit_type = await prisma.audit_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends audit_typeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, audit_typeFindUniqueArgs<ExtArgs>>,
    ): Prisma__audit_typeClient<
      $Result.GetResult<Prisma.$audit_typePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Audit_type that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {audit_typeFindUniqueOrThrowArgs} args - Arguments to find a Audit_type
     * @example
     * // Get one Audit_type
     * const audit_type = await prisma.audit_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends audit_typeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_typeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__audit_typeClient<
      $Result.GetResult<Prisma.$audit_typePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Audit_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_typeFindFirstArgs} args - Arguments to find a Audit_type
     * @example
     * // Get one Audit_type
     * const audit_type = await prisma.audit_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends audit_typeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_typeFindFirstArgs<ExtArgs>>,
    ): Prisma__audit_typeClient<
      $Result.GetResult<Prisma.$audit_typePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Audit_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_typeFindFirstOrThrowArgs} args - Arguments to find a Audit_type
     * @example
     * // Get one Audit_type
     * const audit_type = await prisma.audit_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends audit_typeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_typeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__audit_typeClient<
      $Result.GetResult<Prisma.$audit_typePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Audit_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_typeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_types
     * const audit_types = await prisma.audit_type.findMany()
     *
     * // Get first 10 Audit_types
     * const audit_types = await prisma.audit_type.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const audit_typeWithIdOnly = await prisma.audit_type.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends audit_typeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_typeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_typePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Audit_type.
     * @param {audit_typeCreateArgs} args - Arguments to create a Audit_type.
     * @example
     * // Create one Audit_type
     * const Audit_type = await prisma.audit_type.create({
     *   data: {
     *     // ... data to create a Audit_type
     *   }
     * })
     *
     **/
    create<T extends audit_typeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, audit_typeCreateArgs<ExtArgs>>,
    ): Prisma__audit_typeClient<$Result.GetResult<Prisma.$audit_typePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Audit_types.
     *     @param {audit_typeCreateManyArgs} args - Arguments to create many Audit_types.
     *     @example
     *     // Create many Audit_types
     *     const audit_type = await prisma.audit_type.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends audit_typeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_typeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Audit_type.
     * @param {audit_typeDeleteArgs} args - Arguments to delete one Audit_type.
     * @example
     * // Delete one Audit_type
     * const Audit_type = await prisma.audit_type.delete({
     *   where: {
     *     // ... filter to delete one Audit_type
     *   }
     * })
     *
     **/
    delete<T extends audit_typeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, audit_typeDeleteArgs<ExtArgs>>,
    ): Prisma__audit_typeClient<$Result.GetResult<Prisma.$audit_typePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Audit_type.
     * @param {audit_typeUpdateArgs} args - Arguments to update one Audit_type.
     * @example
     * // Update one Audit_type
     * const audit_type = await prisma.audit_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends audit_typeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, audit_typeUpdateArgs<ExtArgs>>,
    ): Prisma__audit_typeClient<$Result.GetResult<Prisma.$audit_typePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Audit_types.
     * @param {audit_typeDeleteManyArgs} args - Arguments to filter Audit_types to delete.
     * @example
     * // Delete a few Audit_types
     * const { count } = await prisma.audit_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends audit_typeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_typeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Audit_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_types
     * const audit_type = await prisma.audit_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends audit_typeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, audit_typeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Audit_type.
     * @param {audit_typeUpsertArgs} args - Arguments to update or create a Audit_type.
     * @example
     * // Update or create a Audit_type
     * const audit_type = await prisma.audit_type.upsert({
     *   create: {
     *     // ... data to create a Audit_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_type we want to update
     *   }
     * })
     **/
    upsert<T extends audit_typeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, audit_typeUpsertArgs<ExtArgs>>,
    ): Prisma__audit_typeClient<$Result.GetResult<Prisma.$audit_typePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Audit_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_typeCountArgs} args - Arguments to filter Audit_types to count.
     * @example
     * // Count the number of Audit_types
     * const count = await prisma.audit_type.count({
     *   where: {
     *     // ... the filter for the Audit_types we want to count
     *   }
     * })
     **/
    count<T extends audit_typeCountArgs>(
      args?: Subset<T, audit_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_typeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Audit_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Audit_typeAggregateArgs>(
      args: Subset<T, Audit_typeAggregateArgs>,
    ): Prisma.PrismaPromise<GetAudit_typeAggregateType<T>>;

    /**
     * Group by Audit_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_typeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends audit_typeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_typeGroupByArgs['orderBy'] }
        : { orderBy?: audit_typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, audit_typeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAudit_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the audit_type model
     */
    readonly fields: audit_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_typeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the audit_type model
   */
  interface audit_typeFieldRefs {
    readonly id: FieldRef<'audit_type', 'String'>;
    readonly created_at: FieldRef<'audit_type', 'DateTime'>;
    readonly updated_at: FieldRef<'audit_type', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * audit_type findUnique
   */
  export type audit_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_type
     */
    select?: audit_typeSelect<ExtArgs> | null;
    /**
     * Filter, which audit_type to fetch.
     */
    where: audit_typeWhereUniqueInput;
  };

  /**
   * audit_type findUniqueOrThrow
   */
  export type audit_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_type
     */
    select?: audit_typeSelect<ExtArgs> | null;
    /**
     * Filter, which audit_type to fetch.
     */
    where: audit_typeWhereUniqueInput;
  };

  /**
   * audit_type findFirst
   */
  export type audit_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_type
     */
    select?: audit_typeSelect<ExtArgs> | null;
    /**
     * Filter, which audit_type to fetch.
     */
    where?: audit_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_types to fetch.
     */
    orderBy?: audit_typeOrderByWithRelationInput | audit_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for audit_types.
     */
    cursor?: audit_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of audit_types.
     */
    distinct?: Audit_typeScalarFieldEnum | Audit_typeScalarFieldEnum[];
  };

  /**
   * audit_type findFirstOrThrow
   */
  export type audit_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_type
     */
    select?: audit_typeSelect<ExtArgs> | null;
    /**
     * Filter, which audit_type to fetch.
     */
    where?: audit_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_types to fetch.
     */
    orderBy?: audit_typeOrderByWithRelationInput | audit_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for audit_types.
     */
    cursor?: audit_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of audit_types.
     */
    distinct?: Audit_typeScalarFieldEnum | Audit_typeScalarFieldEnum[];
  };

  /**
   * audit_type findMany
   */
  export type audit_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_type
     */
    select?: audit_typeSelect<ExtArgs> | null;
    /**
     * Filter, which audit_types to fetch.
     */
    where?: audit_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_types to fetch.
     */
    orderBy?: audit_typeOrderByWithRelationInput | audit_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing audit_types.
     */
    cursor?: audit_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_types.
     */
    skip?: number;
    distinct?: Audit_typeScalarFieldEnum | Audit_typeScalarFieldEnum[];
  };

  /**
   * audit_type create
   */
  export type audit_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_type
     */
    select?: audit_typeSelect<ExtArgs> | null;
    /**
     * The data needed to create a audit_type.
     */
    data?: XOR<audit_typeCreateInput, audit_typeUncheckedCreateInput>;
  };

  /**
   * audit_type createMany
   */
  export type audit_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_types.
     */
    data: audit_typeCreateManyInput | audit_typeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * audit_type update
   */
  export type audit_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_type
     */
    select?: audit_typeSelect<ExtArgs> | null;
    /**
     * The data needed to update a audit_type.
     */
    data: XOR<audit_typeUpdateInput, audit_typeUncheckedUpdateInput>;
    /**
     * Choose, which audit_type to update.
     */
    where: audit_typeWhereUniqueInput;
  };

  /**
   * audit_type updateMany
   */
  export type audit_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_types.
     */
    data: XOR<audit_typeUpdateManyMutationInput, audit_typeUncheckedUpdateManyInput>;
    /**
     * Filter which audit_types to update
     */
    where?: audit_typeWhereInput;
  };

  /**
   * audit_type upsert
   */
  export type audit_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_type
     */
    select?: audit_typeSelect<ExtArgs> | null;
    /**
     * The filter to search for the audit_type to update in case it exists.
     */
    where: audit_typeWhereUniqueInput;
    /**
     * In case the audit_type found by the `where` argument doesn't exist, create a new audit_type with this data.
     */
    create: XOR<audit_typeCreateInput, audit_typeUncheckedCreateInput>;
    /**
     * In case the audit_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_typeUpdateInput, audit_typeUncheckedUpdateInput>;
  };

  /**
   * audit_type delete
   */
  export type audit_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_type
     */
    select?: audit_typeSelect<ExtArgs> | null;
    /**
     * Filter which audit_type to delete.
     */
    where: audit_typeWhereUniqueInput;
  };

  /**
   * audit_type deleteMany
   */
  export type audit_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_types to delete
     */
    where?: audit_typeWhereInput;
  };

  /**
   * audit_type without action
   */
  export type audit_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_type
     */
    select?: audit_typeSelect<ExtArgs> | null;
  };

  /**
   * Model manager
   */

  export type AggregateManager = {
    _count: ManagerCountAggregateOutputType | null;
    _min: ManagerMinAggregateOutputType | null;
    _max: ManagerMaxAggregateOutputType | null;
  };

  export type ManagerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    manager_name: string | null;
    manager_phone: string | null;
    manager_address: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ManagerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    manager_name: string | null;
    manager_phone: string | null;
    manager_address: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ManagerCountAggregateOutputType = {
    id: number;
    user_id: number;
    manager_name: number;
    manager_phone: number;
    manager_address: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ManagerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    manager_name?: true;
    manager_phone?: true;
    manager_address?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ManagerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    manager_name?: true;
    manager_phone?: true;
    manager_address?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ManagerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    manager_name?: true;
    manager_phone?: true;
    manager_address?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which manager to aggregate.
     */
    where?: managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of managers to fetch.
     */
    orderBy?: managerOrderByWithRelationInput | managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned managers
     **/
    _count?: true | ManagerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ManagerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ManagerMaxAggregateInputType;
  };

  export type GetManagerAggregateType<T extends ManagerAggregateArgs> = {
    [P in keyof T & keyof AggregateManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManager[P]>
      : GetScalarType<T[P], AggregateManager[P]>;
  };

  export type managerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: managerWhereInput;
    orderBy?: managerOrderByWithAggregationInput | managerOrderByWithAggregationInput[];
    by: ManagerScalarFieldEnum[] | ManagerScalarFieldEnum;
    having?: managerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ManagerCountAggregateInputType | true;
    _min?: ManagerMinAggregateInputType;
    _max?: ManagerMaxAggregateInputType;
  };

  export type ManagerGroupByOutputType = {
    id: string;
    user_id: string;
    manager_name: string;
    manager_phone: string | null;
    manager_address: string | null;
    created_at: Date;
    updated_at: Date;
    _count: ManagerCountAggregateOutputType | null;
    _min: ManagerMinAggregateOutputType | null;
    _max: ManagerMaxAggregateOutputType | null;
  };

  type GetManagerGroupByPayload<T extends managerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ManagerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ManagerGroupByOutputType[P]>
          : GetScalarType<T[P], ManagerGroupByOutputType[P]>;
      }
    >
  >;

  export type managerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      manager_name?: boolean;
      manager_phone?: boolean;
      manager_address?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['manager']
  >;

  export type managerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    manager_name?: boolean;
    manager_phone?: boolean;
    manager_address?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type managerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $managerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'manager';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        manager_name: string;
        manager_phone: string | null;
        manager_address: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['manager']
    >;
    composites: {};
  };

  type managerGetPayload<S extends boolean | null | undefined | managerDefaultArgs> = $Result.GetResult<
    Prisma.$managerPayload,
    S
  >;

  type managerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    managerFindManyArgs,
    'select' | 'include'
  > & {
    select?: ManagerCountAggregateInputType | true;
  };

  export interface managerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['manager']; meta: { name: 'manager' } };
    /**
     * Find zero or one Manager that matches the filter.
     * @param {managerFindUniqueArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends managerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, managerFindUniqueArgs<ExtArgs>>,
    ): Prisma__managerClient<$Result.GetResult<Prisma.$managerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Manager that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {managerFindUniqueOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends managerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, managerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__managerClient<
      $Result.GetResult<Prisma.$managerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {managerFindFirstArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends managerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, managerFindFirstArgs<ExtArgs>>,
    ): Prisma__managerClient<$Result.GetResult<Prisma.$managerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {managerFindFirstOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends managerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, managerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__managerClient<$Result.GetResult<Prisma.$managerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {managerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Managers
     * const managers = await prisma.manager.findMany()
     *
     * // Get first 10 Managers
     * const managers = await prisma.manager.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const managerWithIdOnly = await prisma.manager.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends managerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, managerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$managerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Manager.
     * @param {managerCreateArgs} args - Arguments to create a Manager.
     * @example
     * // Create one Manager
     * const Manager = await prisma.manager.create({
     *   data: {
     *     // ... data to create a Manager
     *   }
     * })
     *
     **/
    create<T extends managerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, managerCreateArgs<ExtArgs>>,
    ): Prisma__managerClient<$Result.GetResult<Prisma.$managerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Managers.
     *     @param {managerCreateManyArgs} args - Arguments to create many Managers.
     *     @example
     *     // Create many Managers
     *     const manager = await prisma.manager.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends managerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, managerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Manager.
     * @param {managerDeleteArgs} args - Arguments to delete one Manager.
     * @example
     * // Delete one Manager
     * const Manager = await prisma.manager.delete({
     *   where: {
     *     // ... filter to delete one Manager
     *   }
     * })
     *
     **/
    delete<T extends managerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, managerDeleteArgs<ExtArgs>>,
    ): Prisma__managerClient<$Result.GetResult<Prisma.$managerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Manager.
     * @param {managerUpdateArgs} args - Arguments to update one Manager.
     * @example
     * // Update one Manager
     * const manager = await prisma.manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends managerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, managerUpdateArgs<ExtArgs>>,
    ): Prisma__managerClient<$Result.GetResult<Prisma.$managerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Managers.
     * @param {managerDeleteManyArgs} args - Arguments to filter Managers to delete.
     * @example
     * // Delete a few Managers
     * const { count } = await prisma.manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends managerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, managerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {managerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Managers
     * const manager = await prisma.manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends managerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, managerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Manager.
     * @param {managerUpsertArgs} args - Arguments to update or create a Manager.
     * @example
     * // Update or create a Manager
     * const manager = await prisma.manager.upsert({
     *   create: {
     *     // ... data to create a Manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manager we want to update
     *   }
     * })
     **/
    upsert<T extends managerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, managerUpsertArgs<ExtArgs>>,
    ): Prisma__managerClient<$Result.GetResult<Prisma.$managerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {managerCountArgs} args - Arguments to filter Managers to count.
     * @example
     * // Count the number of Managers
     * const count = await prisma.manager.count({
     *   where: {
     *     // ... the filter for the Managers we want to count
     *   }
     * })
     **/
    count<T extends managerCountArgs>(
      args?: Subset<T, managerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ManagerAggregateArgs>(
      args: Subset<T, ManagerAggregateArgs>,
    ): Prisma.PrismaPromise<GetManagerAggregateType<T>>;

    /**
     * Group by Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {managerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends managerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: managerGroupByArgs['orderBy'] }
        : { orderBy?: managerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, managerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the manager model
     */
    readonly fields: managerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__managerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the manager model
   */
  interface managerFieldRefs {
    readonly id: FieldRef<'manager', 'String'>;
    readonly user_id: FieldRef<'manager', 'String'>;
    readonly manager_name: FieldRef<'manager', 'String'>;
    readonly manager_phone: FieldRef<'manager', 'String'>;
    readonly manager_address: FieldRef<'manager', 'String'>;
    readonly created_at: FieldRef<'manager', 'DateTime'>;
    readonly updated_at: FieldRef<'manager', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * manager findUnique
   */
  export type managerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manager
     */
    select?: managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: managerInclude<ExtArgs> | null;
    /**
     * Filter, which manager to fetch.
     */
    where: managerWhereUniqueInput;
  };

  /**
   * manager findUniqueOrThrow
   */
  export type managerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manager
     */
    select?: managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: managerInclude<ExtArgs> | null;
    /**
     * Filter, which manager to fetch.
     */
    where: managerWhereUniqueInput;
  };

  /**
   * manager findFirst
   */
  export type managerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manager
     */
    select?: managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: managerInclude<ExtArgs> | null;
    /**
     * Filter, which manager to fetch.
     */
    where?: managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of managers to fetch.
     */
    orderBy?: managerOrderByWithRelationInput | managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for managers.
     */
    cursor?: managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[];
  };

  /**
   * manager findFirstOrThrow
   */
  export type managerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manager
     */
    select?: managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: managerInclude<ExtArgs> | null;
    /**
     * Filter, which manager to fetch.
     */
    where?: managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of managers to fetch.
     */
    orderBy?: managerOrderByWithRelationInput | managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for managers.
     */
    cursor?: managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[];
  };

  /**
   * manager findMany
   */
  export type managerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manager
     */
    select?: managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: managerInclude<ExtArgs> | null;
    /**
     * Filter, which managers to fetch.
     */
    where?: managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of managers to fetch.
     */
    orderBy?: managerOrderByWithRelationInput | managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing managers.
     */
    cursor?: managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` managers.
     */
    skip?: number;
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[];
  };

  /**
   * manager create
   */
  export type managerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manager
     */
    select?: managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: managerInclude<ExtArgs> | null;
    /**
     * The data needed to create a manager.
     */
    data: XOR<managerCreateInput, managerUncheckedCreateInput>;
  };

  /**
   * manager createMany
   */
  export type managerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many managers.
     */
    data: managerCreateManyInput | managerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * manager update
   */
  export type managerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manager
     */
    select?: managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: managerInclude<ExtArgs> | null;
    /**
     * The data needed to update a manager.
     */
    data: XOR<managerUpdateInput, managerUncheckedUpdateInput>;
    /**
     * Choose, which manager to update.
     */
    where: managerWhereUniqueInput;
  };

  /**
   * manager updateMany
   */
  export type managerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update managers.
     */
    data: XOR<managerUpdateManyMutationInput, managerUncheckedUpdateManyInput>;
    /**
     * Filter which managers to update
     */
    where?: managerWhereInput;
  };

  /**
   * manager upsert
   */
  export type managerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manager
     */
    select?: managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: managerInclude<ExtArgs> | null;
    /**
     * The filter to search for the manager to update in case it exists.
     */
    where: managerWhereUniqueInput;
    /**
     * In case the manager found by the `where` argument doesn't exist, create a new manager with this data.
     */
    create: XOR<managerCreateInput, managerUncheckedCreateInput>;
    /**
     * In case the manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<managerUpdateInput, managerUncheckedUpdateInput>;
  };

  /**
   * manager delete
   */
  export type managerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manager
     */
    select?: managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: managerInclude<ExtArgs> | null;
    /**
     * Filter which manager to delete.
     */
    where: managerWhereUniqueInput;
  };

  /**
   * manager deleteMany
   */
  export type managerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which managers to delete
     */
    where?: managerWhereInput;
  };

  /**
   * manager without action
   */
  export type managerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manager
     */
    select?: managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: managerInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        address?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        audit?: boolean | organization$auditArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | organization$auditArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      audit: Prisma.$auditPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    audit<T extends organization$auditArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$auditArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly address: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly user_id: FieldRef<'organization', 'String'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.audit
   */
  export type organization$auditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auditInclude<ExtArgs> | null;
    where?: auditWhereInput;
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[];
    cursor?: auditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model staff_department
   */

  export type AggregateStaff_department = {
    _count: Staff_departmentCountAggregateOutputType | null;
    _min: Staff_departmentMinAggregateOutputType | null;
    _max: Staff_departmentMaxAggregateOutputType | null;
  };

  export type Staff_departmentMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Staff_departmentMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Staff_departmentCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Staff_departmentMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Staff_departmentMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Staff_departmentCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Staff_departmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff_department to aggregate.
     */
    where?: staff_departmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff_departments to fetch.
     */
    orderBy?: staff_departmentOrderByWithRelationInput | staff_departmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: staff_departmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff_departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff_departments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned staff_departments
     **/
    _count?: true | Staff_departmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Staff_departmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Staff_departmentMaxAggregateInputType;
  };

  export type GetStaff_departmentAggregateType<T extends Staff_departmentAggregateArgs> = {
    [P in keyof T & keyof AggregateStaff_department]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff_department[P]>
      : GetScalarType<T[P], AggregateStaff_department[P]>;
  };

  export type staff_departmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staff_departmentWhereInput;
    orderBy?: staff_departmentOrderByWithAggregationInput | staff_departmentOrderByWithAggregationInput[];
    by: Staff_departmentScalarFieldEnum[] | Staff_departmentScalarFieldEnum;
    having?: staff_departmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Staff_departmentCountAggregateInputType | true;
    _min?: Staff_departmentMinAggregateInputType;
    _max?: Staff_departmentMaxAggregateInputType;
  };

  export type Staff_departmentGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Staff_departmentCountAggregateOutputType | null;
    _min: Staff_departmentMinAggregateOutputType | null;
    _max: Staff_departmentMaxAggregateOutputType | null;
  };

  type GetStaff_departmentGroupByPayload<T extends staff_departmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Staff_departmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Staff_departmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Staff_departmentGroupByOutputType[P]>
          : GetScalarType<T[P], Staff_departmentGroupByOutputType[P]>;
      }
    >
  >;

  export type staff_departmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['staff_department']
    >;

  export type staff_departmentSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $staff_departmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'staff_department';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['staff_department']
    >;
    composites: {};
  };

  type staff_departmentGetPayload<S extends boolean | null | undefined | staff_departmentDefaultArgs> =
    $Result.GetResult<Prisma.$staff_departmentPayload, S>;

  type staff_departmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    staff_departmentFindManyArgs,
    'select' | 'include'
  > & {
    select?: Staff_departmentCountAggregateInputType | true;
  };

  export interface staff_departmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staff_department']; meta: { name: 'staff_department' } };
    /**
     * Find zero or one Staff_department that matches the filter.
     * @param {staff_departmentFindUniqueArgs} args - Arguments to find a Staff_department
     * @example
     * // Get one Staff_department
     * const staff_department = await prisma.staff_department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends staff_departmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, staff_departmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__staff_departmentClient<
      $Result.GetResult<Prisma.$staff_departmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Staff_department that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {staff_departmentFindUniqueOrThrowArgs} args - Arguments to find a Staff_department
     * @example
     * // Get one Staff_department
     * const staff_department = await prisma.staff_department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends staff_departmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_departmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__staff_departmentClient<
      $Result.GetResult<Prisma.$staff_departmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Staff_department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_departmentFindFirstArgs} args - Arguments to find a Staff_department
     * @example
     * // Get one Staff_department
     * const staff_department = await prisma.staff_department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends staff_departmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_departmentFindFirstArgs<ExtArgs>>,
    ): Prisma__staff_departmentClient<
      $Result.GetResult<Prisma.$staff_departmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Staff_department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_departmentFindFirstOrThrowArgs} args - Arguments to find a Staff_department
     * @example
     * // Get one Staff_department
     * const staff_department = await prisma.staff_department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends staff_departmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_departmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__staff_departmentClient<
      $Result.GetResult<Prisma.$staff_departmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Staff_departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_departmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff_departments
     * const staff_departments = await prisma.staff_department.findMany()
     *
     * // Get first 10 Staff_departments
     * const staff_departments = await prisma.staff_department.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const staff_departmentWithIdOnly = await prisma.staff_department.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends staff_departmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_departmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staff_departmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Staff_department.
     * @param {staff_departmentCreateArgs} args - Arguments to create a Staff_department.
     * @example
     * // Create one Staff_department
     * const Staff_department = await prisma.staff_department.create({
     *   data: {
     *     // ... data to create a Staff_department
     *   }
     * })
     *
     **/
    create<T extends staff_departmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, staff_departmentCreateArgs<ExtArgs>>,
    ): Prisma__staff_departmentClient<
      $Result.GetResult<Prisma.$staff_departmentPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Staff_departments.
     *     @param {staff_departmentCreateManyArgs} args - Arguments to create many Staff_departments.
     *     @example
     *     // Create many Staff_departments
     *     const staff_department = await prisma.staff_department.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends staff_departmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_departmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Staff_department.
     * @param {staff_departmentDeleteArgs} args - Arguments to delete one Staff_department.
     * @example
     * // Delete one Staff_department
     * const Staff_department = await prisma.staff_department.delete({
     *   where: {
     *     // ... filter to delete one Staff_department
     *   }
     * })
     *
     **/
    delete<T extends staff_departmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, staff_departmentDeleteArgs<ExtArgs>>,
    ): Prisma__staff_departmentClient<
      $Result.GetResult<Prisma.$staff_departmentPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Staff_department.
     * @param {staff_departmentUpdateArgs} args - Arguments to update one Staff_department.
     * @example
     * // Update one Staff_department
     * const staff_department = await prisma.staff_department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends staff_departmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, staff_departmentUpdateArgs<ExtArgs>>,
    ): Prisma__staff_departmentClient<
      $Result.GetResult<Prisma.$staff_departmentPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Staff_departments.
     * @param {staff_departmentDeleteManyArgs} args - Arguments to filter Staff_departments to delete.
     * @example
     * // Delete a few Staff_departments
     * const { count } = await prisma.staff_department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends staff_departmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_departmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Staff_departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_departmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff_departments
     * const staff_department = await prisma.staff_department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends staff_departmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, staff_departmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Staff_department.
     * @param {staff_departmentUpsertArgs} args - Arguments to update or create a Staff_department.
     * @example
     * // Update or create a Staff_department
     * const staff_department = await prisma.staff_department.upsert({
     *   create: {
     *     // ... data to create a Staff_department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff_department we want to update
     *   }
     * })
     **/
    upsert<T extends staff_departmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, staff_departmentUpsertArgs<ExtArgs>>,
    ): Prisma__staff_departmentClient<
      $Result.GetResult<Prisma.$staff_departmentPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Staff_departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_departmentCountArgs} args - Arguments to filter Staff_departments to count.
     * @example
     * // Count the number of Staff_departments
     * const count = await prisma.staff_department.count({
     *   where: {
     *     // ... the filter for the Staff_departments we want to count
     *   }
     * })
     **/
    count<T extends staff_departmentCountArgs>(
      args?: Subset<T, staff_departmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Staff_departmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Staff_department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Staff_departmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Staff_departmentAggregateArgs>(
      args: Subset<T, Staff_departmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetStaff_departmentAggregateType<T>>;

    /**
     * Group by Staff_department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_departmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends staff_departmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staff_departmentGroupByArgs['orderBy'] }
        : { orderBy?: staff_departmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, staff_departmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetStaff_departmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the staff_department model
     */
    readonly fields: staff_departmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staff_department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staff_departmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the staff_department model
   */
  interface staff_departmentFieldRefs {
    readonly id: FieldRef<'staff_department', 'String'>;
    readonly created_at: FieldRef<'staff_department', 'DateTime'>;
    readonly updated_at: FieldRef<'staff_department', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * staff_department findUnique
   */
  export type staff_departmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_department
     */
    select?: staff_departmentSelect<ExtArgs> | null;
    /**
     * Filter, which staff_department to fetch.
     */
    where: staff_departmentWhereUniqueInput;
  };

  /**
   * staff_department findUniqueOrThrow
   */
  export type staff_departmentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the staff_department
     */
    select?: staff_departmentSelect<ExtArgs> | null;
    /**
     * Filter, which staff_department to fetch.
     */
    where: staff_departmentWhereUniqueInput;
  };

  /**
   * staff_department findFirst
   */
  export type staff_departmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_department
     */
    select?: staff_departmentSelect<ExtArgs> | null;
    /**
     * Filter, which staff_department to fetch.
     */
    where?: staff_departmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff_departments to fetch.
     */
    orderBy?: staff_departmentOrderByWithRelationInput | staff_departmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for staff_departments.
     */
    cursor?: staff_departmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff_departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff_departments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of staff_departments.
     */
    distinct?: Staff_departmentScalarFieldEnum | Staff_departmentScalarFieldEnum[];
  };

  /**
   * staff_department findFirstOrThrow
   */
  export type staff_departmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the staff_department
       */
      select?: staff_departmentSelect<ExtArgs> | null;
      /**
       * Filter, which staff_department to fetch.
       */
      where?: staff_departmentWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of staff_departments to fetch.
       */
      orderBy?: staff_departmentOrderByWithRelationInput | staff_departmentOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for staff_departments.
       */
      cursor?: staff_departmentWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` staff_departments from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` staff_departments.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of staff_departments.
       */
      distinct?: Staff_departmentScalarFieldEnum | Staff_departmentScalarFieldEnum[];
    };

  /**
   * staff_department findMany
   */
  export type staff_departmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_department
     */
    select?: staff_departmentSelect<ExtArgs> | null;
    /**
     * Filter, which staff_departments to fetch.
     */
    where?: staff_departmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff_departments to fetch.
     */
    orderBy?: staff_departmentOrderByWithRelationInput | staff_departmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing staff_departments.
     */
    cursor?: staff_departmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff_departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff_departments.
     */
    skip?: number;
    distinct?: Staff_departmentScalarFieldEnum | Staff_departmentScalarFieldEnum[];
  };

  /**
   * staff_department create
   */
  export type staff_departmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_department
     */
    select?: staff_departmentSelect<ExtArgs> | null;
    /**
     * The data needed to create a staff_department.
     */
    data?: XOR<staff_departmentCreateInput, staff_departmentUncheckedCreateInput>;
  };

  /**
   * staff_department createMany
   */
  export type staff_departmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staff_departments.
     */
    data: staff_departmentCreateManyInput | staff_departmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * staff_department update
   */
  export type staff_departmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_department
     */
    select?: staff_departmentSelect<ExtArgs> | null;
    /**
     * The data needed to update a staff_department.
     */
    data: XOR<staff_departmentUpdateInput, staff_departmentUncheckedUpdateInput>;
    /**
     * Choose, which staff_department to update.
     */
    where: staff_departmentWhereUniqueInput;
  };

  /**
   * staff_department updateMany
   */
  export type staff_departmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staff_departments.
     */
    data: XOR<staff_departmentUpdateManyMutationInput, staff_departmentUncheckedUpdateManyInput>;
    /**
     * Filter which staff_departments to update
     */
    where?: staff_departmentWhereInput;
  };

  /**
   * staff_department upsert
   */
  export type staff_departmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_department
     */
    select?: staff_departmentSelect<ExtArgs> | null;
    /**
     * The filter to search for the staff_department to update in case it exists.
     */
    where: staff_departmentWhereUniqueInput;
    /**
     * In case the staff_department found by the `where` argument doesn't exist, create a new staff_department with this data.
     */
    create: XOR<staff_departmentCreateInput, staff_departmentUncheckedCreateInput>;
    /**
     * In case the staff_department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staff_departmentUpdateInput, staff_departmentUncheckedUpdateInput>;
  };

  /**
   * staff_department delete
   */
  export type staff_departmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_department
     */
    select?: staff_departmentSelect<ExtArgs> | null;
    /**
     * Filter which staff_department to delete.
     */
    where: staff_departmentWhereUniqueInput;
  };

  /**
   * staff_department deleteMany
   */
  export type staff_departmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff_departments to delete
     */
    where?: staff_departmentWhereInput;
  };

  /**
   * staff_department without action
   */
  export type staff_departmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_department
     */
    select?: staff_departmentSelect<ExtArgs> | null;
  };

  /**
   * Model staff_member
   */

  export type AggregateStaff_member = {
    _count: Staff_memberCountAggregateOutputType | null;
    _min: Staff_memberMinAggregateOutputType | null;
    _max: Staff_memberMaxAggregateOutputType | null;
  };

  export type Staff_memberMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    staff_name: string | null;
    staff_phone: string | null;
    staff_address: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Staff_memberMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    staff_name: string | null;
    staff_phone: string | null;
    staff_address: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Staff_memberCountAggregateOutputType = {
    id: number;
    user_id: number;
    staff_name: number;
    staff_phone: number;
    staff_address: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Staff_memberMinAggregateInputType = {
    id?: true;
    user_id?: true;
    staff_name?: true;
    staff_phone?: true;
    staff_address?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Staff_memberMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    staff_name?: true;
    staff_phone?: true;
    staff_address?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Staff_memberCountAggregateInputType = {
    id?: true;
    user_id?: true;
    staff_name?: true;
    staff_phone?: true;
    staff_address?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Staff_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff_member to aggregate.
     */
    where?: staff_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff_members to fetch.
     */
    orderBy?: staff_memberOrderByWithRelationInput | staff_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: staff_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned staff_members
     **/
    _count?: true | Staff_memberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Staff_memberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Staff_memberMaxAggregateInputType;
  };

  export type GetStaff_memberAggregateType<T extends Staff_memberAggregateArgs> = {
    [P in keyof T & keyof AggregateStaff_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff_member[P]>
      : GetScalarType<T[P], AggregateStaff_member[P]>;
  };

  export type staff_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staff_memberWhereInput;
    orderBy?: staff_memberOrderByWithAggregationInput | staff_memberOrderByWithAggregationInput[];
    by: Staff_memberScalarFieldEnum[] | Staff_memberScalarFieldEnum;
    having?: staff_memberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Staff_memberCountAggregateInputType | true;
    _min?: Staff_memberMinAggregateInputType;
    _max?: Staff_memberMaxAggregateInputType;
  };

  export type Staff_memberGroupByOutputType = {
    id: string;
    user_id: string;
    staff_name: string;
    staff_phone: string | null;
    staff_address: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Staff_memberCountAggregateOutputType | null;
    _min: Staff_memberMinAggregateOutputType | null;
    _max: Staff_memberMaxAggregateOutputType | null;
  };

  type GetStaff_memberGroupByPayload<T extends staff_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Staff_memberGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Staff_memberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Staff_memberGroupByOutputType[P]>
          : GetScalarType<T[P], Staff_memberGroupByOutputType[P]>;
      }
    >
  >;

  export type staff_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        staff_name?: boolean;
        staff_phone?: boolean;
        staff_address?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['staff_member']
    >;

  export type staff_memberSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    staff_name?: boolean;
    staff_phone?: boolean;
    staff_address?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type staff_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $staff_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'staff_member';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        staff_name: string;
        staff_phone: string | null;
        staff_address: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['staff_member']
    >;
    composites: {};
  };

  type staff_memberGetPayload<S extends boolean | null | undefined | staff_memberDefaultArgs> = $Result.GetResult<
    Prisma.$staff_memberPayload,
    S
  >;

  type staff_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    staff_memberFindManyArgs,
    'select' | 'include'
  > & {
    select?: Staff_memberCountAggregateInputType | true;
  };

  export interface staff_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staff_member']; meta: { name: 'staff_member' } };
    /**
     * Find zero or one Staff_member that matches the filter.
     * @param {staff_memberFindUniqueArgs} args - Arguments to find a Staff_member
     * @example
     * // Get one Staff_member
     * const staff_member = await prisma.staff_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends staff_memberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, staff_memberFindUniqueArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<
      $Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Staff_member that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {staff_memberFindUniqueOrThrowArgs} args - Arguments to find a Staff_member
     * @example
     * // Get one Staff_member
     * const staff_member = await prisma.staff_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends staff_memberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_memberFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<
      $Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Staff_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_memberFindFirstArgs} args - Arguments to find a Staff_member
     * @example
     * // Get one Staff_member
     * const staff_member = await prisma.staff_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends staff_memberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_memberFindFirstArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<
      $Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Staff_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_memberFindFirstOrThrowArgs} args - Arguments to find a Staff_member
     * @example
     * // Get one Staff_member
     * const staff_member = await prisma.staff_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends staff_memberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_memberFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<
      $Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Staff_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_memberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff_members
     * const staff_members = await prisma.staff_member.findMany()
     *
     * // Get first 10 Staff_members
     * const staff_members = await prisma.staff_member.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const staff_memberWithIdOnly = await prisma.staff_member.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends staff_memberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_memberFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Staff_member.
     * @param {staff_memberCreateArgs} args - Arguments to create a Staff_member.
     * @example
     * // Create one Staff_member
     * const Staff_member = await prisma.staff_member.create({
     *   data: {
     *     // ... data to create a Staff_member
     *   }
     * })
     *
     **/
    create<T extends staff_memberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, staff_memberCreateArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<$Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Staff_members.
     *     @param {staff_memberCreateManyArgs} args - Arguments to create many Staff_members.
     *     @example
     *     // Create many Staff_members
     *     const staff_member = await prisma.staff_member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends staff_memberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_memberCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Staff_member.
     * @param {staff_memberDeleteArgs} args - Arguments to delete one Staff_member.
     * @example
     * // Delete one Staff_member
     * const Staff_member = await prisma.staff_member.delete({
     *   where: {
     *     // ... filter to delete one Staff_member
     *   }
     * })
     *
     **/
    delete<T extends staff_memberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, staff_memberDeleteArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<$Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Staff_member.
     * @param {staff_memberUpdateArgs} args - Arguments to update one Staff_member.
     * @example
     * // Update one Staff_member
     * const staff_member = await prisma.staff_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends staff_memberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, staff_memberUpdateArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<$Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Staff_members.
     * @param {staff_memberDeleteManyArgs} args - Arguments to filter Staff_members to delete.
     * @example
     * // Delete a few Staff_members
     * const { count } = await prisma.staff_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends staff_memberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, staff_memberDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Staff_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff_members
     * const staff_member = await prisma.staff_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends staff_memberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, staff_memberUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Staff_member.
     * @param {staff_memberUpsertArgs} args - Arguments to update or create a Staff_member.
     * @example
     * // Update or create a Staff_member
     * const staff_member = await prisma.staff_member.upsert({
     *   create: {
     *     // ... data to create a Staff_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff_member we want to update
     *   }
     * })
     **/
    upsert<T extends staff_memberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, staff_memberUpsertArgs<ExtArgs>>,
    ): Prisma__staff_memberClient<$Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Staff_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_memberCountArgs} args - Arguments to filter Staff_members to count.
     * @example
     * // Count the number of Staff_members
     * const count = await prisma.staff_member.count({
     *   where: {
     *     // ... the filter for the Staff_members we want to count
     *   }
     * })
     **/
    count<T extends staff_memberCountArgs>(
      args?: Subset<T, staff_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Staff_memberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Staff_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Staff_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Staff_memberAggregateArgs>(
      args: Subset<T, Staff_memberAggregateArgs>,
    ): Prisma.PrismaPromise<GetStaff_memberAggregateType<T>>;

    /**
     * Group by Staff_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staff_memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends staff_memberGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staff_memberGroupByArgs['orderBy'] }
        : { orderBy?: staff_memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, staff_memberGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetStaff_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the staff_member model
     */
    readonly fields: staff_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staff_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staff_memberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the staff_member model
   */
  interface staff_memberFieldRefs {
    readonly id: FieldRef<'staff_member', 'String'>;
    readonly user_id: FieldRef<'staff_member', 'String'>;
    readonly staff_name: FieldRef<'staff_member', 'String'>;
    readonly staff_phone: FieldRef<'staff_member', 'String'>;
    readonly staff_address: FieldRef<'staff_member', 'String'>;
    readonly created_at: FieldRef<'staff_member', 'DateTime'>;
    readonly updated_at: FieldRef<'staff_member', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * staff_member findUnique
   */
  export type staff_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * Filter, which staff_member to fetch.
     */
    where: staff_memberWhereUniqueInput;
  };

  /**
   * staff_member findUniqueOrThrow
   */
  export type staff_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * Filter, which staff_member to fetch.
     */
    where: staff_memberWhereUniqueInput;
  };

  /**
   * staff_member findFirst
   */
  export type staff_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * Filter, which staff_member to fetch.
     */
    where?: staff_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff_members to fetch.
     */
    orderBy?: staff_memberOrderByWithRelationInput | staff_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for staff_members.
     */
    cursor?: staff_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of staff_members.
     */
    distinct?: Staff_memberScalarFieldEnum | Staff_memberScalarFieldEnum[];
  };

  /**
   * staff_member findFirstOrThrow
   */
  export type staff_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * Filter, which staff_member to fetch.
     */
    where?: staff_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff_members to fetch.
     */
    orderBy?: staff_memberOrderByWithRelationInput | staff_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for staff_members.
     */
    cursor?: staff_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of staff_members.
     */
    distinct?: Staff_memberScalarFieldEnum | Staff_memberScalarFieldEnum[];
  };

  /**
   * staff_member findMany
   */
  export type staff_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * Filter, which staff_members to fetch.
     */
    where?: staff_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff_members to fetch.
     */
    orderBy?: staff_memberOrderByWithRelationInput | staff_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing staff_members.
     */
    cursor?: staff_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff_members.
     */
    skip?: number;
    distinct?: Staff_memberScalarFieldEnum | Staff_memberScalarFieldEnum[];
  };

  /**
   * staff_member create
   */
  export type staff_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * The data needed to create a staff_member.
     */
    data: XOR<staff_memberCreateInput, staff_memberUncheckedCreateInput>;
  };

  /**
   * staff_member createMany
   */
  export type staff_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staff_members.
     */
    data: staff_memberCreateManyInput | staff_memberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * staff_member update
   */
  export type staff_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * The data needed to update a staff_member.
     */
    data: XOR<staff_memberUpdateInput, staff_memberUncheckedUpdateInput>;
    /**
     * Choose, which staff_member to update.
     */
    where: staff_memberWhereUniqueInput;
  };

  /**
   * staff_member updateMany
   */
  export type staff_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staff_members.
     */
    data: XOR<staff_memberUpdateManyMutationInput, staff_memberUncheckedUpdateManyInput>;
    /**
     * Filter which staff_members to update
     */
    where?: staff_memberWhereInput;
  };

  /**
   * staff_member upsert
   */
  export type staff_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * The filter to search for the staff_member to update in case it exists.
     */
    where: staff_memberWhereUniqueInput;
    /**
     * In case the staff_member found by the `where` argument doesn't exist, create a new staff_member with this data.
     */
    create: XOR<staff_memberCreateInput, staff_memberUncheckedCreateInput>;
    /**
     * In case the staff_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staff_memberUpdateInput, staff_memberUncheckedUpdateInput>;
  };

  /**
   * staff_member delete
   */
  export type staff_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    /**
     * Filter which staff_member to delete.
     */
    where: staff_memberWhereUniqueInput;
  };

  /**
   * staff_member deleteMany
   */
  export type staff_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff_members to delete
     */
    where?: staff_memberWhereInput;
  };

  /**
   * staff_member without action
   */
  export type staff_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      audit?: boolean | user$auditArgs<ExtArgs>;
      manager?: boolean | user$managerArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      staff_member?: boolean | user$staff_memberArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | user$auditArgs<ExtArgs>;
    manager?: boolean | user$managerArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    staff_member?: boolean | user$staff_memberArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      audit: Prisma.$auditPayload<ExtArgs>[];
      manager: Prisma.$managerPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>[];
      staff_member: Prisma.$staff_memberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    audit<T extends user$auditArgs<ExtArgs> = {}>(
      args?: Subset<T, user$auditArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, 'findMany'> | Null>;

    manager<T extends user$managerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$managerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$managerPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'> | Null>;

    staff_member<T extends user$staff_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, user$staff_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staff_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.audit
   */
  export type user$auditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auditInclude<ExtArgs> | null;
    where?: auditWhereInput;
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[];
    cursor?: auditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[];
  };

  /**
   * user.manager
   */
  export type user$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manager
     */
    select?: managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: managerInclude<ExtArgs> | null;
    where?: managerWhereInput;
    orderBy?: managerOrderByWithRelationInput | managerOrderByWithRelationInput[];
    cursor?: managerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    cursor?: organizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * user.staff_member
   */
  export type user$staff_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff_member
     */
    select?: staff_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staff_memberInclude<ExtArgs> | null;
    where?: staff_memberWhereInput;
    orderBy?: staff_memberOrderByWithRelationInput | staff_memberOrderByWithRelationInput[];
    cursor?: staff_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Staff_memberScalarFieldEnum | Staff_memberScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model user_role
   */

  export type AggregateUser_role = {
    _count: User_roleCountAggregateOutputType | null;
    _min: User_roleMinAggregateOutputType | null;
    _max: User_roleMaxAggregateOutputType | null;
  };

  export type User_roleMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type User_roleMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type User_roleCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type User_roleMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type User_roleMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type User_roleCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type User_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_role to aggregate.
     */
    where?: user_roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: user_roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned user_roles
     **/
    _count?: true | User_roleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: User_roleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: User_roleMaxAggregateInputType;
  };

  export type GetUser_roleAggregateType<T extends User_roleAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_role[P]>
      : GetScalarType<T[P], AggregateUser_role[P]>;
  };

  export type user_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput;
    orderBy?: user_roleOrderByWithAggregationInput | user_roleOrderByWithAggregationInput[];
    by: User_roleScalarFieldEnum[] | User_roleScalarFieldEnum;
    having?: user_roleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_roleCountAggregateInputType | true;
    _min?: User_roleMinAggregateInputType;
    _max?: User_roleMaxAggregateInputType;
  };

  export type User_roleGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: User_roleCountAggregateOutputType | null;
    _min: User_roleMinAggregateOutputType | null;
    _max: User_roleMaxAggregateOutputType | null;
  };

  type GetUser_roleGroupByPayload<T extends user_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_roleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof User_roleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], User_roleGroupByOutputType[P]>
          : GetScalarType<T[P], User_roleGroupByOutputType[P]>;
      }
    >
  >;

  export type user_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['user_role']
    >;

  export type user_roleSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $user_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user_role';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user_role']
    >;
    composites: {};
  };

  type user_roleGetPayload<S extends boolean | null | undefined | user_roleDefaultArgs> = $Result.GetResult<
    Prisma.$user_rolePayload,
    S
  >;

  type user_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    user_roleFindManyArgs,
    'select' | 'include'
  > & {
    select?: User_roleCountAggregateInputType | true;
  };

  export interface user_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_role']; meta: { name: 'user_role' } };
    /**
     * Find zero or one User_role that matches the filter.
     * @param {user_roleFindUniqueArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends user_roleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleFindUniqueArgs<ExtArgs>>,
    ): Prisma__user_roleClient<
      $Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User_role that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {user_roleFindUniqueOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends user_roleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__user_roleClient<
      $Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first User_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends user_roleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindFirstArgs<ExtArgs>>,
    ): Prisma__user_roleClient<
      $Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends user_roleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__user_roleClient<
      $Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_role.findMany()
     *
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_role.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const user_roleWithIdOnly = await prisma.user_role.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends user_roleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User_role.
     * @param {user_roleCreateArgs} args - Arguments to create a User_role.
     * @example
     * // Create one User_role
     * const User_role = await prisma.user_role.create({
     *   data: {
     *     // ... data to create a User_role
     *   }
     * })
     *
     **/
    create<T extends user_roleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleCreateArgs<ExtArgs>>,
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many User_roles.
     *     @param {user_roleCreateManyArgs} args - Arguments to create many User_roles.
     *     @example
     *     // Create many User_roles
     *     const user_role = await prisma.user_role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends user_roleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User_role.
     * @param {user_roleDeleteArgs} args - Arguments to delete one User_role.
     * @example
     * // Delete one User_role
     * const User_role = await prisma.user_role.delete({
     *   where: {
     *     // ... filter to delete one User_role
     *   }
     * })
     *
     **/
    delete<T extends user_roleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleDeleteArgs<ExtArgs>>,
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User_role.
     * @param {user_roleUpdateArgs} args - Arguments to update one User_role.
     * @example
     * // Update one User_role
     * const user_role = await prisma.user_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends user_roleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleUpdateArgs<ExtArgs>>,
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more User_roles.
     * @param {user_roleDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends user_roleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_role = await prisma.user_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends user_roleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User_role.
     * @param {user_roleUpsertArgs} args - Arguments to update or create a User_role.
     * @example
     * // Update or create a User_role
     * const user_role = await prisma.user_role.upsert({
     *   create: {
     *     // ... data to create a User_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_role we want to update
     *   }
     * })
     **/
    upsert<T extends user_roleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleUpsertArgs<ExtArgs>>,
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_role.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
     **/
    count<T extends user_roleCountArgs>(
      args?: Subset<T, user_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_roleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends User_roleAggregateArgs>(
      args: Subset<T, User_roleAggregateArgs>,
    ): Prisma.PrismaPromise<GetUser_roleAggregateType<T>>;

    /**
     * Group by User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends user_roleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_roleGroupByArgs['orderBy'] }
        : { orderBy?: user_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, user_roleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUser_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user_role model
     */
    readonly fields: user_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_roleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user_role model
   */
  interface user_roleFieldRefs {
    readonly id: FieldRef<'user_role', 'String'>;
    readonly created_at: FieldRef<'user_role', 'DateTime'>;
    readonly updated_at: FieldRef<'user_role', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user_role findUnique
   */
  export type user_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput;
  };

  /**
   * user_role findUniqueOrThrow
   */
  export type user_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput;
  };

  /**
   * user_role findFirst
   */
  export type user_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[];
  };

  /**
   * user_role findFirstOrThrow
   */
  export type user_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[];
  };

  /**
   * user_role findMany
   */
  export type user_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing user_roles.
     */
    cursor?: user_roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[];
  };

  /**
   * user_role create
   */
  export type user_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * The data needed to create a user_role.
     */
    data?: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>;
  };

  /**
   * user_role createMany
   */
  export type user_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles.
     */
    data: user_roleCreateManyInput | user_roleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user_role update
   */
  export type user_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * The data needed to update a user_role.
     */
    data: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>;
    /**
     * Choose, which user_role to update.
     */
    where: user_roleWhereUniqueInput;
  };

  /**
   * user_role updateMany
   */
  export type user_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyInput>;
    /**
     * Filter which user_roles to update
     */
    where?: user_roleWhereInput;
  };

  /**
   * user_role upsert
   */
  export type user_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * The filter to search for the user_role to update in case it exists.
     */
    where: user_roleWhereUniqueInput;
    /**
     * In case the user_role found by the `where` argument doesn't exist, create a new user_role with this data.
     */
    create: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>;
    /**
     * In case the user_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>;
  };

  /**
   * user_role delete
   */
  export type user_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Filter which user_role to delete.
     */
    where: user_roleWhereUniqueInput;
  };

  /**
   * user_role deleteMany
   */
  export type user_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_roleWhereInput;
  };

  /**
   * user_role without action
   */
  export type user_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AuditScalarFieldEnum: {
    id: 'id';
    audit_date: 'audit_date';
    user_id: 'user_id';
    organization_id: 'organization_id';
    audit_summary: 'audit_summary';
    audit_audit_result: 'audit_audit_result';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AuditScalarFieldEnum = (typeof AuditScalarFieldEnum)[keyof typeof AuditScalarFieldEnum];

  export const Audit_itemScalarFieldEnum: {
    id: 'id';
    audit_id: 'audit_id';
    item_name: 'item_name';
    item_status: 'item_status';
    item_description: 'item_description';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Audit_itemScalarFieldEnum = (typeof Audit_itemScalarFieldEnum)[keyof typeof Audit_itemScalarFieldEnum];

  export const Audit_logScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Audit_logScalarFieldEnum = (typeof Audit_logScalarFieldEnum)[keyof typeof Audit_logScalarFieldEnum];

  export const Audit_resultScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Audit_resultScalarFieldEnum =
    (typeof Audit_resultScalarFieldEnum)[keyof typeof Audit_resultScalarFieldEnum];

  export const Audit_statusScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Audit_statusScalarFieldEnum =
    (typeof Audit_statusScalarFieldEnum)[keyof typeof Audit_statusScalarFieldEnum];

  export const Audit_typeScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Audit_typeScalarFieldEnum = (typeof Audit_typeScalarFieldEnum)[keyof typeof Audit_typeScalarFieldEnum];

  export const ManagerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    manager_name: 'manager_name';
    manager_phone: 'manager_phone';
    manager_address: 'manager_address';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ManagerScalarFieldEnum = (typeof ManagerScalarFieldEnum)[keyof typeof ManagerScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const Staff_departmentScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Staff_departmentScalarFieldEnum =
    (typeof Staff_departmentScalarFieldEnum)[keyof typeof Staff_departmentScalarFieldEnum];

  export const Staff_memberScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    staff_name: 'staff_name';
    staff_phone: 'staff_phone';
    staff_address: 'staff_address';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Staff_memberScalarFieldEnum =
    (typeof Staff_memberScalarFieldEnum)[keyof typeof Staff_memberScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const User_roleScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type User_roleScalarFieldEnum = (typeof User_roleScalarFieldEnum)[keyof typeof User_roleScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type auditWhereInput = {
    AND?: auditWhereInput | auditWhereInput[];
    OR?: auditWhereInput[];
    NOT?: auditWhereInput | auditWhereInput[];
    id?: UuidFilter<'audit'> | string;
    audit_date?: DateTimeFilter<'audit'> | Date | string;
    user_id?: UuidFilter<'audit'> | string;
    organization_id?: UuidFilter<'audit'> | string;
    audit_summary?: StringNullableFilter<'audit'> | string | null;
    audit_audit_result?: StringNullableFilter<'audit'> | string | null;
    created_at?: DateTimeFilter<'audit'> | Date | string;
    updated_at?: DateTimeFilter<'audit'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    audit_item?: Audit_itemListRelationFilter;
  };

  export type auditOrderByWithRelationInput = {
    id?: SortOrder;
    audit_date?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    audit_summary?: SortOrderInput | SortOrder;
    audit_audit_result?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    audit_item?: audit_itemOrderByRelationAggregateInput;
  };

  export type auditWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: auditWhereInput | auditWhereInput[];
      OR?: auditWhereInput[];
      NOT?: auditWhereInput | auditWhereInput[];
      audit_date?: DateTimeFilter<'audit'> | Date | string;
      user_id?: UuidFilter<'audit'> | string;
      organization_id?: UuidFilter<'audit'> | string;
      audit_summary?: StringNullableFilter<'audit'> | string | null;
      audit_audit_result?: StringNullableFilter<'audit'> | string | null;
      created_at?: DateTimeFilter<'audit'> | Date | string;
      updated_at?: DateTimeFilter<'audit'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      audit_item?: Audit_itemListRelationFilter;
    },
    'id'
  >;

  export type auditOrderByWithAggregationInput = {
    id?: SortOrder;
    audit_date?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    audit_summary?: SortOrderInput | SortOrder;
    audit_audit_result?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: auditCountOrderByAggregateInput;
    _max?: auditMaxOrderByAggregateInput;
    _min?: auditMinOrderByAggregateInput;
  };

  export type auditScalarWhereWithAggregatesInput = {
    AND?: auditScalarWhereWithAggregatesInput | auditScalarWhereWithAggregatesInput[];
    OR?: auditScalarWhereWithAggregatesInput[];
    NOT?: auditScalarWhereWithAggregatesInput | auditScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'audit'> | string;
    audit_date?: DateTimeWithAggregatesFilter<'audit'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'audit'> | string;
    organization_id?: UuidWithAggregatesFilter<'audit'> | string;
    audit_summary?: StringNullableWithAggregatesFilter<'audit'> | string | null;
    audit_audit_result?: StringNullableWithAggregatesFilter<'audit'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'audit'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'audit'> | Date | string;
  };

  export type audit_itemWhereInput = {
    AND?: audit_itemWhereInput | audit_itemWhereInput[];
    OR?: audit_itemWhereInput[];
    NOT?: audit_itemWhereInput | audit_itemWhereInput[];
    id?: UuidFilter<'audit_item'> | string;
    audit_id?: UuidFilter<'audit_item'> | string;
    item_name?: StringFilter<'audit_item'> | string;
    item_status?: StringFilter<'audit_item'> | string;
    item_description?: StringNullableFilter<'audit_item'> | string | null;
    created_at?: DateTimeFilter<'audit_item'> | Date | string;
    updated_at?: DateTimeFilter<'audit_item'> | Date | string;
    audit?: XOR<AuditRelationFilter, auditWhereInput>;
  };

  export type audit_itemOrderByWithRelationInput = {
    id?: SortOrder;
    audit_id?: SortOrder;
    item_name?: SortOrder;
    item_status?: SortOrder;
    item_description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    audit?: auditOrderByWithRelationInput;
  };

  export type audit_itemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: audit_itemWhereInput | audit_itemWhereInput[];
      OR?: audit_itemWhereInput[];
      NOT?: audit_itemWhereInput | audit_itemWhereInput[];
      audit_id?: UuidFilter<'audit_item'> | string;
      item_name?: StringFilter<'audit_item'> | string;
      item_status?: StringFilter<'audit_item'> | string;
      item_description?: StringNullableFilter<'audit_item'> | string | null;
      created_at?: DateTimeFilter<'audit_item'> | Date | string;
      updated_at?: DateTimeFilter<'audit_item'> | Date | string;
      audit?: XOR<AuditRelationFilter, auditWhereInput>;
    },
    'id'
  >;

  export type audit_itemOrderByWithAggregationInput = {
    id?: SortOrder;
    audit_id?: SortOrder;
    item_name?: SortOrder;
    item_status?: SortOrder;
    item_description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: audit_itemCountOrderByAggregateInput;
    _max?: audit_itemMaxOrderByAggregateInput;
    _min?: audit_itemMinOrderByAggregateInput;
  };

  export type audit_itemScalarWhereWithAggregatesInput = {
    AND?: audit_itemScalarWhereWithAggregatesInput | audit_itemScalarWhereWithAggregatesInput[];
    OR?: audit_itemScalarWhereWithAggregatesInput[];
    NOT?: audit_itemScalarWhereWithAggregatesInput | audit_itemScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'audit_item'> | string;
    audit_id?: UuidWithAggregatesFilter<'audit_item'> | string;
    item_name?: StringWithAggregatesFilter<'audit_item'> | string;
    item_status?: StringWithAggregatesFilter<'audit_item'> | string;
    item_description?: StringNullableWithAggregatesFilter<'audit_item'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'audit_item'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'audit_item'> | Date | string;
  };

  export type audit_logWhereInput = {
    AND?: audit_logWhereInput | audit_logWhereInput[];
    OR?: audit_logWhereInput[];
    NOT?: audit_logWhereInput | audit_logWhereInput[];
    id?: UuidFilter<'audit_log'> | string;
    created_at?: DateTimeFilter<'audit_log'> | Date | string;
    updated_at?: DateTimeFilter<'audit_log'> | Date | string;
  };

  export type audit_logOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_logWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: audit_logWhereInput | audit_logWhereInput[];
      OR?: audit_logWhereInput[];
      NOT?: audit_logWhereInput | audit_logWhereInput[];
      created_at?: DateTimeFilter<'audit_log'> | Date | string;
      updated_at?: DateTimeFilter<'audit_log'> | Date | string;
    },
    'id'
  >;

  export type audit_logOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: audit_logCountOrderByAggregateInput;
    _max?: audit_logMaxOrderByAggregateInput;
    _min?: audit_logMinOrderByAggregateInput;
  };

  export type audit_logScalarWhereWithAggregatesInput = {
    AND?: audit_logScalarWhereWithAggregatesInput | audit_logScalarWhereWithAggregatesInput[];
    OR?: audit_logScalarWhereWithAggregatesInput[];
    NOT?: audit_logScalarWhereWithAggregatesInput | audit_logScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'audit_log'> | string;
    created_at?: DateTimeWithAggregatesFilter<'audit_log'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'audit_log'> | Date | string;
  };

  export type audit_resultWhereInput = {
    AND?: audit_resultWhereInput | audit_resultWhereInput[];
    OR?: audit_resultWhereInput[];
    NOT?: audit_resultWhereInput | audit_resultWhereInput[];
    id?: UuidFilter<'audit_result'> | string;
    created_at?: DateTimeFilter<'audit_result'> | Date | string;
    updated_at?: DateTimeFilter<'audit_result'> | Date | string;
  };

  export type audit_resultOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_resultWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: audit_resultWhereInput | audit_resultWhereInput[];
      OR?: audit_resultWhereInput[];
      NOT?: audit_resultWhereInput | audit_resultWhereInput[];
      created_at?: DateTimeFilter<'audit_result'> | Date | string;
      updated_at?: DateTimeFilter<'audit_result'> | Date | string;
    },
    'id'
  >;

  export type audit_resultOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: audit_resultCountOrderByAggregateInput;
    _max?: audit_resultMaxOrderByAggregateInput;
    _min?: audit_resultMinOrderByAggregateInput;
  };

  export type audit_resultScalarWhereWithAggregatesInput = {
    AND?: audit_resultScalarWhereWithAggregatesInput | audit_resultScalarWhereWithAggregatesInput[];
    OR?: audit_resultScalarWhereWithAggregatesInput[];
    NOT?: audit_resultScalarWhereWithAggregatesInput | audit_resultScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'audit_result'> | string;
    created_at?: DateTimeWithAggregatesFilter<'audit_result'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'audit_result'> | Date | string;
  };

  export type audit_statusWhereInput = {
    AND?: audit_statusWhereInput | audit_statusWhereInput[];
    OR?: audit_statusWhereInput[];
    NOT?: audit_statusWhereInput | audit_statusWhereInput[];
    id?: UuidFilter<'audit_status'> | string;
    created_at?: DateTimeFilter<'audit_status'> | Date | string;
    updated_at?: DateTimeFilter<'audit_status'> | Date | string;
  };

  export type audit_statusOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_statusWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: audit_statusWhereInput | audit_statusWhereInput[];
      OR?: audit_statusWhereInput[];
      NOT?: audit_statusWhereInput | audit_statusWhereInput[];
      created_at?: DateTimeFilter<'audit_status'> | Date | string;
      updated_at?: DateTimeFilter<'audit_status'> | Date | string;
    },
    'id'
  >;

  export type audit_statusOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: audit_statusCountOrderByAggregateInput;
    _max?: audit_statusMaxOrderByAggregateInput;
    _min?: audit_statusMinOrderByAggregateInput;
  };

  export type audit_statusScalarWhereWithAggregatesInput = {
    AND?: audit_statusScalarWhereWithAggregatesInput | audit_statusScalarWhereWithAggregatesInput[];
    OR?: audit_statusScalarWhereWithAggregatesInput[];
    NOT?: audit_statusScalarWhereWithAggregatesInput | audit_statusScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'audit_status'> | string;
    created_at?: DateTimeWithAggregatesFilter<'audit_status'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'audit_status'> | Date | string;
  };

  export type audit_typeWhereInput = {
    AND?: audit_typeWhereInput | audit_typeWhereInput[];
    OR?: audit_typeWhereInput[];
    NOT?: audit_typeWhereInput | audit_typeWhereInput[];
    id?: UuidFilter<'audit_type'> | string;
    created_at?: DateTimeFilter<'audit_type'> | Date | string;
    updated_at?: DateTimeFilter<'audit_type'> | Date | string;
  };

  export type audit_typeOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_typeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: audit_typeWhereInput | audit_typeWhereInput[];
      OR?: audit_typeWhereInput[];
      NOT?: audit_typeWhereInput | audit_typeWhereInput[];
      created_at?: DateTimeFilter<'audit_type'> | Date | string;
      updated_at?: DateTimeFilter<'audit_type'> | Date | string;
    },
    'id'
  >;

  export type audit_typeOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: audit_typeCountOrderByAggregateInput;
    _max?: audit_typeMaxOrderByAggregateInput;
    _min?: audit_typeMinOrderByAggregateInput;
  };

  export type audit_typeScalarWhereWithAggregatesInput = {
    AND?: audit_typeScalarWhereWithAggregatesInput | audit_typeScalarWhereWithAggregatesInput[];
    OR?: audit_typeScalarWhereWithAggregatesInput[];
    NOT?: audit_typeScalarWhereWithAggregatesInput | audit_typeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'audit_type'> | string;
    created_at?: DateTimeWithAggregatesFilter<'audit_type'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'audit_type'> | Date | string;
  };

  export type managerWhereInput = {
    AND?: managerWhereInput | managerWhereInput[];
    OR?: managerWhereInput[];
    NOT?: managerWhereInput | managerWhereInput[];
    id?: UuidFilter<'manager'> | string;
    user_id?: UuidFilter<'manager'> | string;
    manager_name?: StringFilter<'manager'> | string;
    manager_phone?: StringNullableFilter<'manager'> | string | null;
    manager_address?: StringNullableFilter<'manager'> | string | null;
    created_at?: DateTimeFilter<'manager'> | Date | string;
    updated_at?: DateTimeFilter<'manager'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type managerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    manager_name?: SortOrder;
    manager_phone?: SortOrderInput | SortOrder;
    manager_address?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type managerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: managerWhereInput | managerWhereInput[];
      OR?: managerWhereInput[];
      NOT?: managerWhereInput | managerWhereInput[];
      user_id?: UuidFilter<'manager'> | string;
      manager_name?: StringFilter<'manager'> | string;
      manager_phone?: StringNullableFilter<'manager'> | string | null;
      manager_address?: StringNullableFilter<'manager'> | string | null;
      created_at?: DateTimeFilter<'manager'> | Date | string;
      updated_at?: DateTimeFilter<'manager'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type managerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    manager_name?: SortOrder;
    manager_phone?: SortOrderInput | SortOrder;
    manager_address?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: managerCountOrderByAggregateInput;
    _max?: managerMaxOrderByAggregateInput;
    _min?: managerMinOrderByAggregateInput;
  };

  export type managerScalarWhereWithAggregatesInput = {
    AND?: managerScalarWhereWithAggregatesInput | managerScalarWhereWithAggregatesInput[];
    OR?: managerScalarWhereWithAggregatesInput[];
    NOT?: managerScalarWhereWithAggregatesInput | managerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'manager'> | string;
    user_id?: UuidWithAggregatesFilter<'manager'> | string;
    manager_name?: StringWithAggregatesFilter<'manager'> | string;
    manager_phone?: StringNullableWithAggregatesFilter<'manager'> | string | null;
    manager_address?: StringNullableWithAggregatesFilter<'manager'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'manager'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'manager'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    address?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
    audit?: AuditListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    audit?: auditOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      address?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user_id?: UuidFilter<'organization'> | string;
      tenant_id?: StringFilter<'organization'> | string;
      audit?: AuditListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    address?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'organization'> | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type staff_departmentWhereInput = {
    AND?: staff_departmentWhereInput | staff_departmentWhereInput[];
    OR?: staff_departmentWhereInput[];
    NOT?: staff_departmentWhereInput | staff_departmentWhereInput[];
    id?: UuidFilter<'staff_department'> | string;
    created_at?: DateTimeFilter<'staff_department'> | Date | string;
    updated_at?: DateTimeFilter<'staff_department'> | Date | string;
  };

  export type staff_departmentOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type staff_departmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: staff_departmentWhereInput | staff_departmentWhereInput[];
      OR?: staff_departmentWhereInput[];
      NOT?: staff_departmentWhereInput | staff_departmentWhereInput[];
      created_at?: DateTimeFilter<'staff_department'> | Date | string;
      updated_at?: DateTimeFilter<'staff_department'> | Date | string;
    },
    'id'
  >;

  export type staff_departmentOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: staff_departmentCountOrderByAggregateInput;
    _max?: staff_departmentMaxOrderByAggregateInput;
    _min?: staff_departmentMinOrderByAggregateInput;
  };

  export type staff_departmentScalarWhereWithAggregatesInput = {
    AND?: staff_departmentScalarWhereWithAggregatesInput | staff_departmentScalarWhereWithAggregatesInput[];
    OR?: staff_departmentScalarWhereWithAggregatesInput[];
    NOT?: staff_departmentScalarWhereWithAggregatesInput | staff_departmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'staff_department'> | string;
    created_at?: DateTimeWithAggregatesFilter<'staff_department'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'staff_department'> | Date | string;
  };

  export type staff_memberWhereInput = {
    AND?: staff_memberWhereInput | staff_memberWhereInput[];
    OR?: staff_memberWhereInput[];
    NOT?: staff_memberWhereInput | staff_memberWhereInput[];
    id?: UuidFilter<'staff_member'> | string;
    user_id?: UuidFilter<'staff_member'> | string;
    staff_name?: StringFilter<'staff_member'> | string;
    staff_phone?: StringNullableFilter<'staff_member'> | string | null;
    staff_address?: StringNullableFilter<'staff_member'> | string | null;
    created_at?: DateTimeFilter<'staff_member'> | Date | string;
    updated_at?: DateTimeFilter<'staff_member'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type staff_memberOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    staff_name?: SortOrder;
    staff_phone?: SortOrderInput | SortOrder;
    staff_address?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type staff_memberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: staff_memberWhereInput | staff_memberWhereInput[];
      OR?: staff_memberWhereInput[];
      NOT?: staff_memberWhereInput | staff_memberWhereInput[];
      user_id?: UuidFilter<'staff_member'> | string;
      staff_name?: StringFilter<'staff_member'> | string;
      staff_phone?: StringNullableFilter<'staff_member'> | string | null;
      staff_address?: StringNullableFilter<'staff_member'> | string | null;
      created_at?: DateTimeFilter<'staff_member'> | Date | string;
      updated_at?: DateTimeFilter<'staff_member'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type staff_memberOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    staff_name?: SortOrder;
    staff_phone?: SortOrderInput | SortOrder;
    staff_address?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: staff_memberCountOrderByAggregateInput;
    _max?: staff_memberMaxOrderByAggregateInput;
    _min?: staff_memberMinOrderByAggregateInput;
  };

  export type staff_memberScalarWhereWithAggregatesInput = {
    AND?: staff_memberScalarWhereWithAggregatesInput | staff_memberScalarWhereWithAggregatesInput[];
    OR?: staff_memberScalarWhereWithAggregatesInput[];
    NOT?: staff_memberScalarWhereWithAggregatesInput | staff_memberScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'staff_member'> | string;
    user_id?: UuidWithAggregatesFilter<'staff_member'> | string;
    staff_name?: StringWithAggregatesFilter<'staff_member'> | string;
    staff_phone?: StringNullableWithAggregatesFilter<'staff_member'> | string | null;
    staff_address?: StringNullableWithAggregatesFilter<'staff_member'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'staff_member'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'staff_member'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    audit?: AuditListRelationFilter;
    manager?: ManagerListRelationFilter;
    organization?: OrganizationListRelationFilter;
    staff_member?: Staff_memberListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    audit?: auditOrderByRelationAggregateInput;
    manager?: managerOrderByRelationAggregateInput;
    organization?: organizationOrderByRelationAggregateInput;
    staff_member?: staff_memberOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      audit?: AuditListRelationFilter;
      manager?: ManagerListRelationFilter;
      organization?: OrganizationListRelationFilter;
      staff_member?: Staff_memberListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type user_roleWhereInput = {
    AND?: user_roleWhereInput | user_roleWhereInput[];
    OR?: user_roleWhereInput[];
    NOT?: user_roleWhereInput | user_roleWhereInput[];
    id?: UuidFilter<'user_role'> | string;
    created_at?: DateTimeFilter<'user_role'> | Date | string;
    updated_at?: DateTimeFilter<'user_role'> | Date | string;
  };

  export type user_roleOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_roleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: user_roleWhereInput | user_roleWhereInput[];
      OR?: user_roleWhereInput[];
      NOT?: user_roleWhereInput | user_roleWhereInput[];
      created_at?: DateTimeFilter<'user_role'> | Date | string;
      updated_at?: DateTimeFilter<'user_role'> | Date | string;
    },
    'id'
  >;

  export type user_roleOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: user_roleCountOrderByAggregateInput;
    _max?: user_roleMaxOrderByAggregateInput;
    _min?: user_roleMinOrderByAggregateInput;
  };

  export type user_roleScalarWhereWithAggregatesInput = {
    AND?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[];
    OR?: user_roleScalarWhereWithAggregatesInput[];
    NOT?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user_role'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user_role'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user_role'> | Date | string;
  };

  export type auditCreateInput = {
    id?: string;
    audit_date: Date | string;
    audit_summary?: string | null;
    audit_audit_result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutAuditInput;
    user: userCreateNestedOneWithoutAuditInput;
    audit_item?: audit_itemCreateNestedManyWithoutAuditInput;
  };

  export type auditUncheckedCreateInput = {
    id?: string;
    audit_date: Date | string;
    user_id: string;
    organization_id: string;
    audit_summary?: string | null;
    audit_audit_result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_item?: audit_itemUncheckedCreateNestedManyWithoutAuditInput;
  };

  export type auditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    audit_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit_summary?: NullableStringFieldUpdateOperationsInput | string | null;
    audit_audit_result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutAuditNestedInput;
    user?: userUpdateOneRequiredWithoutAuditNestedInput;
    audit_item?: audit_itemUpdateManyWithoutAuditNestedInput;
  };

  export type auditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    audit_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    audit_summary?: NullableStringFieldUpdateOperationsInput | string | null;
    audit_audit_result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit_item?: audit_itemUncheckedUpdateManyWithoutAuditNestedInput;
  };

  export type auditCreateManyInput = {
    id?: string;
    audit_date: Date | string;
    user_id: string;
    organization_id: string;
    audit_summary?: string | null;
    audit_audit_result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type auditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    audit_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit_summary?: NullableStringFieldUpdateOperationsInput | string | null;
    audit_audit_result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type auditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    audit_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    audit_summary?: NullableStringFieldUpdateOperationsInput | string | null;
    audit_audit_result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_itemCreateInput = {
    id?: string;
    item_name: string;
    item_status: string;
    item_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit: auditCreateNestedOneWithoutAudit_itemInput;
  };

  export type audit_itemUncheckedCreateInput = {
    id?: string;
    audit_id: string;
    item_name: string;
    item_status: string;
    item_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_itemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    item_name?: StringFieldUpdateOperationsInput | string;
    item_status?: StringFieldUpdateOperationsInput | string;
    item_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit?: auditUpdateOneRequiredWithoutAudit_itemNestedInput;
  };

  export type audit_itemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    audit_id?: StringFieldUpdateOperationsInput | string;
    item_name?: StringFieldUpdateOperationsInput | string;
    item_status?: StringFieldUpdateOperationsInput | string;
    item_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_itemCreateManyInput = {
    id?: string;
    audit_id: string;
    item_name: string;
    item_status: string;
    item_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_itemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    item_name?: StringFieldUpdateOperationsInput | string;
    item_status?: StringFieldUpdateOperationsInput | string;
    item_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_itemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    audit_id?: StringFieldUpdateOperationsInput | string;
    item_name?: StringFieldUpdateOperationsInput | string;
    item_status?: StringFieldUpdateOperationsInput | string;
    item_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_logCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_logUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_logUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_logUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_logCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_logUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_logUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_resultCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_resultUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_resultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_resultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_resultCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_resultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_resultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_statusCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_statusUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_statusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_statusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_statusCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_statusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_statusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_typeCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_typeUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_typeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_typeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_typeCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_typeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_typeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type managerCreateInput = {
    id?: string;
    manager_name: string;
    manager_phone?: string | null;
    manager_address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutManagerInput;
  };

  export type managerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    manager_name: string;
    manager_phone?: string | null;
    manager_address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type managerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    manager_name?: StringFieldUpdateOperationsInput | string;
    manager_phone?: NullableStringFieldUpdateOperationsInput | string | null;
    manager_address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutManagerNestedInput;
  };

  export type managerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    manager_name?: StringFieldUpdateOperationsInput | string;
    manager_phone?: NullableStringFieldUpdateOperationsInput | string | null;
    manager_address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type managerCreateManyInput = {
    id?: string;
    user_id: string;
    manager_name: string;
    manager_phone?: string | null;
    manager_address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type managerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    manager_name?: StringFieldUpdateOperationsInput | string;
    manager_phone?: NullableStringFieldUpdateOperationsInput | string | null;
    manager_address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type managerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    manager_name?: StringFieldUpdateOperationsInput | string;
    manager_phone?: NullableStringFieldUpdateOperationsInput | string | null;
    manager_address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    audit?: auditCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    audit?: auditUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    audit?: auditUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    audit?: auditUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type staff_departmentCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staff_departmentUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staff_departmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staff_departmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staff_departmentCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staff_departmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staff_departmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staff_memberCreateInput = {
    id?: string;
    staff_name: string;
    staff_phone?: string | null;
    staff_address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutStaff_memberInput;
  };

  export type staff_memberUncheckedCreateInput = {
    id?: string;
    user_id: string;
    staff_name: string;
    staff_phone?: string | null;
    staff_address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staff_memberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_phone?: NullableStringFieldUpdateOperationsInput | string | null;
    staff_address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutStaff_memberNestedInput;
  };

  export type staff_memberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_phone?: NullableStringFieldUpdateOperationsInput | string | null;
    staff_address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staff_memberCreateManyInput = {
    id?: string;
    user_id: string;
    staff_name: string;
    staff_phone?: string | null;
    staff_address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staff_memberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_phone?: NullableStringFieldUpdateOperationsInput | string | null;
    staff_address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staff_memberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_phone?: NullableStringFieldUpdateOperationsInput | string | null;
    staff_address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit?: auditCreateNestedManyWithoutUserInput;
    manager?: managerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit?: auditUncheckedCreateNestedManyWithoutUserInput;
    manager?: managerUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit?: auditUpdateManyWithoutUserNestedInput;
    manager?: managerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit?: auditUncheckedUpdateManyWithoutUserNestedInput;
    manager?: managerUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput;
    isNot?: organizationWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Audit_itemListRelationFilter = {
    every?: audit_itemWhereInput;
    some?: audit_itemWhereInput;
    none?: audit_itemWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type audit_itemOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type auditCountOrderByAggregateInput = {
    id?: SortOrder;
    audit_date?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    audit_summary?: SortOrder;
    audit_audit_result?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type auditMaxOrderByAggregateInput = {
    id?: SortOrder;
    audit_date?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    audit_summary?: SortOrder;
    audit_audit_result?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type auditMinOrderByAggregateInput = {
    id?: SortOrder;
    audit_date?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    audit_summary?: SortOrder;
    audit_audit_result?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type AuditRelationFilter = {
    is?: auditWhereInput;
    isNot?: auditWhereInput;
  };

  export type audit_itemCountOrderByAggregateInput = {
    id?: SortOrder;
    audit_id?: SortOrder;
    item_name?: SortOrder;
    item_status?: SortOrder;
    item_description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_itemMaxOrderByAggregateInput = {
    id?: SortOrder;
    audit_id?: SortOrder;
    item_name?: SortOrder;
    item_status?: SortOrder;
    item_description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_itemMinOrderByAggregateInput = {
    id?: SortOrder;
    audit_id?: SortOrder;
    item_name?: SortOrder;
    item_status?: SortOrder;
    item_description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type audit_logCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_logMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_logMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_resultCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_resultMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_resultMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_statusCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_statusMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_statusMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_typeCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_typeMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_typeMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type managerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    manager_name?: SortOrder;
    manager_phone?: SortOrder;
    manager_address?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type managerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    manager_name?: SortOrder;
    manager_phone?: SortOrder;
    manager_address?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type managerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    manager_name?: SortOrder;
    manager_phone?: SortOrder;
    manager_address?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type AuditListRelationFilter = {
    every?: auditWhereInput;
    some?: auditWhereInput;
    none?: auditWhereInput;
  };

  export type auditOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type staff_departmentCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type staff_departmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type staff_departmentMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type staff_memberCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    staff_name?: SortOrder;
    staff_phone?: SortOrder;
    staff_address?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type staff_memberMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    staff_name?: SortOrder;
    staff_phone?: SortOrder;
    staff_address?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type staff_memberMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    staff_name?: SortOrder;
    staff_phone?: SortOrder;
    staff_address?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ManagerListRelationFilter = {
    every?: managerWhereInput;
    some?: managerWhereInput;
    none?: managerWhereInput;
  };

  export type OrganizationListRelationFilter = {
    every?: organizationWhereInput;
    some?: organizationWhereInput;
    none?: organizationWhereInput;
  };

  export type Staff_memberListRelationFilter = {
    every?: staff_memberWhereInput;
    some?: staff_memberWhereInput;
    none?: staff_memberWhereInput;
  };

  export type managerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type staff_memberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_roleCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_roleMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_roleMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationCreateNestedOneWithoutAuditInput = {
    create?: XOR<organizationCreateWithoutAuditInput, organizationUncheckedCreateWithoutAuditInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutAuditInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutAuditInput = {
    create?: XOR<userCreateWithoutAuditInput, userUncheckedCreateWithoutAuditInput>;
    connectOrCreate?: userCreateOrConnectWithoutAuditInput;
    connect?: userWhereUniqueInput;
  };

  export type audit_itemCreateNestedManyWithoutAuditInput = {
    create?:
      | XOR<audit_itemCreateWithoutAuditInput, audit_itemUncheckedCreateWithoutAuditInput>
      | audit_itemCreateWithoutAuditInput[]
      | audit_itemUncheckedCreateWithoutAuditInput[];
    connectOrCreate?: audit_itemCreateOrConnectWithoutAuditInput | audit_itemCreateOrConnectWithoutAuditInput[];
    createMany?: audit_itemCreateManyAuditInputEnvelope;
    connect?: audit_itemWhereUniqueInput | audit_itemWhereUniqueInput[];
  };

  export type audit_itemUncheckedCreateNestedManyWithoutAuditInput = {
    create?:
      | XOR<audit_itemCreateWithoutAuditInput, audit_itemUncheckedCreateWithoutAuditInput>
      | audit_itemCreateWithoutAuditInput[]
      | audit_itemUncheckedCreateWithoutAuditInput[];
    connectOrCreate?: audit_itemCreateOrConnectWithoutAuditInput | audit_itemCreateOrConnectWithoutAuditInput[];
    createMany?: audit_itemCreateManyAuditInputEnvelope;
    connect?: audit_itemWhereUniqueInput | audit_itemWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type organizationUpdateOneRequiredWithoutAuditNestedInput = {
    create?: XOR<organizationCreateWithoutAuditInput, organizationUncheckedCreateWithoutAuditInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutAuditInput;
    upsert?: organizationUpsertWithoutAuditInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutAuditInput, organizationUpdateWithoutAuditInput>,
      organizationUncheckedUpdateWithoutAuditInput
    >;
  };

  export type userUpdateOneRequiredWithoutAuditNestedInput = {
    create?: XOR<userCreateWithoutAuditInput, userUncheckedCreateWithoutAuditInput>;
    connectOrCreate?: userCreateOrConnectWithoutAuditInput;
    upsert?: userUpsertWithoutAuditInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAuditInput, userUpdateWithoutAuditInput>,
      userUncheckedUpdateWithoutAuditInput
    >;
  };

  export type audit_itemUpdateManyWithoutAuditNestedInput = {
    create?:
      | XOR<audit_itemCreateWithoutAuditInput, audit_itemUncheckedCreateWithoutAuditInput>
      | audit_itemCreateWithoutAuditInput[]
      | audit_itemUncheckedCreateWithoutAuditInput[];
    connectOrCreate?: audit_itemCreateOrConnectWithoutAuditInput | audit_itemCreateOrConnectWithoutAuditInput[];
    upsert?: audit_itemUpsertWithWhereUniqueWithoutAuditInput | audit_itemUpsertWithWhereUniqueWithoutAuditInput[];
    createMany?: audit_itemCreateManyAuditInputEnvelope;
    set?: audit_itemWhereUniqueInput | audit_itemWhereUniqueInput[];
    disconnect?: audit_itemWhereUniqueInput | audit_itemWhereUniqueInput[];
    delete?: audit_itemWhereUniqueInput | audit_itemWhereUniqueInput[];
    connect?: audit_itemWhereUniqueInput | audit_itemWhereUniqueInput[];
    update?: audit_itemUpdateWithWhereUniqueWithoutAuditInput | audit_itemUpdateWithWhereUniqueWithoutAuditInput[];
    updateMany?: audit_itemUpdateManyWithWhereWithoutAuditInput | audit_itemUpdateManyWithWhereWithoutAuditInput[];
    deleteMany?: audit_itemScalarWhereInput | audit_itemScalarWhereInput[];
  };

  export type audit_itemUncheckedUpdateManyWithoutAuditNestedInput = {
    create?:
      | XOR<audit_itemCreateWithoutAuditInput, audit_itemUncheckedCreateWithoutAuditInput>
      | audit_itemCreateWithoutAuditInput[]
      | audit_itemUncheckedCreateWithoutAuditInput[];
    connectOrCreate?: audit_itemCreateOrConnectWithoutAuditInput | audit_itemCreateOrConnectWithoutAuditInput[];
    upsert?: audit_itemUpsertWithWhereUniqueWithoutAuditInput | audit_itemUpsertWithWhereUniqueWithoutAuditInput[];
    createMany?: audit_itemCreateManyAuditInputEnvelope;
    set?: audit_itemWhereUniqueInput | audit_itemWhereUniqueInput[];
    disconnect?: audit_itemWhereUniqueInput | audit_itemWhereUniqueInput[];
    delete?: audit_itemWhereUniqueInput | audit_itemWhereUniqueInput[];
    connect?: audit_itemWhereUniqueInput | audit_itemWhereUniqueInput[];
    update?: audit_itemUpdateWithWhereUniqueWithoutAuditInput | audit_itemUpdateWithWhereUniqueWithoutAuditInput[];
    updateMany?: audit_itemUpdateManyWithWhereWithoutAuditInput | audit_itemUpdateManyWithWhereWithoutAuditInput[];
    deleteMany?: audit_itemScalarWhereInput | audit_itemScalarWhereInput[];
  };

  export type auditCreateNestedOneWithoutAudit_itemInput = {
    create?: XOR<auditCreateWithoutAudit_itemInput, auditUncheckedCreateWithoutAudit_itemInput>;
    connectOrCreate?: auditCreateOrConnectWithoutAudit_itemInput;
    connect?: auditWhereUniqueInput;
  };

  export type auditUpdateOneRequiredWithoutAudit_itemNestedInput = {
    create?: XOR<auditCreateWithoutAudit_itemInput, auditUncheckedCreateWithoutAudit_itemInput>;
    connectOrCreate?: auditCreateOrConnectWithoutAudit_itemInput;
    upsert?: auditUpsertWithoutAudit_itemInput;
    connect?: auditWhereUniqueInput;
    update?: XOR<
      XOR<auditUpdateToOneWithWhereWithoutAudit_itemInput, auditUpdateWithoutAudit_itemInput>,
      auditUncheckedUpdateWithoutAudit_itemInput
    >;
  };

  export type userCreateNestedOneWithoutManagerInput = {
    create?: XOR<userCreateWithoutManagerInput, userUncheckedCreateWithoutManagerInput>;
    connectOrCreate?: userCreateOrConnectWithoutManagerInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutManagerNestedInput = {
    create?: XOR<userCreateWithoutManagerInput, userUncheckedCreateWithoutManagerInput>;
    connectOrCreate?: userCreateOrConnectWithoutManagerInput;
    upsert?: userUpsertWithoutManagerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutManagerInput, userUpdateWithoutManagerInput>,
      userUncheckedUpdateWithoutManagerInput
    >;
  };

  export type auditCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<auditCreateWithoutOrganizationInput, auditUncheckedCreateWithoutOrganizationInput>
      | auditCreateWithoutOrganizationInput[]
      | auditUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: auditCreateOrConnectWithoutOrganizationInput | auditCreateOrConnectWithoutOrganizationInput[];
    createMany?: auditCreateManyOrganizationInputEnvelope;
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
  };

  export type auditUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<auditCreateWithoutOrganizationInput, auditUncheckedCreateWithoutOrganizationInput>
      | auditCreateWithoutOrganizationInput[]
      | auditUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: auditCreateOrConnectWithoutOrganizationInput | auditCreateOrConnectWithoutOrganizationInput[];
    createMany?: auditCreateManyOrganizationInputEnvelope;
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[];
  };

  export type auditUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<auditCreateWithoutOrganizationInput, auditUncheckedCreateWithoutOrganizationInput>
      | auditCreateWithoutOrganizationInput[]
      | auditUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: auditCreateOrConnectWithoutOrganizationInput | auditCreateOrConnectWithoutOrganizationInput[];
    upsert?: auditUpsertWithWhereUniqueWithoutOrganizationInput | auditUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: auditCreateManyOrganizationInputEnvelope;
    set?: auditWhereUniqueInput | auditWhereUniqueInput[];
    disconnect?: auditWhereUniqueInput | auditWhereUniqueInput[];
    delete?: auditWhereUniqueInput | auditWhereUniqueInput[];
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[];
    update?: auditUpdateWithWhereUniqueWithoutOrganizationInput | auditUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: auditUpdateManyWithWhereWithoutOrganizationInput | auditUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: auditScalarWhereInput | auditScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    upsert?: userUpsertWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOrganizationInput, userUpdateWithoutOrganizationInput>,
      userUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type auditUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<auditCreateWithoutOrganizationInput, auditUncheckedCreateWithoutOrganizationInput>
      | auditCreateWithoutOrganizationInput[]
      | auditUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: auditCreateOrConnectWithoutOrganizationInput | auditCreateOrConnectWithoutOrganizationInput[];
    upsert?: auditUpsertWithWhereUniqueWithoutOrganizationInput | auditUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: auditCreateManyOrganizationInputEnvelope;
    set?: auditWhereUniqueInput | auditWhereUniqueInput[];
    disconnect?: auditWhereUniqueInput | auditWhereUniqueInput[];
    delete?: auditWhereUniqueInput | auditWhereUniqueInput[];
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[];
    update?: auditUpdateWithWhereUniqueWithoutOrganizationInput | auditUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: auditUpdateManyWithWhereWithoutOrganizationInput | auditUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: auditScalarWhereInput | auditScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutStaff_memberInput = {
    create?: XOR<userCreateWithoutStaff_memberInput, userUncheckedCreateWithoutStaff_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutStaff_memberInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutStaff_memberNestedInput = {
    create?: XOR<userCreateWithoutStaff_memberInput, userUncheckedCreateWithoutStaff_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutStaff_memberInput;
    upsert?: userUpsertWithoutStaff_memberInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutStaff_memberInput, userUpdateWithoutStaff_memberInput>,
      userUncheckedUpdateWithoutStaff_memberInput
    >;
  };

  export type auditCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput>
      | auditCreateWithoutUserInput[]
      | auditUncheckedCreateWithoutUserInput[];
    connectOrCreate?: auditCreateOrConnectWithoutUserInput | auditCreateOrConnectWithoutUserInput[];
    createMany?: auditCreateManyUserInputEnvelope;
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[];
  };

  export type managerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<managerCreateWithoutUserInput, managerUncheckedCreateWithoutUserInput>
      | managerCreateWithoutUserInput[]
      | managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: managerCreateOrConnectWithoutUserInput | managerCreateOrConnectWithoutUserInput[];
    createMany?: managerCreateManyUserInputEnvelope;
    connect?: managerWhereUniqueInput | managerWhereUniqueInput[];
  };

  export type organizationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type staff_memberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<staff_memberCreateWithoutUserInput, staff_memberUncheckedCreateWithoutUserInput>
      | staff_memberCreateWithoutUserInput[]
      | staff_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: staff_memberCreateOrConnectWithoutUserInput | staff_memberCreateOrConnectWithoutUserInput[];
    createMany?: staff_memberCreateManyUserInputEnvelope;
    connect?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
  };

  export type auditUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput>
      | auditCreateWithoutUserInput[]
      | auditUncheckedCreateWithoutUserInput[];
    connectOrCreate?: auditCreateOrConnectWithoutUserInput | auditCreateOrConnectWithoutUserInput[];
    createMany?: auditCreateManyUserInputEnvelope;
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[];
  };

  export type managerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<managerCreateWithoutUserInput, managerUncheckedCreateWithoutUserInput>
      | managerCreateWithoutUserInput[]
      | managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: managerCreateOrConnectWithoutUserInput | managerCreateOrConnectWithoutUserInput[];
    createMany?: managerCreateManyUserInputEnvelope;
    connect?: managerWhereUniqueInput | managerWhereUniqueInput[];
  };

  export type organizationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type staff_memberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<staff_memberCreateWithoutUserInput, staff_memberUncheckedCreateWithoutUserInput>
      | staff_memberCreateWithoutUserInput[]
      | staff_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: staff_memberCreateOrConnectWithoutUserInput | staff_memberCreateOrConnectWithoutUserInput[];
    createMany?: staff_memberCreateManyUserInputEnvelope;
    connect?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
  };

  export type auditUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput>
      | auditCreateWithoutUserInput[]
      | auditUncheckedCreateWithoutUserInput[];
    connectOrCreate?: auditCreateOrConnectWithoutUserInput | auditCreateOrConnectWithoutUserInput[];
    upsert?: auditUpsertWithWhereUniqueWithoutUserInput | auditUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: auditCreateManyUserInputEnvelope;
    set?: auditWhereUniqueInput | auditWhereUniqueInput[];
    disconnect?: auditWhereUniqueInput | auditWhereUniqueInput[];
    delete?: auditWhereUniqueInput | auditWhereUniqueInput[];
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[];
    update?: auditUpdateWithWhereUniqueWithoutUserInput | auditUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: auditUpdateManyWithWhereWithoutUserInput | auditUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: auditScalarWhereInput | auditScalarWhereInput[];
  };

  export type managerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<managerCreateWithoutUserInput, managerUncheckedCreateWithoutUserInput>
      | managerCreateWithoutUserInput[]
      | managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: managerCreateOrConnectWithoutUserInput | managerCreateOrConnectWithoutUserInput[];
    upsert?: managerUpsertWithWhereUniqueWithoutUserInput | managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: managerCreateManyUserInputEnvelope;
    set?: managerWhereUniqueInput | managerWhereUniqueInput[];
    disconnect?: managerWhereUniqueInput | managerWhereUniqueInput[];
    delete?: managerWhereUniqueInput | managerWhereUniqueInput[];
    connect?: managerWhereUniqueInput | managerWhereUniqueInput[];
    update?: managerUpdateWithWhereUniqueWithoutUserInput | managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: managerUpdateManyWithWhereWithoutUserInput | managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: managerScalarWhereInput | managerScalarWhereInput[];
  };

  export type organizationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type staff_memberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<staff_memberCreateWithoutUserInput, staff_memberUncheckedCreateWithoutUserInput>
      | staff_memberCreateWithoutUserInput[]
      | staff_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: staff_memberCreateOrConnectWithoutUserInput | staff_memberCreateOrConnectWithoutUserInput[];
    upsert?: staff_memberUpsertWithWhereUniqueWithoutUserInput | staff_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: staff_memberCreateManyUserInputEnvelope;
    set?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    disconnect?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    delete?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    connect?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    update?: staff_memberUpdateWithWhereUniqueWithoutUserInput | staff_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: staff_memberUpdateManyWithWhereWithoutUserInput | staff_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: staff_memberScalarWhereInput | staff_memberScalarWhereInput[];
  };

  export type auditUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput>
      | auditCreateWithoutUserInput[]
      | auditUncheckedCreateWithoutUserInput[];
    connectOrCreate?: auditCreateOrConnectWithoutUserInput | auditCreateOrConnectWithoutUserInput[];
    upsert?: auditUpsertWithWhereUniqueWithoutUserInput | auditUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: auditCreateManyUserInputEnvelope;
    set?: auditWhereUniqueInput | auditWhereUniqueInput[];
    disconnect?: auditWhereUniqueInput | auditWhereUniqueInput[];
    delete?: auditWhereUniqueInput | auditWhereUniqueInput[];
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[];
    update?: auditUpdateWithWhereUniqueWithoutUserInput | auditUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: auditUpdateManyWithWhereWithoutUserInput | auditUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: auditScalarWhereInput | auditScalarWhereInput[];
  };

  export type managerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<managerCreateWithoutUserInput, managerUncheckedCreateWithoutUserInput>
      | managerCreateWithoutUserInput[]
      | managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: managerCreateOrConnectWithoutUserInput | managerCreateOrConnectWithoutUserInput[];
    upsert?: managerUpsertWithWhereUniqueWithoutUserInput | managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: managerCreateManyUserInputEnvelope;
    set?: managerWhereUniqueInput | managerWhereUniqueInput[];
    disconnect?: managerWhereUniqueInput | managerWhereUniqueInput[];
    delete?: managerWhereUniqueInput | managerWhereUniqueInput[];
    connect?: managerWhereUniqueInput | managerWhereUniqueInput[];
    update?: managerUpdateWithWhereUniqueWithoutUserInput | managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: managerUpdateManyWithWhereWithoutUserInput | managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: managerScalarWhereInput | managerScalarWhereInput[];
  };

  export type organizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type staff_memberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<staff_memberCreateWithoutUserInput, staff_memberUncheckedCreateWithoutUserInput>
      | staff_memberCreateWithoutUserInput[]
      | staff_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: staff_memberCreateOrConnectWithoutUserInput | staff_memberCreateOrConnectWithoutUserInput[];
    upsert?: staff_memberUpsertWithWhereUniqueWithoutUserInput | staff_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: staff_memberCreateManyUserInputEnvelope;
    set?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    disconnect?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    delete?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    connect?: staff_memberWhereUniqueInput | staff_memberWhereUniqueInput[];
    update?: staff_memberUpdateWithWhereUniqueWithoutUserInput | staff_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: staff_memberUpdateManyWithWhereWithoutUserInput | staff_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: staff_memberScalarWhereInput | staff_memberScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type organizationCreateWithoutAuditInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutAuditInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationCreateOrConnectWithoutAuditInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutAuditInput, organizationUncheckedCreateWithoutAuditInput>;
  };

  export type userCreateWithoutAuditInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    manager?: managerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAuditInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    manager?: managerUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAuditInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAuditInput, userUncheckedCreateWithoutAuditInput>;
  };

  export type audit_itemCreateWithoutAuditInput = {
    id?: string;
    item_name: string;
    item_status: string;
    item_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_itemUncheckedCreateWithoutAuditInput = {
    id?: string;
    item_name: string;
    item_status: string;
    item_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_itemCreateOrConnectWithoutAuditInput = {
    where: audit_itemWhereUniqueInput;
    create: XOR<audit_itemCreateWithoutAuditInput, audit_itemUncheckedCreateWithoutAuditInput>;
  };

  export type audit_itemCreateManyAuditInputEnvelope = {
    data: audit_itemCreateManyAuditInput | audit_itemCreateManyAuditInput[];
    skipDuplicates?: boolean;
  };

  export type organizationUpsertWithoutAuditInput = {
    update: XOR<organizationUpdateWithoutAuditInput, organizationUncheckedUpdateWithoutAuditInput>;
    create: XOR<organizationCreateWithoutAuditInput, organizationUncheckedCreateWithoutAuditInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutAuditInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutAuditInput, organizationUncheckedUpdateWithoutAuditInput>;
  };

  export type organizationUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutAuditInput = {
    update: XOR<userUpdateWithoutAuditInput, userUncheckedUpdateWithoutAuditInput>;
    create: XOR<userCreateWithoutAuditInput, userUncheckedCreateWithoutAuditInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAuditInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAuditInput, userUncheckedUpdateWithoutAuditInput>;
  };

  export type userUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    manager?: managerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    manager?: managerUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type audit_itemUpsertWithWhereUniqueWithoutAuditInput = {
    where: audit_itemWhereUniqueInput;
    update: XOR<audit_itemUpdateWithoutAuditInput, audit_itemUncheckedUpdateWithoutAuditInput>;
    create: XOR<audit_itemCreateWithoutAuditInput, audit_itemUncheckedCreateWithoutAuditInput>;
  };

  export type audit_itemUpdateWithWhereUniqueWithoutAuditInput = {
    where: audit_itemWhereUniqueInput;
    data: XOR<audit_itemUpdateWithoutAuditInput, audit_itemUncheckedUpdateWithoutAuditInput>;
  };

  export type audit_itemUpdateManyWithWhereWithoutAuditInput = {
    where: audit_itemScalarWhereInput;
    data: XOR<audit_itemUpdateManyMutationInput, audit_itemUncheckedUpdateManyWithoutAuditInput>;
  };

  export type audit_itemScalarWhereInput = {
    AND?: audit_itemScalarWhereInput | audit_itemScalarWhereInput[];
    OR?: audit_itemScalarWhereInput[];
    NOT?: audit_itemScalarWhereInput | audit_itemScalarWhereInput[];
    id?: UuidFilter<'audit_item'> | string;
    audit_id?: UuidFilter<'audit_item'> | string;
    item_name?: StringFilter<'audit_item'> | string;
    item_status?: StringFilter<'audit_item'> | string;
    item_description?: StringNullableFilter<'audit_item'> | string | null;
    created_at?: DateTimeFilter<'audit_item'> | Date | string;
    updated_at?: DateTimeFilter<'audit_item'> | Date | string;
  };

  export type auditCreateWithoutAudit_itemInput = {
    id?: string;
    audit_date: Date | string;
    audit_summary?: string | null;
    audit_audit_result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutAuditInput;
    user: userCreateNestedOneWithoutAuditInput;
  };

  export type auditUncheckedCreateWithoutAudit_itemInput = {
    id?: string;
    audit_date: Date | string;
    user_id: string;
    organization_id: string;
    audit_summary?: string | null;
    audit_audit_result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type auditCreateOrConnectWithoutAudit_itemInput = {
    where: auditWhereUniqueInput;
    create: XOR<auditCreateWithoutAudit_itemInput, auditUncheckedCreateWithoutAudit_itemInput>;
  };

  export type auditUpsertWithoutAudit_itemInput = {
    update: XOR<auditUpdateWithoutAudit_itemInput, auditUncheckedUpdateWithoutAudit_itemInput>;
    create: XOR<auditCreateWithoutAudit_itemInput, auditUncheckedCreateWithoutAudit_itemInput>;
    where?: auditWhereInput;
  };

  export type auditUpdateToOneWithWhereWithoutAudit_itemInput = {
    where?: auditWhereInput;
    data: XOR<auditUpdateWithoutAudit_itemInput, auditUncheckedUpdateWithoutAudit_itemInput>;
  };

  export type auditUpdateWithoutAudit_itemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    audit_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit_summary?: NullableStringFieldUpdateOperationsInput | string | null;
    audit_audit_result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutAuditNestedInput;
    user?: userUpdateOneRequiredWithoutAuditNestedInput;
  };

  export type auditUncheckedUpdateWithoutAudit_itemInput = {
    id?: StringFieldUpdateOperationsInput | string;
    audit_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    audit_summary?: NullableStringFieldUpdateOperationsInput | string | null;
    audit_audit_result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateWithoutManagerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit?: auditCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutManagerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit?: auditUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutManagerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutManagerInput, userUncheckedCreateWithoutManagerInput>;
  };

  export type userUpsertWithoutManagerInput = {
    update: XOR<userUpdateWithoutManagerInput, userUncheckedUpdateWithoutManagerInput>;
    create: XOR<userCreateWithoutManagerInput, userUncheckedCreateWithoutManagerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutManagerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutManagerInput, userUncheckedUpdateWithoutManagerInput>;
  };

  export type userUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit?: auditUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit?: auditUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type auditCreateWithoutOrganizationInput = {
    id?: string;
    audit_date: Date | string;
    audit_summary?: string | null;
    audit_audit_result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutAuditInput;
    audit_item?: audit_itemCreateNestedManyWithoutAuditInput;
  };

  export type auditUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    audit_date: Date | string;
    user_id: string;
    audit_summary?: string | null;
    audit_audit_result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_item?: audit_itemUncheckedCreateNestedManyWithoutAuditInput;
  };

  export type auditCreateOrConnectWithoutOrganizationInput = {
    where: auditWhereUniqueInput;
    create: XOR<auditCreateWithoutOrganizationInput, auditUncheckedCreateWithoutOrganizationInput>;
  };

  export type auditCreateManyOrganizationInputEnvelope = {
    data: auditCreateManyOrganizationInput | auditCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit?: auditCreateNestedManyWithoutUserInput;
    manager?: managerCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit?: auditUncheckedCreateNestedManyWithoutUserInput;
    manager?: managerUncheckedCreateNestedManyWithoutUserInput;
    staff_member?: staff_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type auditUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: auditWhereUniqueInput;
    update: XOR<auditUpdateWithoutOrganizationInput, auditUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<auditCreateWithoutOrganizationInput, auditUncheckedCreateWithoutOrganizationInput>;
  };

  export type auditUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: auditWhereUniqueInput;
    data: XOR<auditUpdateWithoutOrganizationInput, auditUncheckedUpdateWithoutOrganizationInput>;
  };

  export type auditUpdateManyWithWhereWithoutOrganizationInput = {
    where: auditScalarWhereInput;
    data: XOR<auditUpdateManyMutationInput, auditUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type auditScalarWhereInput = {
    AND?: auditScalarWhereInput | auditScalarWhereInput[];
    OR?: auditScalarWhereInput[];
    NOT?: auditScalarWhereInput | auditScalarWhereInput[];
    id?: UuidFilter<'audit'> | string;
    audit_date?: DateTimeFilter<'audit'> | Date | string;
    user_id?: UuidFilter<'audit'> | string;
    organization_id?: UuidFilter<'audit'> | string;
    audit_summary?: StringNullableFilter<'audit'> | string | null;
    audit_audit_result?: StringNullableFilter<'audit'> | string | null;
    created_at?: DateTimeFilter<'audit'> | Date | string;
    updated_at?: DateTimeFilter<'audit'> | Date | string;
  };

  export type userUpsertWithoutOrganizationInput = {
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit?: auditUpdateManyWithoutUserNestedInput;
    manager?: managerUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit?: auditUncheckedUpdateManyWithoutUserNestedInput;
    manager?: managerUncheckedUpdateManyWithoutUserNestedInput;
    staff_member?: staff_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutStaff_memberInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit?: auditCreateNestedManyWithoutUserInput;
    manager?: managerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutStaff_memberInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit?: auditUncheckedCreateNestedManyWithoutUserInput;
    manager?: managerUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutStaff_memberInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutStaff_memberInput, userUncheckedCreateWithoutStaff_memberInput>;
  };

  export type userUpsertWithoutStaff_memberInput = {
    update: XOR<userUpdateWithoutStaff_memberInput, userUncheckedUpdateWithoutStaff_memberInput>;
    create: XOR<userCreateWithoutStaff_memberInput, userUncheckedCreateWithoutStaff_memberInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutStaff_memberInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutStaff_memberInput, userUncheckedUpdateWithoutStaff_memberInput>;
  };

  export type userUpdateWithoutStaff_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit?: auditUpdateManyWithoutUserNestedInput;
    manager?: managerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutStaff_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit?: auditUncheckedUpdateManyWithoutUserNestedInput;
    manager?: managerUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type auditCreateWithoutUserInput = {
    id?: string;
    audit_date: Date | string;
    audit_summary?: string | null;
    audit_audit_result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutAuditInput;
    audit_item?: audit_itemCreateNestedManyWithoutAuditInput;
  };

  export type auditUncheckedCreateWithoutUserInput = {
    id?: string;
    audit_date: Date | string;
    organization_id: string;
    audit_summary?: string | null;
    audit_audit_result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_item?: audit_itemUncheckedCreateNestedManyWithoutAuditInput;
  };

  export type auditCreateOrConnectWithoutUserInput = {
    where: auditWhereUniqueInput;
    create: XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput>;
  };

  export type auditCreateManyUserInputEnvelope = {
    data: auditCreateManyUserInput | auditCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type managerCreateWithoutUserInput = {
    id?: string;
    manager_name: string;
    manager_phone?: string | null;
    manager_address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type managerUncheckedCreateWithoutUserInput = {
    id?: string;
    manager_name: string;
    manager_phone?: string | null;
    manager_address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type managerCreateOrConnectWithoutUserInput = {
    where: managerWhereUniqueInput;
    create: XOR<managerCreateWithoutUserInput, managerUncheckedCreateWithoutUserInput>;
  };

  export type managerCreateManyUserInputEnvelope = {
    data: managerCreateManyUserInput | managerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    audit?: auditCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    audit?: auditUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationCreateManyUserInputEnvelope = {
    data: organizationCreateManyUserInput | organizationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type staff_memberCreateWithoutUserInput = {
    id?: string;
    staff_name: string;
    staff_phone?: string | null;
    staff_address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staff_memberUncheckedCreateWithoutUserInput = {
    id?: string;
    staff_name: string;
    staff_phone?: string | null;
    staff_address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staff_memberCreateOrConnectWithoutUserInput = {
    where: staff_memberWhereUniqueInput;
    create: XOR<staff_memberCreateWithoutUserInput, staff_memberUncheckedCreateWithoutUserInput>;
  };

  export type staff_memberCreateManyUserInputEnvelope = {
    data: staff_memberCreateManyUserInput | staff_memberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type auditUpsertWithWhereUniqueWithoutUserInput = {
    where: auditWhereUniqueInput;
    update: XOR<auditUpdateWithoutUserInput, auditUncheckedUpdateWithoutUserInput>;
    create: XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput>;
  };

  export type auditUpdateWithWhereUniqueWithoutUserInput = {
    where: auditWhereUniqueInput;
    data: XOR<auditUpdateWithoutUserInput, auditUncheckedUpdateWithoutUserInput>;
  };

  export type auditUpdateManyWithWhereWithoutUserInput = {
    where: auditScalarWhereInput;
    data: XOR<auditUpdateManyMutationInput, auditUncheckedUpdateManyWithoutUserInput>;
  };

  export type managerUpsertWithWhereUniqueWithoutUserInput = {
    where: managerWhereUniqueInput;
    update: XOR<managerUpdateWithoutUserInput, managerUncheckedUpdateWithoutUserInput>;
    create: XOR<managerCreateWithoutUserInput, managerUncheckedCreateWithoutUserInput>;
  };

  export type managerUpdateWithWhereUniqueWithoutUserInput = {
    where: managerWhereUniqueInput;
    data: XOR<managerUpdateWithoutUserInput, managerUncheckedUpdateWithoutUserInput>;
  };

  export type managerUpdateManyWithWhereWithoutUserInput = {
    where: managerScalarWhereInput;
    data: XOR<managerUpdateManyMutationInput, managerUncheckedUpdateManyWithoutUserInput>;
  };

  export type managerScalarWhereInput = {
    AND?: managerScalarWhereInput | managerScalarWhereInput[];
    OR?: managerScalarWhereInput[];
    NOT?: managerScalarWhereInput | managerScalarWhereInput[];
    id?: UuidFilter<'manager'> | string;
    user_id?: UuidFilter<'manager'> | string;
    manager_name?: StringFilter<'manager'> | string;
    manager_phone?: StringNullableFilter<'manager'> | string | null;
    manager_address?: StringNullableFilter<'manager'> | string | null;
    created_at?: DateTimeFilter<'manager'> | Date | string;
    updated_at?: DateTimeFilter<'manager'> | Date | string;
  };

  export type organizationUpsertWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationUpdateWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateManyWithWhereWithoutUserInput = {
    where: organizationScalarWhereInput;
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationScalarWhereInput = {
    AND?: organizationScalarWhereInput | organizationScalarWhereInput[];
    OR?: organizationScalarWhereInput[];
    NOT?: organizationScalarWhereInput | organizationScalarWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    address?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
  };

  export type staff_memberUpsertWithWhereUniqueWithoutUserInput = {
    where: staff_memberWhereUniqueInput;
    update: XOR<staff_memberUpdateWithoutUserInput, staff_memberUncheckedUpdateWithoutUserInput>;
    create: XOR<staff_memberCreateWithoutUserInput, staff_memberUncheckedCreateWithoutUserInput>;
  };

  export type staff_memberUpdateWithWhereUniqueWithoutUserInput = {
    where: staff_memberWhereUniqueInput;
    data: XOR<staff_memberUpdateWithoutUserInput, staff_memberUncheckedUpdateWithoutUserInput>;
  };

  export type staff_memberUpdateManyWithWhereWithoutUserInput = {
    where: staff_memberScalarWhereInput;
    data: XOR<staff_memberUpdateManyMutationInput, staff_memberUncheckedUpdateManyWithoutUserInput>;
  };

  export type staff_memberScalarWhereInput = {
    AND?: staff_memberScalarWhereInput | staff_memberScalarWhereInput[];
    OR?: staff_memberScalarWhereInput[];
    NOT?: staff_memberScalarWhereInput | staff_memberScalarWhereInput[];
    id?: UuidFilter<'staff_member'> | string;
    user_id?: UuidFilter<'staff_member'> | string;
    staff_name?: StringFilter<'staff_member'> | string;
    staff_phone?: StringNullableFilter<'staff_member'> | string | null;
    staff_address?: StringNullableFilter<'staff_member'> | string | null;
    created_at?: DateTimeFilter<'staff_member'> | Date | string;
    updated_at?: DateTimeFilter<'staff_member'> | Date | string;
  };

  export type audit_itemCreateManyAuditInput = {
    id?: string;
    item_name: string;
    item_status: string;
    item_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_itemUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string;
    item_name?: StringFieldUpdateOperationsInput | string;
    item_status?: StringFieldUpdateOperationsInput | string;
    item_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_itemUncheckedUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string;
    item_name?: StringFieldUpdateOperationsInput | string;
    item_status?: StringFieldUpdateOperationsInput | string;
    item_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_itemUncheckedUpdateManyWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string;
    item_name?: StringFieldUpdateOperationsInput | string;
    item_status?: StringFieldUpdateOperationsInput | string;
    item_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type auditCreateManyOrganizationInput = {
    id?: string;
    audit_date: Date | string;
    user_id: string;
    audit_summary?: string | null;
    audit_audit_result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type auditUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    audit_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit_summary?: NullableStringFieldUpdateOperationsInput | string | null;
    audit_audit_result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutAuditNestedInput;
    audit_item?: audit_itemUpdateManyWithoutAuditNestedInput;
  };

  export type auditUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    audit_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    audit_summary?: NullableStringFieldUpdateOperationsInput | string | null;
    audit_audit_result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit_item?: audit_itemUncheckedUpdateManyWithoutAuditNestedInput;
  };

  export type auditUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    audit_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    audit_summary?: NullableStringFieldUpdateOperationsInput | string | null;
    audit_audit_result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type auditCreateManyUserInput = {
    id?: string;
    audit_date: Date | string;
    organization_id: string;
    audit_summary?: string | null;
    audit_audit_result?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type managerCreateManyUserInput = {
    id?: string;
    manager_name: string;
    manager_phone?: string | null;
    manager_address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type staff_memberCreateManyUserInput = {
    id?: string;
    staff_name: string;
    staff_phone?: string | null;
    staff_address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type auditUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    audit_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit_summary?: NullableStringFieldUpdateOperationsInput | string | null;
    audit_audit_result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutAuditNestedInput;
    audit_item?: audit_itemUpdateManyWithoutAuditNestedInput;
  };

  export type auditUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    audit_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    audit_summary?: NullableStringFieldUpdateOperationsInput | string | null;
    audit_audit_result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit_item?: audit_itemUncheckedUpdateManyWithoutAuditNestedInput;
  };

  export type auditUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    audit_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    audit_summary?: NullableStringFieldUpdateOperationsInput | string | null;
    audit_audit_result?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type managerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    manager_name?: StringFieldUpdateOperationsInput | string;
    manager_phone?: NullableStringFieldUpdateOperationsInput | string | null;
    manager_address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type managerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    manager_name?: StringFieldUpdateOperationsInput | string;
    manager_phone?: NullableStringFieldUpdateOperationsInput | string | null;
    manager_address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type managerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    manager_name?: StringFieldUpdateOperationsInput | string;
    manager_phone?: NullableStringFieldUpdateOperationsInput | string | null;
    manager_address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    audit?: auditUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    audit?: auditUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type staff_memberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_phone?: NullableStringFieldUpdateOperationsInput | string | null;
    staff_address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staff_memberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_phone?: NullableStringFieldUpdateOperationsInput | string | null;
    staff_address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staff_memberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    staff_name?: StringFieldUpdateOperationsInput | string;
    staff_phone?: NullableStringFieldUpdateOperationsInput | string | null;
    staff_address?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use AuditCountOutputTypeDefaultArgs instead
   */
  export type AuditCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    AuditCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use auditDefaultArgs instead
   */
  export type auditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = auditDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use audit_itemDefaultArgs instead
   */
  export type audit_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    audit_itemDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use audit_logDefaultArgs instead
   */
  export type audit_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    audit_logDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use audit_resultDefaultArgs instead
   */
  export type audit_resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    audit_resultDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use audit_statusDefaultArgs instead
   */
  export type audit_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    audit_statusDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use audit_typeDefaultArgs instead
   */
  export type audit_typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    audit_typeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use managerDefaultArgs instead
   */
  export type managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    managerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use staff_departmentDefaultArgs instead
   */
  export type staff_departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    staff_departmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use staff_memberDefaultArgs instead
   */
  export type staff_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    staff_memberDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use user_roleDefaultArgs instead
   */
  export type user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    user_roleDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
