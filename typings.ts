/* eslint-disable */
export type Schema = {
  '_CategoryToPost': {
    plain: {
      'A': string;
      'B': string;
    };
    nested: {
      'Category': Schema['Category']['plain'] & Schema['Category']['nested'];
      'Post': Schema['Post']['plain'] & Schema['Post']['nested'];
    };
    flat: {
      'Category:id': string;
      'Category:name': string;
      'Category:createdAt': string;
      'Category:updatedAt': string;
      'Post:id': string;
      'Post:title': string;
      'Post:body': string;
      'Post:userId': string;
      'Post:createdAt': string;
      'Post:updatedAt': string;
      'Post:user:id': string;
      'Post:user:name': string;
      'Post:user:email': string;
      'Post:user:password': string;
      'Post:user:createdAt': string;
      'Post:user:updatedAt': string;
    };
  };
  '_prisma_migrations': {
    plain: {
      'id': string;
      'checksum': string;
      'finished_at': string;
      'migration_name': string;
      'logs': string;
      'rolled_back_at': string;
      'started_at': string;
      'applied_steps_count': number;
    };
    nested: {};
    flat: {};
  };
  'Category': {
    plain: {
      'id': string;
      'name': string;
      'createdAt': string;
      'updatedAt': string;
    };
    nested: {};
    flat: {};
  };
  'Post': {
    plain: {
      'id': string;
      'title': string;
      'body': string;
      'userId': string;
      'createdAt': string;
      'updatedAt': string;
    };
    nested: {
      'user': Schema['User']['plain'] & Schema['User']['nested'];
    };
    flat: {
      'user:id': string;
      'user:name': string;
      'user:email': string;
      'user:password': string;
      'user:createdAt': string;
      'user:updatedAt': string;
    };
  };
  'User': {
    plain: {
      'id': string;
      'name': string;
      'email': string;
      'password': string;
      'createdAt': string;
      'updatedAt': string;
    };
    nested: {};
    flat: {};
  };
};
