import React from 'react';
import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeFilter } from 'redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = event =>
    dispatch(changeFilter(event.target.value));

  return (
    <Label name="filter" htmlFor="filter" value={filter}>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        id="filter"
        onChange={handleChangeFilter}
      />
    </Label>
  );
};

export default Filter;
