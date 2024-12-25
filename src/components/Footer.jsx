export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="px-2 py-2">
        <div className="flex items-center justify-center text-center px-7 py-7 bg-gray-100 rounded-lg">
          <p className="w-full">
            © {year}
            <a
              href="https://github.com/ferd14nsyah"
              className="font-medium underline"
            >
              {""} Ferdiansyah {""}
            </a>
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
