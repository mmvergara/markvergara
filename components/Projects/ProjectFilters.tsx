import { useState } from "react";

type ProjectTagsFilterProps = {
  activeTags: string[];
  availableTags: string[];
  onAddTags: (tag: string) => void;
  onRemoveTags: (tag: string) => void;
};
const ProjectTagsFilter = (props: ProjectTagsFilterProps) => {
  const [openTagFilter, setOpenTagFilter] = useState(false);
  const {
    activeTags,
    availableTags: initialTags,
    onAddTags,
    onRemoveTags,
  } = props;
  console.log(activeTags);
  // sort by alphabetical order
  const availableTags = initialTags
    .filter((tag) => !activeTags.includes(tag))
    .sort();

  return (
    <>
      <div className="flex flex-wrap gap-2 mt-2 w-full">
        <div className="flex justify-between items-center">
          <button
            className="bg-nightOwlBlue px-2 text-lg text-gray-800 font-bold"
            onClick={() => {
              setOpenTagFilter(!openTagFilter);
            }}
          >
            {openTagFilter ? "Close Filters" : "Open Filters"}
          </button>
        </div>
        {openTagFilter && (
          <>
            {" "}
            <div className="w-full">
              <p>Available Tags</p>
              <div className="flex gap-2 flex-wrap ">
                {availableTags.map((tag) => {
                  return (
                    <button
                      key={tag}
                      className={`bg-gray-800 px-2 py-1 ${tag} text-sm`}
                      onClick={() => {
                        if (activeTags.includes(tag)) {
                          onRemoveTags(tag);
                        } else {
                          onAddTags(tag);
                        }
                      }}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="w-full" >
              <p>Active Tags</p>
              <div className="flex gap-2 flex-wrap">
                {activeTags.map((tag) => {
                  return (
                    <button
                      key={tag}
                      className={`bg-gray-800 px-2 py-1 ${tag} text-sm`}
                      onClick={() => {
                        if (activeTags.includes(tag)) {
                          onRemoveTags(tag);
                        } else {
                          onAddTags(tag);
                        }
                      }}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProjectTagsFilter;
