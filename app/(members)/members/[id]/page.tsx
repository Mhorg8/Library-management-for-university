import UserCardImageView from "@/app/components/UserCardImageView";
import UserCardTextView from "@/app/components/UserCardTextView";

interface Props {
  params: Promise<{ id: string }>;
}

const UserProfile = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <div className="relative w-full h-[calc(100dvh-70px)] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[url(/bg-texture.jpg)] bg-cover bg-center bg-opacity-10"
        style={{ opacity: 0.2 }}
      ></div>
      <div className=" z-10 user__card-wrapper shadow-md">
        {/* image box */}
        <UserCardImageView />
        {/* text */}
        <UserCardTextView userId={id} />
      </div>
    </div>
  );
};

export default UserProfile;
