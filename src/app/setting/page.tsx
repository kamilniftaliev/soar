import { Input as OriginalInput, type InputProps, Tabs } from "@/components";
import { USER_INFO as user } from "@/constants";
import { PenIcon } from "@/icons";
import Image from "next/image";

const Input = (props: InputProps) => (
  <OriginalInput
    containerClassName="grow basis-72"
    className="border border-azure rounded-small sm:rounded-medium px-[15px] sm:px-5 text-color-sky"
    {...props}
  />
);

export default function Setting() {
  return (
    <div className="bg-white px-container py-3 rounded-container">
      <Tabs>
        <form title="Edit Profile">
          <div className="sm:flex gap-7">
            <div className="flex justify-center basis-36 shrink-0">
              <div className="relative w-[100px] h-[100px] sm:w-[90px] sm:h-[90px]">
                <Image
                  src="/profile-photo.png"
                  alt="Profile photo"
                  width={100}
                  height={100}
                />
                <button className="p-2 rounded-full bg-black absolute -right-2 bottom-0">
                  <PenIcon className="text-white" />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-7 gap-y-4 sm:gap-y-5">
              <Input label="Your Name" defaultValue={user.fullName} />
              <Input label="User Name" defaultValue={user.username} />
              <Input label="Email" defaultValue={user.email} />
              <Input
                label="Password"
                type="password"
                defaultValue={user.password}
              />
              <Input
                label="Date of Birth"
                type="date"
                defaultValue={user.birthDate}
              />
              <Input
                label="Present Address"
                defaultValue={user.presentAddress}
              />
              <Input
                label="Permanent Address"
                defaultValue={user.permanentAddress}
              />
              <Input label="City" defaultValue={user.city} />
              <Input label="Postal Code" defaultValue={user.postalCode} />
              <Input label="Country" defaultValue={user.country} />
            </div>
          </div>
          <div className="flex sm:justify-end">
            <button
              className="py-[11px] sm:py-[14px] leading-[18px] sm:leading-[22px] mt-4 sm:mt-10 text-sm sm:text-lg bg-black text-white w-full sm:w-48 rounded-small sm:rounded-medium"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
        <div title="Preferences">
          <p className="text-center sm:text-xl">Preferences tab content</p>
        </div>
        <div title="Security">
          <p className="text-center sm:text-xl">Security tab content</p>
        </div>
      </Tabs>
    </div>
  );
}
