export type QueryOptions = {
  populate?: boolean;
};

export type DAOQueryOptions = {
  projection?;
  skip?: number;
  limit?: number;
};

export type DocumentTimestamps = {
  createdAt;
  updatedAt;
};
