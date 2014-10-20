$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse')
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse')
        }

        height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    })
})
$(function(){ // on dom ready

$('#cy').cytoscape({
  layout: {
    name: 'circle',
    padding: 10
  },
  
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'width': '50px',
        'height': '50px',
        'content': 'data(name)',
        'pie-size': '80%',
        'pie-1-background-color': '#E8747C',
        'pie-1-background-size': 'mapData(foo, 0, 10, 0, 100)',
        'pie-2-background-color': '#74CBE8',
        'pie-2-background-size': 'mapData(bar, 0, 10, 0, 100)',
        'pie-3-background-color': '#74E883',
        'pie-3-background-size': 'mapData(baz, 0, 10, 0, 100)'
      })
    .selector(':selected')
      .css({
        'border-width': 3,
        'border-color': '#333'
      })
    .selector('edge')
      .css({
        'opacity': 0.666,
        'width': 'mapData(strength, 70, 100, 2, 6)',
        'target-arrow-shape': 'triangle',
        'source-arrow-shape': 'circle',
        'line-color': 'data(faveColor)',
        'source-arrow-color': 'data(faveColor)',
        'target-arrow-color': 'data(faveColor)'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),
  
  elements: {
    nodes: [
      { data: { id: 'j', name: 'CIN', weight: 10, faveColor: '#6FB1FC', foo: 1, bar: 8, baz: 1 } },
      { data: { id: 'e', name: 'CP', weight: 10, faveColor: '#606DED', foo: 6, bar: 2, baz: 2 } },
      { data: { id: 'k', name: 'LAC', weight: 10, faveColor: '#86B342', foo: 3, bar: 5, baz: 2 } },
      { data: { id: 'g', name: 'General Population', weight: 70, faveColor: '#C07777', foo: 7, bar: 1, baz: 2 } }
    ],
    edges: [
      { data: { source: 'j', target: 'e', faveColor: '#6FB1FC', strength: 50 } },
      { data: { source: 'j', target: 'k', faveColor: '#6FB1FC', strength: 30 } },
      { data: { source: 'j', target: 'g', faveColor: '#6FB1FC', strength: 90 } },
     
      { data: { source: 'e', target: 'j', faveColor: '#606DED', strength: 105 } },
      { data: { source: 'e', target: 'k', faveColor: '#606DED', strength: 10 }},
      
      { data: { source: 'k', target: 'j', faveColor: '#86B342', strength: 20 } },
      { data: { source: 'k', target: 'e', faveColor: '#86B342', strength: 200 } },
      { data: { source: 'k', target: 'g', faveColor: '#86B342', strength: 10 } },
      
      { data: { source: 'g', target: 'j', faveColor: '#C07777', strength: 23 } }
    ]
  },
  
  ready: function(){
    window.cy = this;
    
    // giddy up
  }
});

}); // on dom ready