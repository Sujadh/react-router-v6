import React from 'react'
import { Outlet } from 'react-router-dom';

function MainPage() {
        return (<div style={{ marginLeft: "150px", marginRight: "150px", marginBottom: "150px" }}>
                <h1>This is the Mian Page</h1>
                <p style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu. Sodales ut etiam sit amet nisl purus in. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Non nisi est sit amet. Mi eget mauris pharetra et ultrices neque ornare aenean. Id leo in vitae turpis massa sed. Egestas purus viverra accumsan in nisl nisi. Adipiscing elit ut aliquam purus. Eget gravida cum sociis natoque penatibus. Euismod nisi porta lorem mollis aliquam ut porttitor. Tellus orci ac auctor augue mauris. Elementum integer enim neque volutpat ac tincidunt vitae semper. Volutpat sed cras ornare arcu dui vivamus arcu felis. Nunc aliquet bibendum enim facilisis gravida.
                        Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Faucibus turpis in eu mi bibendum neque egestas congue. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Ipsum consequat nisl vel pretium lectus quam. Mus mauris vitae ultricies leo integer malesuada nunc vel. Vivamus arcu felis bibendum ut tristique et egestas. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Diam sit amet nisl suscipit adipiscing bibendum. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Ut etiam sit amet nisl purus in mollis. Commodo sed egestas egestas fringilla phasellus faucibus. Euismod quis viverra nibh cras pulvinar mattis nunc sed.
                        Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Risus pretium quam vulputate dignissim suspendisse. Nibh mauris cursus mattis molestie a iaculis at. Sit amet consectetur adipiscing elit duis. Placerat duis ultricies lacus sed turpis tincidunt. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Curabitur vitae nunc sed velit dignissim. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Sit amet mauris commodo quis imperdiet massa tincidunt. Tristique senectus et netus et. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Massa vitae tortor condimentum lacinia quis vel eros donec. Congue mauris rhoncus aenean vel elit scelerisque. Sollicitudin nibh sit amet commodo nulla facilisi.
                        Scelerisque felis imperdiet proin fermentum leo vel. Scelerisque purus semper eget duis at tellus at. Orci ac auctor augue mauris. Consectetur lorem donec massa sapien faucibus et. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Mi eget mauris pharetra et ultrices. Consequat id porta nibh venenatis cras sed. Urna et pharetra pharetra massa. Egestas pretium aenean pharetra magna ac placerat vestibulum. Lobortis mattis aliquam faucibus purus in massa. Cras sed felis eget velit aliquet sagittis id consectetur.
                        Cursus risus at ultrices mi tempus imperdiet nulla. Puru,s in massa tempor nec feugiat nisl. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Mauris rhoncus aenean vel elit. Et tortor at risus viverra adipiscing at in tellus. Pharetra vel turpis nunc eget lorem. Donec ultrices tincidunt arcu non sodales. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Mauris sit amet massa vitae. Vulputate dignissim suspendisse in est. Maecenas sed enim ut sem viverra aliquet. Lobortis feugiat vivamus at augue eget arcu dictum. Facilisi morbi tempus iaculis urna id volutpat. Urna molestie at elementum eu. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Nibh mauris cursus mattis molestie a. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.
                </p>
                <Outlet />
        </div>
        )
}

export default MainPage;