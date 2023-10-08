import ProfileItem from "./ProfileItem";

export default function ProfileList({ profiles }) {
  return (
    <ul>
      {profiles.length
        ? profiles.map((profile) => (
            <li key={`profile-${profile?.id}`}>
              <ProfileItem {...profile} />
            </li>
          ))
        : "No profiles found"}
    </ul>
  );
}
