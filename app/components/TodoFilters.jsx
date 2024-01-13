import React from "react";
import { FiltersContainer, FilterButton } from "./TodoFilters.components";

export const TodoFilters = ({
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
}) => {
  console.log(activeFilter);
  return (
    <div>
      <FiltersContainer>
        <FilterButton
          action={() => showAllTodos()}
          active={activeFilter}
          filter="All"
        />
        <FilterButton
          action={() => showActiveTodos()}
          active={activeFilter}
          filter="Active"
        />
        <FilterButton
          action={() => showCompletedTodos()}
          active={activeFilter}
          filter="Completed"
        />
      </FiltersContainer>
    </div>
  );
};
