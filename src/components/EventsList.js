import styles from "./EventsList.module.css";

function EventsList({ event }) {
  return (
    <div className={styles.events}>
      <h1>All Events</h1>
      <ul className={styles.list}>
        {event.mao((event) => (
          <li className={styles.item}>
            <a href="/">Image</a>
            <img src={event.image} alt={event.title} />
            <div className={styles.content}>
              <h2>{event.title}</h2>
              <time>{event.date}</time>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
