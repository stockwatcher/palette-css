
var Content = React.createClass({
  render: function() {
    return (
      <div>
        Color Palette
        <div className="row">
          <div className="col s2 green darken-2">green darken-2</div>
          <div className="col s2 light-green">light-green</div>
          <div className="col s2 yellow">yellow</div>
          <div className="col s2 red">red darken-1</div>
          <div className="col s2 red darken-3">red darken-3</div>
        </div>

        Grid System
        <div className="row">
          <div className="col s1 red">1</div>
          <div className="col s2 orange">2</div>
          <div className="col s3 yellow">3</div>
          <div className="col s3 green">4</div>
          <div className="col s2 blue">5</div>
          <div className="col s1 purple">6</div>
        </div>

        Grid-Based Table of Updates
        <div>
          <div className="row">
            <div className="col offset-s3 s6 striped-1">
              <div className="update">
                <div className="avatar-image pull-left indigo"></div>
                <div className="update-content">
                  <div className="update-header">
                    <div className="left">Example Left Header</div>
                    <div className="right">Example Right Header</div>
                  </div>
                  <div>Example content with words and lots of cool text.</div>
                </div>
              </div>
              <div className="update">
                <div className="avatar-image pull-left indigo"></div>
                <div className="update-content">
                  <div>This update shows off the striped-n mixin.</div>
                </div>
              </div>
              <div className="update">
                <div className="avatar-image pull-left indigo"></div>
                <div className="update-content"></div>
              </div>
            </div>
          </div>
        </div>

        Labels
        <div>
          Badges
          <div className="pl-badge">9</div>
          <div className="pl-badge green">99</div>
          <div className="pl-badge red">99+</div>
        </div>
        <div>
          Tags
          <div className="tag">Tag Content</div>
          <div className="tag">Tag Content 2</div>
        </div>
      </div>
    )
  }
});

React.render(
  <div>
    <Content />
  </div>,
  document.getElementById('container')
);

