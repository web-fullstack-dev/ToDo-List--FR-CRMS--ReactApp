import React from "react";
import { Wrapper } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import Input from "../../Input";
import searchQueryParamName from "../searchQueryParamName";

export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Wrapper>
      <Input 
        placeholder="Filtrer les tâches"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};