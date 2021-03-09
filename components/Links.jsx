const Links = ({ selectedWork }) => {
  const primaryMediaPath = selectedWork.media[0];
  const RepoLink = () =>
    selectedWork.repo ? (
      <a
        class='text-blue-400 text-sm hover:underline'
        href={selectedWork.repo}
        target='_blank'
      >
        &nbsp;VIEW REPO&nbsp;
      </a>
    ) : null;
  const SiteLink = () =>
    selectedWork.siteUrl ? (
      <a
        class='text-blue-400 text-sm hover:underline'
        href={selectedWork.siteUrl}
        target='_blank'
      >
        &nbsp;VIEW SITE&nbsp;
      </a>
    ) : null;

  return (
    <>
      <div class='text-right mt-2'>
        {RepoLink() !== null && SiteLink() !== null ? (
          <>
            <RepoLink />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SiteLink />
          </>
        ) : RepoLink() !== null ? (
          <>
            <RepoLink />
          </>
        ) : SiteLink() !== null ? (
          <>
            <SiteLink />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Links;
