function useInvalidateAccessToken() {}

function useInvalidateAccessTokenWithLogic() {
  const ok = useInvalidateAccessToken();
  return ok;
}

export { useInvalidateAccessToken, useInvalidateAccessTokenWithLogic };
