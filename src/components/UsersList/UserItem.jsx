import React from 'react';

function UserItem({ data, handleDelete }) {
  return (
    <li className="user-item">
      <h2 className="user-item__title">
        {data.name}
        {` "${data.username}"`}
      </h2>
      <p className="user-item__description">
        Contact details:
      </p>
      <div className="user-item__contacts">
        <p className="user-item__contact">
          Email:
          {' '}
          <a className="user-item__link" href={`mailto:${data.email}`}>{data.email}</a>
        </p>
        <p className="user-item__contact">
          Phone number:
          {' '}
          <a className="user-item__link" href={`tel:${data.phone}`}>{data.phone}</a>
        </p>
        <p className="user-item__contact">
          Website:
          {' '}
          <a className="user-item__link" href={`https://${data.website}`} target="_blank">{data.website}</a>
        </p>
        <p className="user-item__contact">
          Company:
          {' '}
          {data.company.name}
        </p>
        <p className="user-item__contact">
          Address:
          {' '}
          <a
            className="user-item__link"
            href={`https://yandex.ru/maps/?ll=${data.address.geo.lat}%2C${data.address.geo.lng}&z=12`}
            target="_blank"
          >
            {`${data.address.city} ${data.address.street} ${data.address.suite}`}
          </a>
        </p>
      </div>
      <button className="user-item__button" type="button" onClick={() => handleDelete(data.id)}>
        Удалить пользователя
      </button>
    </li>
  );
}

export default UserItem;
