const Links = ({ selectedWork }) => {
  const primaryMediaPath = selectedWork.media[0];
  const RepoLink = () =>
    selectedWork.repo ? (
      <a
        class='text-gray-400 text-sm hover:text-blue-400'
        href={selectedWork.repo}
        target='_blank'
      >
        &nbsp;REPO&nbsp;
      </a>
    ) : null;
  const SiteLink = () =>
    selectedWork.siteUrl ? (
      <a
        class='text-gray-400 text-sm hover:text-blue-400'
        href={selectedWork.siteUrl}
        target='_blank'
      >
        &nbsp;SITE&nbsp;
      </a>
    ) : null;

  return (
    <>
      <span class='text-gray-100'>
        {RepoLink() !== null && SiteLink() !== null ? (
          <>
            [<RepoLink />] [<SiteLink />]
          </>
        ) : RepoLink() !== null ? (
          <>
            [<RepoLink />]
          </>
        ) : SiteLink() !== null ? (
          <>
            [<SiteLink />]
          </>
        ) : null}
      </span>
    </>
  );
};

export default Links;
